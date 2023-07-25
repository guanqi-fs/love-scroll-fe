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
			<view class="register-form">
				<view class="register-title">注册</view>
				<view class="register-main">
					<view class="input-item">
						<view class="avatar-icon">
							<image src="../../static/images/username-icon.png"></image>
						</view>
						<view class="input-text">
							<input type="text" placeholder="请输入手机号"/>
						</view>
					</view>
					<view class="input-item input-password">
						<view class="avatar-icon">
							<image src="../../static/images/password.png"></image>
						</view>
						<view class="input-text">
							<input type="safe-password" placeholder="请输入密码"/>
						</view>
					</view>
					<view class="input-item input-password">
						<view class="avatar-icon">
							<image src="../../static/images/verification.png"></image>
						</view>
						<view class="input-text">
							<input type="text" placeholder="请输入验证码"/>
						</view>
						<button class="verification-code-button" :style="{ background: buttonColor }" id="code-button" :disabled="codeButtonDisabled" @tap="getCode()">{{codeText}}</button>
					</view>

					
					<view class="other-select">
						<view class="register-button"></view>
						<view class="forget-password" @tap="toLoginPage()">已有账号，马上登录</view>
					</view>
					<view class="register-button">注册</view>
				</view>
			</view>
	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				EnumregisterOption: {
					registerPhone: "phone",
					registerUsername: "username"
				},
				registerOption: "phone",
				codeText: '获取验证码',
				codeButtonDisabled: false,
				buttonColor: "#9282FF"
			}
		},
		methods: {
			changeregisterForm(option) {
				let registerPhone = document.getElementById("register-phone")
				let registerUsername = document.getElementById("register-username")
				this.registerOption = option
				if (option == this.EnumregisterOption.registerPhone) {
					registerPhone.className = "register-phone-active"
					registerUsername.className = "register-username"
				} else {
					registerPhone.className = "register-phone"
					registerUsername.className = "register-username-active"
				}
			},
			getCode() {
				let count = 60;
				this.codeButtonDisabled = true;
				this.buttonColor = '#d6c8ff';
				this.codeText = `已发送(${count}s)`;
				let timer = setInterval(() => {
				  if (count > 0 && count <= 60) {
					count--;
					this.codeText = `已发送(${count}s)`;
				  } else {
					clearInterval(timer);
					this.codeText = '重新获取';
					this.codeButtonDisabled = false;
					this.buttonColor = '#9282FF';
				  }
				}, 1000);
			},
			toLoginPage() {
				uni.navigateTo({
					url: "../../pages/login/login"
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">

	@import "../../common/common.scss";
	.body {
		width: 100%;
		height: 100%;
		padding: 40rpx;
	}
	
	.register-form {
		width: 100%;
		height: 1100rpx;
		margin-top: 50%;
		text-align: center;
		border-radius: 20rpx;
		.register-title {
			font-size: 38rpx;
			font-weight: bold;
			text-align: center;
			height: 100rpx;
			line-height: 80rpx;
			background-color: #fff;
			border-radius: 20rpx 20rpx 0 0;
		}
		.register-main {
			width: 100%;
			height: 80%;
			background-color: #fff;
			border-radius: 0 0 20rpx 20rpx;
			padding: 40rpx;
			box-sizing: border-box;
			.input-item {
				width: 100%;
				height: 120rpx;
				margin-top: 20rpx;
				background-color: #F5F5F5;
				border-radius: 100rpx;
				display: flex;
				align-items: center;
				padding-left: 40rpx;
				padding-right: 20rpx;
				box-sizing: border-box;
				.avatar-icon {
					width: 64rpx;
					height: 64rpx;
					flex: none;
				}
				.input-text {
					flex: 1;
					text-align: left;
					margin-left: 20rpx;
				}
				.verification-code-button {
					height: 80rpx;
					line-height: 80rpx;
					border-radius: 100rpx;
					color: #fff;
					font-size: 30rpx;
					font-weight: bold;
					width: 220rpx;
				}
			}
			.input-password {
				margin-top: 40rpx;
			}
			.other-select {
				position: relative;
				color: #9282FF;
				margin-top: 40rpx;
				height: 120rpx;
				.register-button {
					position: absolute;
					left: 20rpx;
					top: 0;
				}
				.forget-password {
					position: absolute;
					right: 20rpx;
					top: 0;
				}
			}
			.register-button {
				font-size: 44rpx;
				font-weight: bold;
				color: #fff;
				background: linear-gradient(45deg, #80F8FF, #6FA0FD, #A97AFA);
				height: 100rpx;
				line-height: 100rpx;
				border-radius: 100rpx;
				box-shadow: 0px 0px 10px #bbb;
			}
		}
	}
</style>
