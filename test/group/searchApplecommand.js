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
'Search apple': function (browser) {
browser
.UPclick ('body > div.mt-5 > p:nth-child(2) > a')
.page.POshop()
.search('Яблоко')
.waitForElementVisible('@Apple', "Apple is OK")
.assert.urlContains("%D0%AF%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE", 'Url is OK')
.assert.textContains('@Apple', "Супер яблоко");
}
};
