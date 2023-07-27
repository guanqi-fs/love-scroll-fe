<template>
	<view>
		<view class="bg">
			<view class="bg-img">
				<image src="../../static/images/bg.png"></image>
			</view>
			<view class="bg-blur"></view>
			<view class="bg-white"></view>
		</view>
		<view class="body" :style="{ '--nav-height': navHeight + 'px' }">
			<view class="task-top">
				<view class="left-allow">
					<image src="../../static/images/左箭头.png"></image>
				</view>
				<view class="time-limit">{{timeLimit}}</view>
				<view class="right-allow">
					<image src="../../static/images/右箭头.png"></image>
				</view>
			</view>
			<view class="task-time-div">
				<view 
				v-for="item in selectTimeRange" 
				:key="item.value" 
				v-bind:class="item.value == selectValue ? `task-time-options-item time-options-active` : `task-time-options-item` "
				@tap="changeSelectedTimeRange(item.value)"
				>{{item.text}}</view>
			</view>
			<view class="task-panel">
				<view class="task-belong">
					<view class="task-belong-select">
						<view class="task-belong-base-top"></view>
						<view class="task-belong-base-button"></view>
						<view v-bind:class="onwerTaskClass" @tap="changeTaskBelong(EnumTaskBelong.ownerTask)">我的任务</view>
						<view v-bind:class="anotherTaskClass" @tap="changeTaskBelong(EnumTaskBelong.anotherTask)">她的任务</view>
					</view>
				</view>
				<view class="task-panel-main">
					<view class="task-progress" :style="{ '--task-progress': taskProgress + '%' }">
						<view class="task-progress-bar"></view>
						<view class="task-progress-text"> {{taskProgress}} %</view>
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
				navHeight: getApp().globalData.navHeight,
				taskProgress: "50",
				EnumTaskBelong: {
					ownerTask: "owner",
					anotherTask: "another",
				},
				onwerTaskClass: "owner-task-panel-active",
				anotherTaskClass: "another-task-panel",
				timeLimit: "2023年7月25日",
				selectedTaskBelong: "owner",
			    selectValue: 0,
			    selectTimeRange: [
					{ value: 0, text: "日" },
					{ value: 1, text: "周" },
					{ value: 2, text: "月" },
					{ value: 3, text: "年" },
			    ],
				taskPanelData: [
					{ count: 7, tip: "全部"},
					{ count: 5, tip: "进行中"},
					{ count: 2, tip: "已结束"},
				],
				taskList: [
					{
						createTime: {
							year: 2023,
							month: 6,
							day: 30,
							hour: 18,
							minute: 15,
							seconds: 40,
						},
						title: "出门买菜",
						details: "买青菜，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋，猪肉，牛肉，鸡蛋",
						rewards: 100,
					}
				]
			}
		},
		methods: {
			changeSelectedTimeRange(value) {
				this.selectValue = value
			},
			changeTaskBelong(option) {
				this.selectedTaskBelong = option
				if (option == this.EnumTaskBelong.ownerTask) {
					this.onwerTaskClass = "owner-task-panel-active"
					this.anotherTaskClass = "another-task-panel"
				} else {
					this.onwerTaskClass = "onwer-task-panel"
					this.anotherTaskClass = "another-task-panel-active"
				}
			}
		},
	}
</script>

<style lang="scss">
	@import "../../common/common.scss";
	.body {
		padding-top: var(--nav-height); /* 使用CSS变量来设置填充 */
	}
	
	.task-top {
		width: 100%;
		height: 64rpx;
		display: flex;
		align-items: center;
		color: #433C82;
		font-weight: bold;
		.left-allow {
			width: 30rpx;
			height: 30rpx;
			flex: none;
		}
		.right-allow {
			width: 30rpx;
			height: 30rpx;
			flex: none;
		}
		.time-limit {
			flex: 1;
			text-align: center;
			font-size: 36rpx;
		}
	}
	
	.task-time-div {
		width: 100%;
		height: 130rpx;
		border-radius: 100rpx;
		background-color: #fff;
		margin-top: 40rpx;
		display: flex;
		padding: 0 30rpx;
		font-size: 40rpx;
		font-weight: bold;
		box-sizing: border-box;
		color: #383838;
		.task-time-options-item {
			flex: 1;
			text-align: center;
			line-height: 130rpx;
		}
		.time-options-active {
			color: #fff;
			background: linear-gradient(45deg, #80F8FF, #6FA0FD, #A97AFA);
			border-radius: 100rpx;
			height: 90rpx;
			margin-top: 20rpx;
			line-height: 90rpx;
			transition: all 0.1s ease-out;
			transform: translateX(0);
		}
	}
	
	.task-belong {
		width: 100%;
		height: 120rpx;
		position: relative;
		font-size: 38rpx;
		font-weight: bold;
		margin-top: 40rpx;
		color: #383838;
		text-align: center;
		border-radius: 20rpx;
		.task-belong-base-top {
			height: 50rpx;
			width: 100%;
			position: absolute;
			top: 20rpx;
			left: 0;
			background-color: #E3E2E2;
			z-index: -1;
			border-radius: 20rpx;
		}
		.task-belong-base-button {
			height: 50rpx;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: #fff;
			z-index: -1;
			border-radius: 20rpx;
		}
		.owner-task-panel-active {
			width: 50%;
			position: absolute;
			left: 0;
			bottom: 0;
			border-radius: 20rpx 70rpx 0 0;
			background-color: #fff;
			height: 120rpx;
			line-height: 120rpx;
			color: #383838;
			transition: all 0.1s ease-out;
			transform: translateX(0);
		}
		.onwer-task-panel {
			width: 50%;
			position: absolute;
			left: 0;
			bottom: 0;
			border-radius: 20rpx 0 70rpx 0;
			background-color: #E3E2E2;
			height: 100rpx;
			line-height: 100rpx;
			color: #6A6A6A;
		}
		.another-task-panel {
			width: 50%;
			position: absolute;
			right: 0;
			bottom: 0;
			border-radius: 0 20rpx 0 70rpx;
			background-color: #E3E2E2;
			height: 100rpx;
			line-height: 100rpx;
			color: #6A6A6A;
		}
		.another-task-panel-active {
			width: 50%;
			position: absolute;
			right: 0;
			bottom: 0;
			border-radius: 70rpx 20rpx 0 0;
			background-color: #fff;
			height: 120rpx;
			line-height: 120rpx;
			color: #383838;
			transition: all 0.1s ease-out;
			transform: translateX(0);
		}
	}
	
	.task-panel-main {
		width: 100%;
		height: 300rpx;
		background-color: #fff;
		border-radius: 0 0 20rpx 20rpx;
		padding-top: 20rpx;
		.task-progress {
			width: 100%;
			height: 40rpx;
			display: flex;
			align-items: center;
			padding: 0 36rpx;
			box-sizing: border-box;
			.task-progress-bar {
				flex: 1;
				height: 20rpx;
				border-radius: 20rpx;
				background: linear-gradient(90deg, #80F8FF, #6FA0FD, #A97AFA, var(--task-progress), transparent 0);
				border: 3px solid #eee;
			}
			.task-progress-text {
				flex: none;
				margin-left: 10rpx;
			}
		}

	}
	
</style>
