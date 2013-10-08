Ext.define('SlideNav.store.Menu', {
	extend: 'Ext.data.TreeStore',
	config: {
		model: 'SlideNav.model.Menu',
		defaultRootProperty: 'items',
		root: {
			items: [
				{
					text: 'Item 1',
					items: [
						{
							text: 'Sub Item 1',
							items: [
								{
									text: 'Leaf Item 1',
									leaf: true
								}, {
									text: 'Leaf Item 2',
									leaf: true
								}, {
									text: 'Leaf Item 3',
									leaf: true
								}
							]
						}, {
							text: 'Sub Item 2',
							items: [
								{
									text: 'Leaf Item 1',
									leaf: true
								}, {
									text: 'Leaf Item 2',
									leaf: true
								}, {
									text: 'Leaf Item 3',
									leaf: true
								}, {
									text: 'Leaf Item 4',
									leaf: true
								}
							]
						}
					]
				}, {
					text: 'Item 2',
					items: [
						{
							text: 'Leaf Item 1',
							leaf: true
						}, {
							text: 'Leaf Item 2',
							leaf: true
						}, {
							text: 'Leaf Item 3',
							leaf: true
						}, {
							text: 'Leaf Item 4',
							leaf: true
						}
					]
				}, {
					text: 'Item 3',
					leaf: true
				}
			]
		}
	}
});
