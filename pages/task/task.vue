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
			<!-- 面板 -->
			<view class="task-panel">
				<view class="task-panel-top">
					<view class="task-panel-title">任务面板</view>
					<view class="since-time">
						<uni-data-select
						  class="data-select"
						  v-model="selectValue"
						  :localdata="selectTimeRange"
						  @change="change"
						></uni-data-select>
						<view class="down-icon">
							<image src="../../static/images/down-2.png"></image>
						</view>
					</view>
				</view>
				<view class="task-panel-main">
					<view :class="taskDataItemClass" @click="changeTaskFilter()">
						<view class="task-count">{{taskData.all}}</view>
						<view class="task-data-tip">全部</view>
					</view>
					<view :class="taskDataItemClass" @click="changeTaskFilter()">
						<view class="task-count">{{taskData.doing}}</view>
						<view class="task-data-tip">进行中</view>
					</view>
					<view :class="taskDataItemClass" @click="changeTaskFilter()">
						<view class="task-count">{{taskData.end}}</view>
						<view class="task-data-tip">已结束</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
			    selectValue: 0,
			    selectTimeRange: [
					{ value: 0, text: "本日" },
					{ value: 1, text: "本周" },
					{ value: 2, text: "本月" },
			    ],
				taskData: {
					all: 7,
					doing: 5,
					end: 2
				},
				taskDataItemClass: "task-data-item"
			}
		},
		methods: {
			changeTaskFilter() {
				this.taskDataItemClass = "task-data-item item-selected"
			}
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
	
	.task-panel {
		width: 100%;
		height: 64rpx;
		margin-top: $uni-spacing-col-base;
		.task-panel-top {
			display: flex;
			align-items: center;
			.task-panel-title {
				font-size: $uni-font-size-lg;
				font-weight: bold;
				color: $uni-text-color;
				flex: 1;
			}
			.since-time {
				border: #FFF solid 1rpx;
				border-radius: $uni-border-radius-base;
				flex: none;
				display: flex;
				align-items: center;
				padding-right: $uni-spacing-row-sm;
				font-size: 12rpx;
				.data-select {
					width: 100rpx;
				}
				.down-icon {
					width: $uni-img-size-sm;
					height: $uni-img-size-sm;
				}
			}
		}
		.task-panel-main {
			width: 100%;
			height: 200rpx;
			display: flex;
			align-items: center;
			margin-top: $uni-spacing-col-base;
			.task-data-item {
				width: 30%;
				height: 200rpx;
				border: #FFF solid 1rpx;
				text-align-last: center;
				flex: 1;
				margin: 0 $uni-spacing-row-sm;
				border-radius: $uni-border-radius-base;
				background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2));
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
				opacity: 0.8;
				.task-count {
					font-size: 60rpx;
					margin-top: 40rpx;
				}
				.task-data-tip {
					margin-top: $uni-spacing-col-sm;
					font-size: $uni-font-size-sm;
				}
			}
			
			.item-selected {
				color: #FFF;
				background-color: $uni-color-primary;
			}
		}
	}
	

	
</style>
