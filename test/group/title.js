module.exports = {
'Check shop title': function (browser) {
browser
.url('http://testshop.sedtest-school.ru')
.waitForElementVisible('h4', 'Заголовок загружен');
browser.assert.titleEquals("TestGym");
browser.assert.textContains("h4", "Каталог");

browser.expect.title().to.contain('TestGym');
browser.expect.element('h4').text.to.contain('Каталог');

browser.expect.title().to.equal('TestGym');
browser.expect.element('h4').text.to.equal('Каталог');

browser.expect.title().to.match(/TestGym/);
browser.expect.element('h4').text.to.match(/Каталог/);

browser.end();
}
};