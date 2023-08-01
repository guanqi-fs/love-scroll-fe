<template>
	<view>
		<view class="bg">
			<view class="bg-img">
				<image src="../../static/images/bg.png"></image>
			</view>
			<view class="bg-blur"></view>
			<view class="bg-white"></view>
		</view>
		<view class="body"
			:style="{ 
				'--nav-height': navHeight + 'px',
			}"
		>
			<view class="top">
				<view class="back-button" @tap="backToPage">
					<image src="../../static/images/左箭头.png"></image>
				</view>
				<view class="title">创建任务</view>
			</view>
			<!-- <view class="white-bg"></view> -->
			<view class="main">
				<view class="task-title">
					<view class="task-title-text">任务名称</view>
				</view>
				<view class="task-tag">
					<view class="task-tag-text">标签</view>
				</view>
				<view class="task-recycle">
					<view class="task-recycle-text">重复</view>
				</view>
				<view class="task-deadline">
					<view class="task-deadline-text">截止</view>
				</view>
				<view class="task-rewards">
					<view class="task-rewards-text">奖励</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navHeight: getApp().globalData.navHeight,
			}
		},
		methods: {
			backToPage() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/common.scss";
	*{margin:0; padding: 0;}
	html, body{ height: 100%; }
	.body {
		padding-top: var(--nav-height);
		// overflow: hidden;
		/* 使用CSS变量来设置填充 */
	}
	
	.top {
		height: 60rpx;
		position: relative;
		.back-button {
			height: 60rpx;
			width: 60rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		.title {
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
			line-height: 60rpx;
		}
	}
	.white-bg {
		width: 100%;
		height: 100%;
		background-color: #fff;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		border-radius: 20rpx 20rpx 0 0;
	}
	
	.main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
