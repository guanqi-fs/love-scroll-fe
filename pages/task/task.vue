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
				'--task-time-y': taskTimeY + 'rpx' , 
				'--task-list-y': taskListY + 'rpx',
				'--task-list-height': taskListHeight  + 'rpx',
				'--task-list-bg-height': taskListBgHeight  + 'rpx',
			}"
			
		>
			<view class="task-top-fixed">
				<view class="task-top">
					<view class="left-allow">
						<image src="../../static/images/左箭头.png"></image>
					</view>
					<view class="time-limit">{{timeLimit}}</view>
					<view class="right-allow">
						<image src="../../static/images/右箭头.png"></image>
					</view>
				</view>
				<!-- 任务时间周期 -->
				<view class="task-time-div" id="task-time-div">
					<view v-for="item in selectTimeRange" :key="item.value"
						v-bind:class="item.value == selectValue ? `task-time-options-item time-options-active` : `task-time-options-item` "
						@tap="changeSelectedTimeRange(item.value)">{{item.text}}</view>
				</view>
			</view>
			<view id="task-time-y"></view>
			<scroll-view scroll-y="true" @scroll="handleScroll" class="task-scroll-view">
				<!-- 任务面板 -->
				<view class="task-panel" :style="{opacity: taskPanelOpacity}">
					<view class="task-belong">
						<view class="task-belong-select">
							<view class="task-belong-base-top"></view>
							<view class="task-belong-base-button"></view>
							<view v-bind:class="onwerTaskClass" @tap="changeTaskBelong(EnumTaskBelong.ownerTask)">我的任务
							</view>
							<view v-bind:class="anotherTaskClass" @tap="changeTaskBelong(EnumTaskBelong.anotherTask)">
								她的任务</view>
						</view>
					</view>
					<view class="task-panel-main">
						<view class="task-progress" :style="{ '--task-progress': taskProgress + '%' }">
							<view class="task-progress-bar"></view>
							<view class="task-progress-text"> {{taskProgress}} %</view>
						</view>
						<view class="task-panel-data">
							<view class="all-task-data">
								<view class="task-data-title">全部任务</view>
								<view class="task-data-num">
									<span class="task-count">4</span>
									<span class="task-unit">项</span>
								</view>
							</view>
							<view class="task-dividing-line"></view>
							<view class="end-task-data">
								<view class="task-data-title">已完成</view>
								<view class="task-data-num">
									<span class="task-count">2</span>
									<span class="task-unit">项</span>
								</view>
							</view>
							<view class="executing-task-data">
								<view class="task-data-title">未完成</view>
								<view class="task-data-num">
									<span class="task-count">2</span>
									<span class="task-unit">项</span>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view id="task-list-y"></view>
				<!-- 任务列表 -->
				<view class="task-list">
					<view class="task-list-bg"></view>
					<view class="task-list-top-bg" :style="{opacity: 1 - taskPanelOpacity}"></view>
					<view class="task-list-main">
						<view class="task-list-top">
							<view class="task-list-title">任务列表</view>
							<view class="task-tag">
								<view class="task-tag-item-active">全部</view>
								<view class="task-tag-item">全部</view>
								<view class="task-tag-item">全部</view>
								<view class="task-tag-item">全部</view>
								<view class="task-tag-item">全部</view>
								<view class="task-tag-item">全部</view>
								<view class="task-tag-item">全部</view>
							</view>
						</view>
						
						<view class="task-item" v-for="(item, index) in tasks" :key="index">
							<view class="task-item-left">
								<view class="task-item-left-top">
									<view class="task-item-title">{{item.title}}</view>
									<view class="task-item-finish-label">
										<image src="../../static/images/finish.png" v-if="!item.status"></image>
										<image src="../../static/images/finish-active.png" v-else></image>
									</view>
								</view>
								<view class="task-item-discribe">{{item.describe}}</view>
								<view class="task-item-end-time">{{item.deadline}}</view>
							</view>
							<view class="task-item-right">
								<view class="task-finish" v-if="!item.status">
									<view class="task-item-rewards">
										<span class="task-item-rewards-value">{{item.reward}}</span>
										<span class="task-item-rewards-tip">积分</span>
									</view>
									<view class="task-item-finish-button">
										<view class="task-item-finish-button-bg">完成</view>
									</view>
								</view>
								<view class="task-finished" v-else>
									<view class="task-finished-title">已完成</view>
								</view>
								
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			
			<!-- 创建任务按钮 -->
			<view class="create-task-button" @tap="toCreateTaskPage()">
				<view class="create-task-icon">
					<image src="../../static/images/加号.png"></image>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import { mapState, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				taskPanelOpacity: 1,
				taskListY: 0,
				taskTimeY: 0,
				taskListHeight: 0,
				taskListBgHeight: 0,
				navHeight: getApp().globalData.navHeight,
				taskProgress: "50",
				EnumTaskBelong: {
					ownerTask: "owner",
					anotherTask: "another",
				},
				onwerTaskClass: "owner-task-panel-active",
				anotherTaskClass: "another-task-panel",
				timeLimit: "2023-7-25 ~ 2023-7-26",
				selectedTaskBelong: "owner",
				selectValue: 0,
				selectTimeRange: [{
						value: 0,
						text: "日"
					},
					{
						value: 1,
						text: "周"
					},
					{
						value: 2,
						text: "月"
					},
					{
						value: 3,
						text: "年"
					},
				],
				taskPanelData: [{
						count: 7,
						tip: "全部"
					},
					{
						count: 5,
						tip: "进行中"
					},
					{
						count: 2,
						tip: "已结束"
					},
				],
				// taskList: this.getTasks
			}
		},
		computed: {
			...mapState(['tasks'])
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
			},
			toCreateTaskPage() {
				uni.navigateTo({
					url: "/pages/add_task/add_task"
				})
			},
			getTaskListY() {
				const query = uni.createSelectorQuery();
				query.select('#task-list-y').boundingClientRect();
				query.exec((res) => {
					this.taskListY = this.pxToRpx(res[0].top + 10)
					console.log("getTaskListY", this.taskListY); // 输出元素的 Y 坐标（相对于页面顶部的距离）
					this.getTaskListHeight()
				});
			},
			getTaskTimeY() {
				const query = uni.createSelectorQuery();
				query.select('#task-time-y').boundingClientRect();
				query.exec((res) => {
					console.log(res[0]);
					this.taskTimeY = this.pxToRpx(res[0].bottom + 15)
					console.log("getTaskTimeY", this.taskTimeY); // 输出元素的 Y 坐标（相对于页面顶部的距离）
				});
			},
			pxToRpx(pxValue) {
				let systemInfo = uni.getSystemInfoSync();
				let pxToRpxScale = 750 / systemInfo.windowWidth;
				let rpxValue = pxValue * pxToRpxScale;
				return rpxValue
			},
			handleScroll(e) {
				let opacity = Math.max(1 - e.detail.scrollTop / 200, 0);
				this.taskPanelOpacity = opacity;
			},
			getTaskListHeight() {
				let systemInfo = uni.getSystemInfoSync();
				this.taskListHeight = this.pxToRpx(systemInfo.windowHeight - 20) - this.taskListY
				console.log("任务列表高度：", this.taskListHeight)
			},
			getTaskListBgHeight() {
				this.taskListBgHeight = this.taskListHeight + 220 * this.$store.getters.getTasks.length
			}
		},
		onReady() {
			this.getTaskListY()
			this.getTaskTimeY()
			this.getTaskListBgHeight()
		},
		onShow() {
			this.getTaskListBgHeight()
		}
	}
