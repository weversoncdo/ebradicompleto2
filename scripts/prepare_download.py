#!/usr/bin/env python3
import os
import sys
import shutil
import zipfile
import re
import tempfile

def main():
    root_dir = os.path.abspath(os.getcwd())
    dist_dir = os.path.join(root_dir, 'dist')
    public_dir = os.path.join(root_dir, 'public')
    download_dir = os.path.join(public_dir, 'download')

    if not os.path.exists(dist_dir):
        print("Error: dist/ directory does not exist. Run 'vite build' first.")
        sys.exit(1)

    os.makedirs(download_dir, exist_ok=True)

    # 1. Locate built CSS and JS
    assets_dir = os.path.join(dist_dir, 'assets')
    if not os.path.exists(assets_dir):
        print("Error: dist/assets does not exist.")
        sys.exit(1)

    asset_files = os.listdir(assets_dir)
    css_file = next((f for f in asset_files if f.endswith('.css')), None)
    js_file = next((f for f in asset_files if f.endswith('.js')), None)

    if not css_file or not js_file:
        print(f"Error: Missing css ({css_file}) or js ({js_file}) in dist/assets")
        sys.exit(1)

    with open(os.path.join(dist_dir, 'index.html'), 'r', encoding='utf-8') as f:
        raw_html = f.read()

    with open(os.path.join(assets_dir, css_file), 'r', encoding='utf-8') as f:
        raw_css = f.read()

    with open(os.path.join(assets_dir, js_file), 'r', encoding='utf-8') as f:
        raw_js = f.read()

    # 2. Build standalone single-file HTML (All-in-one double-clickable file)
    standalone_html = raw_html
    standalone_html = re.sub(r'<link\s+rel="stylesheet"[^>]*href="[^"]*"[^>]*>', '', standalone_html)
    standalone_html = re.sub(r'<script\s+type="module"[^>]*src="[^"]*"[^>]*></script>', '', standalone_html)
    standalone_html = standalone_html.replace('</head>', f'<style>\n{raw_css}\n</style>\n</head>')
    standalone_html = standalone_html.replace('</body>', f'<script>\n{raw_js}\n</script>\n</body>')

    with open(os.path.join(download_dir, 'ebradi-home-standalone.html'), 'w', encoding='utf-8') as f:
        f.write(standalone_html)

    # 3. Create clean index.html with relative links
    clean_html = raw_html
    with open(os.path.join(download_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(clean_html)

    # 4. Copy styles.css and app.js
    with open(os.path.join(download_dir, 'styles.css'), 'w', encoding='utf-8') as f:
        f.write(raw_css)

    with open(os.path.join(download_dir, 'app.js'), 'w', encoding='utf-8') as f:
        f.write(raw_js)

    # 5. Copy built assets folder into download/assets
    target_assets_dir = os.path.join(download_dir, 'assets')
    if os.path.exists(target_assets_dir):
        shutil.rmtree(target_assets_dir)
    shutil.copytree(assets_dir, target_assets_dir)

    # 6. Copy public assets into download directory
    for item in os.listdir(public_dir):
        if item in ['download', 'assets']:
            continue
        src_path = os.path.join(public_dir, item)
        dst_path = os.path.join(download_dir, item)
        if os.path.isfile(src_path):
            shutil.copy2(src_path, dst_path)
        elif os.path.isdir(src_path):
            if os.path.exists(dst_path):
                shutil.rmtree(dst_path)
            shutil.copytree(src_path, dst_path)

    # 7. Create README / LEIA-ME in download dir
    readme_content = """================================================================================
EBRADI - ESCOLA BRASILEIRA DE DIREITO
Código-Fonte Completo e Recursos da Página Home (HTML, CSS, JS e React)
================================================================================

Este pacote contém TODOS os arquivos e recursos da página Home da EBRADI,
incluindo layout 100% responsivo, fotos de patronos em alta resolução, carrosséis,
catálogo de cursos com 9 categorias, seção de depoimentos e suporte ao aluno.

--------------------------------------------------------------------------------
COMO UTILIZAR:
--------------------------------------------------------------------------------

OPÇÃO 1: EXECUÇÃO IMEDIATA (SEM INSTALAÇÃO OU SERVIDOR)
- Dê dois cliques no arquivo:
    ebradi-home-standalone.html
- Ele abrirá instantaneamente em qualquer navegador (Google Chrome, Microsoft Edge,
  Safari, Mozilla Firefox) com todos os estilos e interatividade embutidos!

OPÇÃO 2: SERVIDOR WEB ESTÁTICO (HOSPEDAGEM, APACHE, NGINX, CPANEL OU LOCAL)
- Os arquivos prontos para produção estão na raiz:
    - index.html
    - assets/ (contém index.css, index.js e imagens)
    - styles.css e app.js
    - imagens e logos (.svg, .png, .jpg)
- Basta copiar esses arquivos para a pasta pública de qualquer servidor web
  (ou rodar localmente com 'npx serve .' ou extensão Live Server do VS Code).

OPÇÃO 3: CÓDIGO-FONTE COMPLETO REACT / VITE / TYPESCRIPT
- A pasta 'codigo-fonte/' contém o projeto original completo:
    - package.json
    - vite.config.ts
    - tsconfig.json
    - src/ (todos os componentes React, App.tsx, catálogo de cursos, Tailwind)
    - public/ (todos os ícones e imagens)
- Para rodar no terminal com Node.js:
    cd codigo-fonte
    npm install
    npm run dev
  O site iniciará em modo de desenvolvimento com Hot Reload.

--------------------------------------------------------------------------------
RECURSOS INCLUÍDOS NESTE PACOTE:
--------------------------------------------------------------------------------
✓ Topbar com canal "Atendimento para Alunos"
✓ Navbar na cor oficial #0b1b36 com Logo EBRADI 10 Anos
✓ Carrossel de Banners de Pós-Graduação Jurídica
✓ Corpo Docente e Patronos Eméritos em destaque
✓ Seção de Depoimentos e Avaliações de Alunos
✓ Catálogo completo com 9 categorias de cursos e filtros dinâmicos
✓ Modal de Matrícula e Pré-Inscrição com cálculo de desconto
✓ Painel de Acessibilidade Completo (contraste, fontes, leitor de tela)
✓ Política de Privacidade e LGPD

EBRADI - Escola Brasileira de Direito • Nota 5 no MEC
"""
    with open(os.path.join(download_dir, 'LEIA-ME.txt'), 'w', encoding='utf-8') as f:
        f.write(readme_content)
    with open(os.path.join(download_dir, 'README.txt'), 'w', encoding='utf-8') as f:
        f.write(readme_content)

    # 8. Create ZIP using shutil.make_archive (Standard cross-platform ZIP)
    zip_path = os.path.join(download_dir, 'ebradi-home-codigo.zip')
    if os.path.exists(zip_path):
        os.remove(zip_path)

    print("Staging files for ZIP packaging...")
    with tempfile.TemporaryDirectory() as temp_dir:
        staging_dir = os.path.join(temp_dir, 'ebradi_home_completo')
        os.makedirs(staging_dir)

        # 8.1 Copy root ready-to-run files
        for f in ['ebradi-home-standalone.html', 'index.html', 'styles.css', 'app.js', 'LEIA-ME.txt', 'README.txt']:
            src = os.path.join(download_dir, f)
            if os.path.exists(src):
                shutil.copy2(src, os.path.join(staging_dir, f))

        # 8.2 Copy production assets (CSS, JS, patronos images)
        shutil.copytree(target_assets_dir, os.path.join(staging_dir, 'assets'))

        # 8.3 Copy public image assets
        for item in os.listdir(public_dir):
            if item in ['download', 'assets']:
                continue
            src = os.path.join(public_dir, item)
            dst = os.path.join(staging_dir, item)
            if os.path.isfile(src):
                shutil.copy2(src, dst)
            elif os.path.isdir(src):
                shutil.copytree(src, dst)

        # 8.4 Copy complete React source code into codigo-fonte/
        source_dir = os.path.join(staging_dir, 'codigo-fonte')
        os.makedirs(source_dir)
        shutil.copytree(os.path.join(root_dir, 'src'), os.path.join(source_dir, 'src'))

        # Copy public assets to source public/
        source_pub = os.path.join(source_dir, 'public')
        os.makedirs(source_pub)
        for item in os.listdir(public_dir):
            if item == 'download':
                continue
            src = os.path.join(public_dir, item)
            dst = os.path.join(source_pub, item)
            if os.path.isfile(src):
                shutil.copy2(src, dst)
            elif os.path.isdir(src):
                shutil.copytree(src, dst)

        # Copy project configurations
        for cfg in ['package.json', 'vite.config.ts', 'tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json', 'index.html']:
            cfg_path = os.path.join(root_dir, cfg)
            if os.path.exists(cfg_path):
                shutil.copy2(cfg_path, os.path.join(source_dir, cfg))

        print("Building standard ZIP archive with shutil.make_archive...")
        # shutil.make_archive automatically configures both MS-DOS (0x10) and Unix (0755/0644) attributes
        temp_zip = shutil.make_archive(os.path.join(temp_dir, 'archive'), 'zip', staging_dir)
        shutil.copy2(temp_zip, zip_path)

    zip_size_mb = os.path.getsize(zip_path) / (1024 * 1024)
    print(f"✅ ZIP successfully created: {zip_path} ({zip_size_mb:.2f} MB)")

    # 9. Sync download files to dist/download (critical for live web serving)
    dist_download = os.path.join(dist_dir, 'download')
    os.makedirs(dist_download, exist_ok=True)
    for item in os.listdir(download_dir):
        src_item = os.path.join(download_dir, item)
        dst_item = os.path.join(dist_download, item)
        if os.path.isfile(src_item):
            shutil.copy2(src_item, dst_item)
        elif os.path.isdir(src_item):
            if os.path.exists(dst_item):
                shutil.rmtree(dst_item)
            shutil.copytree(src_item, dst_item)
    print("✅ Synced download files to dist/download/")

    # 10. Sync to docs/download if docs folder exists (for GitHub Pages)
    docs_download = os.path.join(root_dir, 'docs', 'download')
    if os.path.exists(os.path.join(root_dir, 'docs')):
        os.makedirs(docs_download, exist_ok=True)
        for item in os.listdir(download_dir):
            src_item = os.path.join(download_dir, item)
            dst_item = os.path.join(docs_download, item)
            if os.path.isfile(src_item):
                shutil.copy2(src_item, dst_item)
            elif os.path.isdir(src_item):
                if os.path.exists(dst_item):
                    shutil.rmtree(dst_item)
                shutil.copytree(src_item, dst_item)
        print("✅ Synced download files to docs/download/")

    # 11. Self-test extraction
    test_dir = '/tmp/ebradi_zip_test_extract'
    if os.path.exists(test_dir):
        shutil.rmtree(test_dir)
    os.makedirs(test_dir, exist_ok=True)

    with zipfile.ZipFile(zip_path, 'r') as test_zf:
        test_zf.extractall(test_dir)

    extracted_count = 0
    for r, d, f in os.walk(test_dir):
        extracted_count += len(f)

    print(f"✅ Self-test verified: {extracted_count} files extracted successfully from ZIP without errors!")
    shutil.rmtree(test_dir)

if __name__ == '__main__':
    main()
