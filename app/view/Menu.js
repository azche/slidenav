Ext.define('SlideNav.view.Menu', {
	extend: 'Ext.NestedList',
	xtype: 'nested-menu',

	config: {
		store: 'Menu',
		cls : 'nav-list',

		detailCard: false
	}
});
