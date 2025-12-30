// Convert HTML diagrams to PNG images using Puppeteer
// Install: npm install puppeteer
// Run: node convert-to-images.js

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const sourceDir = path.join(__dirname);

const diagrams = [
    { name: 'hierarchical-diagram', width: 900, height: 700 },
    { name: 'peer-to-peer-diagram', width: 900, height: 700 },
    { name: 'pipeline-diagram', width: 1000, height: 800 },
    { name: 'production-architecture', width: 1200, height: 1000 }
];

async function convertHtmlToImage() {
    console.log('Starting browser...');
    const browser = await puppeteer.launch({
        headless: 'new'
    });

    for (const diagram of diagrams) {
        const htmlPath = path.join(sourceDir, `${diagram.name}.html`);
        const outputPath = path.join(sourceDir, `${diagram.name}.png`);

        if (!fs.existsSync(htmlPath)) {
            console.error(`❌ File not found: ${htmlPath}`);
            continue;
        }

        console.log(`Converting ${diagram.name}.html...`);

        const page = await browser.newPage();
        await page.setViewport({
            width: diagram.width,
            height: diagram.height,
            deviceScaleFactor: 2  // High DPI for better quality
        });

        await page.goto(`file://${htmlPath}`, {
            waitUntil: 'networkidle0'
        });

        // Wait for animations to settle
        await page.waitForTimeout(1000);

        await page.screenshot({
            path: outputPath,
            fullPage: false,
            omitBackground: false
        });

        console.log(`✅ Created ${diagram.name}.png`);
        await page.close();
    }

    await browser.close();
    console.log('\n✨ Conversion complete!');
}

convertHtmlToImage().catch(console.error);
