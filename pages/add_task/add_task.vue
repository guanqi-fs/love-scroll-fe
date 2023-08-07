<template>
	<view class="page">
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
					<view class="task-title-input-div">
						<view class="task-title-input-icon">
							<image src="../../static/images/tabbar/nav-task.png"></image>
						</view>
						<view class="task-title-input">
							<input type="text" placeholder="请输入任务名称" @input="taskTitleInput"/>
						</view>
					</view>
				</view>
				<view class="task-tag">
					<view class="task-option-icon">
						<image src="../../static/images/tag.png"></image>
					</view>
					<view class="task-option-text">标签</view>
					<uni-data-select
						class="uni-data-select"
						v-model="tagValue"
					    :localdata="tagRange"
					    @change="tagChange"
					></uni-data-select>
				</view>
				<view class="task-recycle">
					<view class="task-option-icon">
						<image src="../../static/images/recycle.png"></image>
					</view>
					<view class="task-option-text">重复</view>
					<uni-data-select
						class="uni-data-select"
						v-model="recycleValue"
					    :localdata="recycleRange"
					    @change="recycleChange"
					></uni-data-select>
				</view>
				<view class="task-deadline">
					<view class="task-option-icon">
						<image src="../../static/images/time.png"></image>
					</view>
					<view class="task-option-text">截止</view>
					<uni-datetime-picker class="uni-datetime-picker" v-model="single" :border="false" />
				</view>
				<view class="task-rewards">
					<view class="task-option-icon">
						<image src="../../static/images/money.png"></image>
					</view>
					<view class="task-option-text">奖励</view>
					<view class="task-rewards-value">
						<input type="number"/>
					</view>
					<view class="task-rewards-unit">积分</view>
				</view>
				<view class="task-discribe">
					<view class="task-option-text">任务描述</view>
<!-- 					<view class="task-discribe-textarea">
						<textarea placeholder="请输入任务描述"></textarea>
					</view> -->
				</view>
				<view class="submit-button">创建</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navHeight: getApp().globalData.navHeight,
				tagValue: 0,
				tagRange: [
					{ value: 0, text: "默认" },
					{ value: 1, text: "健身" },
					{ value: 2, text: "学习" },
				],
				recycleValue: 0,
				recycleRange: [
					{ value: 0, text: "仅一次" },
					{ value: 1, text: "每天" },
					{ value: 2, text: "每周" },
					{ value: 3, text: "每月" },
					{ value: 4, text: "每年" },
				],
			}
		},
		methods: {
			backToPage() {
				uni.navigateBack()
			},
			taskTitleInput() {
				
			},
			tagChange() {
				
			},
			recycleChange() {
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/common.scss";
	
	.page {
		height: 100%;
		width: 100%;
	}
	.body {
		padding-top: var(--nav-height);
		// overflow: hidden;
		/* 使用CSS变量来设置填充 */
		// height: 100%;
		// width: 100%;
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
		height: 95%;
		// margin-top: 40rpx;
		display: flex;
		flex-direction: column;
		font-size: 36rpx;
		font-weight: bold;
		.task-tag, .task-recycle, .task-deadline, .task-rewards, .submit-buttom {
		// .task-tag {
			flex: 1;
			border-bottom: #979797 2rpx solid;
			display: flex;
			align-items: center;
		}
		
		
		.task-title, .task-discribe {
			flex: 2;
			border-bottom: #979797 2rpx solid;
		}
		
		.task-title {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.task-title-text {
				text-align: center;
			}
			
			.task-title-input-div {
				width: 90%;
				height: 120rpx;
				margin-top: 40rpx;
				margin-left: 5%;
				margin-right: 5%;
				background-color: #fff;
				border-radius: 100rpx;
				display: flex;
				align-items: center;
				padding-left: 40rpx;
				padding-right: 20rpx;
				box-sizing: border-box;
				box-shadow: 0 8rpx 8rpx 0px rgba(0, 0, 0, 0.25);
				.task-title-input-icon {
					width: 64rpx;
					height: 64rpx;
					flex: none;
				}
				.task-title-input {
					flex: 1;
					text-align: left;
					margin-left: 20rpx;
				}
			}
		}
		
		.task-option-icon {
			width: 48rpx;
			height: 48rpx;
			flex: none;
		}
		
		.task-option-text {
			flex: none;
			margin-left: 20rpx;
		}
		
		.task-rewards-value {
			background-color: #fff;
			margin-left: 40rpx;
			height: 70%;
			line-height: 100rpx;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			padding: 0 20rpx;
			flex: 1;
			color: #4BC0C9;
		}
		
		.task-rewards-unit {
			flex: none;
			margin-left: 20rpx;
			font-size: 30rpx;
			color: #979797;
		}
		
		.uni-data-select {
			flex: 1;
			background-color: #fff;
			margin-left: 40rpx;
			height: 70%;
			padding: 0 20rpx;
			border-radius: 20rpx;
			line-height: 100rpx;
			display: flex;
			align-items: center;
		}
		
		.uni-date {
			flex: 1;
			background-color: #fff;
			margin-left: 40rpx;
			height: 70%;
			padding: 0 20rpx;
			border-radius: 20rpx;
			line-height: 100rpx;
			display: flex;
			align-items: center;
		}
		
		// .task-discribe {
		// 	.task-option-text {
		// 		margin-left: 0;
		// 		margin-top: 20rpx;
		// 	}
		// 	.task-discribe-textarea {
		// 		background-color: #fff;
		// 		margin: 40rpx 0;
		// 		border-radius: 20rpx;
		// 		padding: 20rpx;
		// 		box-sizing: border-box;
		// 	}
		// }
		
		.submit-button {
			flex: 1;
			width: 100%;
			height: 70%;
			background: #000;
			box-shadow: 0 8rpx 8rpx 0px rgba(0, 0, 0, 0.25);
			background: linear-gradient(90deg, #80F8FF, #6FA0FD, #A97AFA);
			border-radius: 100rpx;
			color: #fff;
			text-align: center;
			line-height: 100rpx;
		}
	}
	
	::v-deep .uni-select{
		border: none !important;
	}
	
	::v-deep  .uni-date-editor {
		// height: 50rpx;
		// box-sizing: border-box;
		height: 70rpx;
	}
</style>
