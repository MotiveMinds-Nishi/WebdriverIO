
describe('Demo Test', () => {

    it('Test Scenario1 Test', async () => {
        browser.url('https://www.polestar.com/se/developer/get-started/')
        await browser.maximizeWindow()
        await $('#onetrust-accept-btn-handler').click()
        await browser.$("main span.css-1lfoa71").click()
        await expect(browser).toHaveUrl("https://www.polestar.com/global/")
        await $('button[type="button"]').click()

        await $('#165013919').click()

        await browser.$("aria/Discover Polestar 2").click()
        await expect(browser).toHaveUrl("https://www.polestar.com/global/polestar-2/")
        await $('button[type="button"]').click()
        await browser.$("aria/Polestar 3[role=\"menuitem\"]").click()
        await expect(browser).toHaveUrl("https://www.polestar.com/global/polestar-3/")
        await $('button[type="button"]').click()
        await browser.$("aria/Polestar 4[role=\"menuitem\"]").click()
        await expect(browser).toHaveUrl("https://www.polestar.com/global/polestar-4/")
        await $('button[type="button"]').click()
        await browser.$("aria/Home[role=\"menuitem\"]").click()
        await expect(browser).toHaveUrl("https://www.polestar.com/global/")
    })
})