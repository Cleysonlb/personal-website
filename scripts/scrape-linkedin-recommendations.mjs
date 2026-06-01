import { chromium } from "playwright";

const url =
  "https://www.linkedin.com/in/cleyson-dev/details/recommendations/?detailScreenTabIndex=0";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

const text = await page.innerText("body");
console.log(text.slice(0, 8000));
await browser.close();
