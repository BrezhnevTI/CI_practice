const pageCommands = {
	search(goods) {
		this
			.setValue('@searchBar', [goods, browser.Keys.ENTER]);
		return this;
	}
};

module.exports = {
	url: 'http://testshop.sedtest-school.ru',
	commands: [pageCommands],
	elements:{
		mainpage: {selector: '//a[@class="nav-link"]', locateStrategy: 'xpath'}, 
		catalog: {selector: '//h4', locateStrategy: 'xpath'},
		searchBar: {selector: '//input[@placeholder="Поиск..."]', locateStrategy: 'xpath'},
		Parker: {selector: '//h5/a[@href="/product/29"]', locateStrategy: 'xpath'},
		Apple: {selector: '//h5/a[@href="/product/23"]', locateStrategy: 'xpath'} 
}
}