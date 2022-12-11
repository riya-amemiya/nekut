const archiver = require('archiver');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const programmingLanguageList = ['javascript', 'python'];
const createZip = async (dir) => {
    const zipPath = `${dir}/SourceCode.zip`;
    console.log(zipPath);
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', {
        zlib: { level: 9 },
    });
    output.on('close', function () {
        console.log(archive.pointer() + ' bytes');
    });
    archive.pipe(output);
    archive.glob('**/*[!zip]', { cwd: path.resolve(dir) });
    await archive.finalize();
};
for (let i = 0; i < programmingLanguageList.length; i++) {
    const programmingLanguage = programmingLanguageList[i];
    glob(`./public/data/${programmingLanguage}/*`, (err, dirs) => {
        dirs.forEach(async (dir) => {
            await createZip(dir);
        });
    });
}