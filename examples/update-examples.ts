import * as fs from 'fs'
import * as path from 'path'
import { run } from '../src/run'

function findDirectoriesWithFile(baseDir: string, targetFile: string, results: string[] = []): string[] {
    const files = fs.readdirSync(baseDir);

    for (const file of files) {
        const filePath = path.join(baseDir, file)
        const stats = fs.statSync(filePath)

        if (stats.isDirectory()) {
            findDirectoriesWithFile(filePath, targetFile, results)
        } else if (file === targetFile) {
            results.push(path.resolve(baseDir))
        }
    }

    return results;
}

async function updateExamples(): Promise<void> {
    const subDirs = findDirectoriesWithFile('./', 'swagger.json')

    for (const subDir of subDirs) {
        process.chdir(subDir)
        console.log(`Current working directory: ${process.cwd()}`);
        await run('-f')
    }
}

void updateExamples()
