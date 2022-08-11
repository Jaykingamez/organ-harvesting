import fs from 'fs';
import path from 'path';


// Reads File, strip whitespace, and filter out null and undefined rows
export function readFileArray(filePath: string): string[]{
    console.log(path.resolve());
    let array = fs.readFileSync(path.resolve(filePath), 'utf-8').split('\n');
    array.map((line) => {line.trim()});
    array = array.filter(Boolean);
    return array;
}
