import * as fs from 'fs'
import * as path from 'path'
import { spawn } from 'child_process'

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
    const command = 'node -r ts-node/register ../../src/index.ts'

    for (const subDir of subDirs) {
        spawn(command, ['--f'], { shell: true, stdio: 'inherit', cwd: subDir })
    }
}

void updateExamples()
