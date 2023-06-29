<template>
	<view>
		<view class="bg">
			<view class="bg-img">
				<image src="../../static/images/bg.png"></image>
			</view>
			<view class="bg-blur"></view>
			<view class="bg-white"></view>
		</view>
		<view class="body">
			<!-- 顶部 -->
			<view class="task-top">
				<view class="option-button">
					<image src="../../static/images/option.png" mode="aspectFill"></image>
				</view>
			</view>
			<!-- 搜索框 -->
			<view class="search">
				<view class="search-input">
					<input type="text" placeholder="搜索"/>
				</view>
				<view class="search-icon">
					<image src="../../static/images/search.png"></image>
				</view>
			</view>
			<!-- 面板标题 -->
			<view class="task-panel">
				<view class="task-panel-title">任务面板</view>
				<view class="since-time">
					<uni-data-select
					  v-model="value"
					  :localdata="range"
					  @change="change"
					></uni-data-select>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
			    value: 0,
			    range: [
					{ value: 0, text: "本日" },
					{ value: 1, text: "本周" },
					{ value: 2, text: "本月" },
			  ],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import "../../common/common.scss";
	.task-top {
		width: 100%;
		height: 64rpx;
		.option-button {
			width: 64rpx;
			height: 64rpx;
		}
	}
	
	.search {
		width: 100%;
		height: 88rpx;
		display: flex;
		align-items: center;
		border: #FFF solid 1rpx;
		margin-top: $uni-spacing-col-base;
		border-radius: $uni-border-radius-base;
		background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4));
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		.search-input {
			flex: 1;
			width: 100%;
			height: 64rpx;
		    display: flex;
		    align-items: center;
			padding-left: $uni-spacing-row-sm;
		}
		.search-icon {
			flex: none;
			width: 64rpx;
			height: 64rpx;
			padding-right: $uni-spacing-row-sm;
		}
	}
	
</style>
