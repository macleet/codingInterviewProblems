import fs from "fs";
import playwright from "playwright";

const browser = await playwright["chromium"].launch({headless: false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.techinterviewhandbook.org/grind75/?hours=40&weeks=26&mode=all&grouping=none");

const problemDescriptions = [];
for (const listItem of await page.locator("[role='listitem']").all()) {
    const leetcodePage = await context.newPage();
    if (await listItem.locator("svg").count() > 0) continue;  // skip premium problems
    const problemName = await listItem.locator("a").textContent();
    const leetcodeLink = await listItem.locator("a").getAttribute("href");
    await leetcodePage.goto(leetcodeLink);
    const description = await leetcodePage.locator('.elfjS').allTextContents();
    problemDescriptions.push(description);
    leetcodePage.close();

    fs.writeFile(`${problemName.replace(/\s+/g, "")}.js`, "/*\n" + description + "\n*/", (err) => {
        if (err) console.error("Error writing file:", err)
    });
}

await browser.close();