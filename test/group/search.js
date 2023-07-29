module.exports = {
before(browser) {        
        browser
        .url('http://testshop.sedtest-school.ru')
        .waitForElementVisible('xpath', '//a[@class="nav-link"]', 'Main page opened');
        browser
        .assert.textContains('h4', 'Каталог');
},
after(browser){
        browser.end();
},
'Search Parker': function (browser) {
browser
.setValue('xpath', '//input[@placeholder="Поиск..."]', ['Ручка', browser.Keys.ENTER]);
browser
.useXpath()
.waitForElementVisible('//h5/a[@href="/product/29"]', "Pen is OK")
.assert.urlContains("%D0%A0%D1%83%D1%87%D0%BA%D0%B0", 'Url is OK')
.assert.textContains('//h5/a[@href="/product/29"]', "Ручка Паркер");
},
'Search apple': function (browser) {
browser
.setValue('xpath', '//input[@placeholder="Поиск..."]', ['Яблоко', browser.Keys.ENTER]);
browser
.useXpath()
.waitForElementVisible('//h5/a[@href="/product/23"]', "Apple is OK")
.assert.urlContains("%D0%AF%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE", 'Url is OK')
.assert.textContains('//h5/a[@href="/product/23"]', "Супер яблоко");
},
};
