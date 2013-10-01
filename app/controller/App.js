Ext.define('SlideNav.controller.App',{
	extend: 'Ext.app.Controller',
	config:{
		refs:{
		main : 'main',
			navigation : 'nested-menu',
			navBtn : 'button[name="nav_btn"]'
		},

		control : {
			navBtn : {
				tap : 'toggleNav'
			},

			navigation : {
				leafitemtap: function(that, list, index, target, record) {
					this.toggleNav();
				}
			}
		}
	},

	/**
	 * Toggle the slide navogation view
	 */
	toggleNav: function() {
		var me = this,
			main = me.getMain(),
			mainEl = main.element;

		if (mainEl.hasCls('out')) {
			mainEl.removeCls('out').addCls('in');
			main.setMasked(false);
		} else {
			mainEl.removeCls('in').addCls('out');
			main.setMasked(true);
		}
	}
});
