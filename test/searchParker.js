module.exports = {
before(browser) {	
	browser
	.page.POshop()
	.navigate()
	.waitForElementVisible('@mainpage', 'Main page opened')
	.assert.textContains('@catalog', 'Каталог');
},
after(browser){
	browser.end();
},
'Search Parker': function (browser) {
browser
.page.POshop()
.search('Ручка')
.waitForElementVisible('@Parker', "Pen is OK")
.assert.urlContains("%D0%A0%D1%83%D1%87%D0%BA%D0%B0", 'Url is OK')
.assert.textContains('@Parker', "Ручка Паркер");
}
};