</script>

<style lang="scss">
	@import "../../common/common.scss";

	.body {
		padding-top: var(--nav-height);
		// overflow: hidden;
		/* 使用CSS变量来设置填充 */
	}
	
	.task-top-fixed {
		padding: 0 $uni-spacing-row-base;
		box-sizing: border-box;
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
		box-shadow: 0 4rpx 20rpx 10rpx rgba(0, 0, 0, 0.05);
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
			// transition: all 0.1s ease-out;
			// transform: translateX(0);
		}
	}
	
	.task-panel {
		padding: 0 $uni-spacing-row-base;
		box-sizing: border-box;
		z-index: 9999;
	}

	.task-belong {
		z-index: 9999;
		width: 100%;
		height: 120rpx;
		position: relative;
		font-size: 38rpx;
		font-weight: bold;
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
		height: 240rpx;
		background-color: #fff;
		border-radius: 0 0 20rpx 20rpx;
		padding-top: 20rpx;
		z-index: 9999;
		box-shadow: 0 4rpx 20rpx 10rpx rgba(0, 0, 0, 0.05);
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

		.task-panel-data {
			width: 100%;
			height: 200rpx;
			padding-top: 20rpx;
			display: flex;
			padding: 36rpx 36rpx;
			box-sizing: border-box;
			text-align: center;
			font-weight: bold;

			.all-task-data {
				flex: 3;
				color: #383838;
			}

			.task-dividing-line {
				border-left: #979797 2px solid;
				height: 100rpx;
				margin: 10rpx 42rpx;
				flex: none;
			}

			.end-task-data {
				flex: 3;
				color: #433C82;
			}

			.executing-task-data {
				flex: 3;
				color: #979797;
			}

			.task-data-title {
				font-size: 34rpx;
			}

			.task-data-num {
				margin-top: 20rpx;

				.task-count {
					font-size: 42rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
	

	
	.task-scroll-view {
		margin-top: 40rpx;
	}

	.task-list {
		width: 100%;
		// height: 100%;
		// max-height: calc(var(--task-list-height) + 500rpx);
		// min-height: var(--task-list-height);
		height: var(--task-list-height);
		margin-top: 40rpx;
		position: relative;
		padding: 0 $uni-spacing-row-base;
		box-sizing: border-box;
		padding-top: $uni-spacing-col-base;
		.task-list-bg {
			width: 100%;
			height: var(--task-list-bg-height);
			min-height: var(--task-list-height);
			background-color: #fff;
			opacity: 0.6;
			// position: sticky;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			border-radius: 20rpx 20rpx 0 0;
		}
		.task-list-top-bg {
			width: 100%;
			height: 220rpx;
			background-color: #fff;
			border-radius: 20rpx;
			box-shadow: 0 8rpx 8rpx 0px rgba(0, 0, 0, 0.25);
			position: fixed;
			top: var(--task-time-y);
			left: 0;
			z-index: 9998;
		}
		.task-list-main {
			// position: absolute;
			// top: 0;
			// left: 0;
			
			.task-list-top {
				position: sticky;
				top: 40rpx;
				left: 0;
				z-index: 9998;
				.task-list-title {
					font-weight: bold;
					font-size: 40rpx;
					height: 40rpx;
					position: relative;
					z-index: 9999;
				}
				
				.task-tag {
					width: 100%;
					height: 80rpx;
					margin-top: 20rpx;
					display: flex;
					overflow-x: scroll;
					overflow-y: hidden; /* 禁止垂直滚动 */
					// mask: linear-gradient(90deg, #000 70%, transparent);
					position: relative;
					z-index: 9999;
					.task-tag-item {
						margin-right: 20rpx;
						width: 150rpx;
						height: 80rpx;
						flex: none;
						background-color: #C7CBE4;
						border-radius: 100rpx;
						line-height: 80rpx;
						text-align: center;
						color: white;
						cursor: pointer;
					}
				
					.task-tag-item-active {
						margin-right: 20rpx;
						width: 150rpx;
						height: 80rpx;
						flex: none;
						border-radius: 100rpx;
						line-height: 80rpx;
						text-align: center;
						cursor: pointer;
						background: #9282FF;
						color: #fff;
					}
				}
			}


			.task-item {
				width: 100%;
				height: 220rpx;
				padding: 30rpx;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 20rpx;
				margin-top: 20rpx;
				box-shadow: 0 8rpx 8rpx 0px rgba(0, 0, 0, 0.25);
				display: flex;
				
				.task-item-left {
					flex: 1;
					.task-item-left-top {
						display: flex;
						align-items: center;

						.task-item-title {
							font-size: 40rpx;
							font-weight: bold;
						}

						.task-item-finish-label {
							width: 40rpx;
							height: 40rpx;
							margin-left: 20rpx;
							position: relative;
							z-index: 0;
						}
					}

					.task-item-discribe {
						margin-top: 20rpx;
						font-size: 26rpx;
						color: #595959;
						overflow: hidden;
						height: 40rpx;
						mask: linear-gradient(90deg, #000 70%, transparent);
					}

					.task-item-end-time {
						font-size: 26rpx;
						color: #595959;
					}
				}

				.task-item-right {
					width: 180rpx;
					flex: none;
					.task-finished-title {
						text-align: center;
						line-height: 180rpx;
						font-size: 40rpx;
						font-weight: bold;
						color: #4BC0C9;
					}
					.task-item-rewards {
						width: 100%;
						text-align: center;

						.task-item-rewards-value {
							font-size: 40rpx;
							color: #4BC0C9;
							font-weight: bold;
						}

						.task-item-rewards-tip {
							font-size: 24rpx;
							font-weight: bold;
							color: #595959;
							margin-left: 10rpx;
						}
					}

					.task-item-finish-button {
						width: 160rpx;
						height: 80rpx;
						text-align: center;
						border-radius: 100rpx;
						background-color: #fff;
						color: #433C82;
						line-height: 80rpx;
						margin-top: 20rpx;
						margin-left: 12rpx;
						font-size: 34rpx;
						font-weight: bold;
						position: relative;
						// z-index: -1;
						&::before {
							content: "";
							position: absolute;
							top: -6rpx;
							left: -6rpx;
							right: -6rpx;
							bottom: -6rpx;
							background: linear-gradient(90deg, #80F8FF, #6FA0FD, #A97AFA);
							border-radius: 100rpx;
							box-shadow: 0 8rpx 8rpx 0px rgba(0, 0, 0, 0.25);
							// z-index: -1;
						}
					}

					.task-item-finish-button-bg {
						background-color: #fff;
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						border-radius: 100rpx;
						// z-index: -1;
					}
				}

			}
		}
	}
	
	.create-task-button {
		width: 140rpx;
		height: 140rpx;
		position: absolute;
		bottom: 40rpx;
		right: 40rpx;
		border-radius: 50%;
		background: linear-gradient(45deg, #80F8FF, #6FA0FD, #A97AFA);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8rpx 8rpx 0px rgba(0, 0, 0, 0.25);
		.create-task-icon {
			width: 120rpx;
			height: 120rpx;
		}
	}
</style>
