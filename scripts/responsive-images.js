import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sizes = [640, 320];
const inputDir = 'src/content';
const outputFolder = 'responsive-media';

async function findImageFiles(dir) {
    try {
        const files = await fs.promises.readdir(dir, {
            recursive: true,
            withFileTypes: true
        });

        return files
            .filter(dirent => dirent.isFile())
            .filter(dirent => path.basename(dirent.parentPath) != outputFolder)
            .map(dirent => path.join(dirent.parentPath || '', dirent.name))
            .filter(file => file.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i));
    } catch (error) {
        console.error('Error reading directory:', error);
        return [];
    }
}

async function processImages() {
    const files = await findImageFiles(inputDir);

    console.log(`processing ${files.length} images...`);

    for (const file of files) {
        const imageDir = path.join(path.dirname(file), outputFolder);
        if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir);
        const baseName = path.parse(file).name;

        // if image has already been processed, continue
        if (fs.existsSync(path.join(imageDir, `${baseName}-${sizes[0]}.webp`)))
            continue;

        await sharp(file)
            .webp({ quality: 100 })
            .toFile(path.join(imageDir, `${baseName}.webp`));

        await sharp(file)
            .jpeg({ quality: 100 })
            .toFile(path.join(imageDir, `${baseName}.jpg`));

        for (const size of sizes) {
            await sharp(file)
                .resize(size)
                .webp({ quality: 100 })
                .toFile(path.join(imageDir, `${baseName}-${size}.webp`));

            await sharp(file)
                .resize(size)
                .jpeg({ quality: 100 })
                .toFile(path.join(imageDir, `${baseName}-${size}.jpg`));
        }

        console.log(`${file}`);
    }

    console.log('images all done!');
}

processImages().catch(console.error);