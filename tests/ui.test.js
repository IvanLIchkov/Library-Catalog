const {expect, test} = require("@playwright/test");
const pageUrl = "http://localhost:5500";


test('Verify "All Books" link is vissible', async ({page}) => {
    await page.goto(pageUrl)
    await page.waitForSelector('nav.navbar')
    const allBooksLink = await page.$('a[href="/catalog"]')

    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    expect(isAllBooksLinkVisible).toBe(true);
});

test('Verify Login Button is vissible', async ({page}) => {
    await page.goto(pageUrl)
    await page.waitForSelector('a[href="/login"]')
    const loginButton = await page.$('a[href="/login"]')

    const loginButtonIsVissible = await loginButton.isVisible();

    expect(loginButtonIsVissible).toBe(true);
});

test('Verify Register Button is vissible', async ({page}) => {
    await page.goto(pageUrl)
    await page.waitForSelector('a[href="/register"]')
    const registerButton = await page.$('a[href="/register"]')

    const registerButtonIsVissible = await registerButton.isVisible();

    expect(registerButtonIsVissible).toBe(true);
});