<script>
	export default {
		globalData: {
			navHeight: 0,
		},
		onLaunch: function() {
			const systemInfo = uni.getSystemInfoSync();
			this.globalData.statusBarHeight = systemInfo.statusBarHeight; //状态栏的高度

			if (systemInfo.platform == 'mp-weixin') { //微信小程序
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
				this.globalData.navHeight = menuButtonInfo.bottom + menuButtonInfo.top - this.globalData
					.statusBarHeight;
			} else { //H5和其他平台
				this.globalData.navHeight = this.globalData.statusBarHeight + 44; //这里44是默认的导航栏高度，你可以根据实际情况调整
			}
			console.log("顶部距离高度：", this.globalData.navHeight)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

	}
</script>

<style>
	/*每个页面公共css */
</style>
