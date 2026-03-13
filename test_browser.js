import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

    await page.goto('http://localhost:8080');

    // wait a bit for react to render and potentially crash
    await new Promise(r => setTimeout(r, 2000));

    await browser.close();
})();
