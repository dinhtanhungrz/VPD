import { readTextFile, writeTextFile } from './utils/file.util.js';
import { joinPath, __dirname } from './utils/path.util.js';
import { getSystemInfo } from './utils/os.util.js';

async function main() {
    
    const filePath = joinPath(__dirname, 'data.txt');

    
    await writeTextFile(filePath, 'Hello Node Core');

    
    const content = await readTextFile(filePath);
    console.log('File content:', content);

    
    const systemInfo = getSystemInfo();
    console.log('System info:', systemInfo);
}

main();
