const {expect, test} = require("@playwright/test");

test('Verify "All Books" link is vissible', async ({page}) => {
    await page.goto("http://localhost:5500")
    await page.waitForSelector('nav.navbar')
    const allBooksLink = await page.$('a[href="/catalog"]')

    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    expect(isAllBooksLinkVisible).toBe(true);
});