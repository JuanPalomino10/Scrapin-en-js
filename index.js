/* enlace de el scraping https://www.youtube.com/watch?v=-l8cgIOlM7k&t=338s 
 https://coronavirus.app/tracking/mexico*/
const puppeteer = require("puppeteer");

(async()=>{
    const browser=await puppeteer.launch({
        headless: false
    });

    const page=await browser.newPage();

    await loadUrl(page,"https://laboratorios.colsubsidio.com/", browser);
})();

async function loadUrl(page, url, browser){
    await page.goto(url,{
        waitUntil:["load", "domcontentloaded", "networkidle0", "networkidle2"]
    });
    
    const valorEncontrado=await page.$eval(".header fixed > .content > .overlay-menu-header",el=>el.innerHTML);
    await console.log("\nCasos Totales en mexico: "+valorEncontrado+"\n");
    await browser.close();
}