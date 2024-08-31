const puppeteer = require('puppeteer');

async function main(){
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.goto("https://novelfire.docsachhay.net/book/apocalypse-modifying-everything-building-an-iron-fortress/chapter-1")
 await page.screenshot({'path':'novel.png'})
 await browser.close();
}
main();