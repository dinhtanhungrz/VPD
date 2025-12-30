import fs from 'fs/promises';


export async function readTextFile(filePath) {
    return await fs.readFile(filePath, 'utf8');
}


export async function writeTextFile(filePath, content) {
    await fs.writeFile(filePath, content, 'utf8');
}
