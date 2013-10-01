Ext.define('SlideNav.view.Viewport', {
	extend: 'Ext.Container',
	xtype: 'app_viewport',
	requires: [
		'Ext.TitleBar'
	],

	config: {
		layout: 'hbox',
		items: [
			{
				xtype: 'main',
				cls: 'slide',
				width: '100%'
			}, {
				xtype: 'nested-menu',
				width: 200
			}
		]
	}
});
