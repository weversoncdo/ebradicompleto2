import { execSync } from 'child_process';
import path from 'path';

const scriptPath = path.resolve(process.cwd(), 'scripts', 'prepare_download.py');

try {
  console.log('Running python3 scripts/prepare_download.py...');
  execSync(`python3 "${scriptPath}"`, { stdio: 'inherit' });
  console.log('Download preparation complete.');
} catch (error) {
  console.error('Error executing prepare_download.py:', error);
  process.exit(1);
}
