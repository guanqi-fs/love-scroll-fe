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
			<view class="login-form">
				<view class="login-select">
					<view class="login-select-base-top"></view>
					<view class="login-select-base-button"></view>
					<view class="login-phone-active" id="login-phone" @tap="changeLoginForm(EnumLoginOption.LoginPhone)">手机号登录</view>
					<view class="login-username" id="login-username" @tap="changeLoginForm(EnumLoginOption.LoginUsername)">账号登录</view>
				</view>
				<view class="login-main">
					<view class="input-item">
						<view class="avatar-icon">
							<image src="../../static/images/username-icon.png"></image>
						</view>
						<view class="input-text" v-if="loginOption == EnumLoginOption.LoginPhone">
							<input type="text" placeholder="请输入手机号" @input="phoneInput"/>
						</view>
						<view class="input-text" v-else>
							<input type="text" placeholder="请输入账号" @input="usernameInput"/>
						</view>
					</view>
					<view class="input-item input-password" v-if="loginOption == EnumLoginOption.LoginPhone">
						<view class="avatar-icon">
							<image src="../../static/images/verification.png"></image>
						</view>
						<view class="input-text">
							<input type="text" placeholder="请输入验证码" @input="verCodeInput"/>
						</view>
						<button class="verification-code-button" :style="{ background: buttonColor }" id="code-button" :disabled="codeButtonDisabled" @tap="getCode()">{{codeText}}</button>
					</view>
					<view class="input-item input-password" v-else>
						<view class="avatar-icon">
							<image src="../../static/images/password.png"></image>
						</view>
						<view class="input-text">
							<input type="safe-password" password placeholder="请输入密码" @input="passwordInput"/>
						</view>
					</view>
					
					<view class="other-select">
						<view class="register-button" @tap="toRegisterPage()">账号注册</view>
						<view class="forget-password">忘记密码</view>
					</view>
					<view class="login-button" @tap="login()">登录</view>
				</view>
			</view>
			
			<view class="tip-line">
				<view class="line"></view>
				<view class="tip">第三方账号</view>
				<view class="line"></view>
			</view>
			
			<view class="external-icon">
				<view class="icon-position">
					<view class="wechat-icon">
						<image src="../../static/images/wechat.png"></image>
						<view class="icon-bg"></view>
					</view>
				</view>
				<view class="icon-position">
					<view class="qq-icon">
						<image src="../../static/images/QQ.png"></image>
						<view class="icon-bg"></view>
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
				EnumLoginOption: {
					LoginPhone: "phone",
					LoginUsername: "username"
				},
				loginOption: "phone",
				codeText: '获取验证码',
				codeButtonDisabled: false,
				buttonColor: "#9282FF",
				telephonenumber: "",
				username: "",
				password: "",
				verificationCode: ""
			}
		},
		methods: {
			login() {
				if (this.username == "admin" && this.password == "123456") {
					uni.showToast({
						title: "登录成功"
					})
					uni.navigateBack({
						url: "/pages/task/task"
					})
				} else {
					console.log("登录失败")
				}
			},
			phoneInput(event) {
				this.telephonenumber = event.detail.value
			},
			usernameInput(event) {
				this.username = event.detail.value
			},
			passwordInput(event) {
				this.password = event.detail.value
			},
			verCodeInput(event) {
				this.verificationCode = event.detail.value
			},
			changeLoginForm(option) {
				let loginPhone = document.getElementById("login-phone")
				let loginUsername = document.getElementById("login-username")
				this.loginOption = option
				if (option == this.EnumLoginOption.LoginPhone) {
					loginPhone.className = "login-phone-active"
					loginUsername.className = "login-username"
				} else {
					loginPhone.className = "login-phone"
					loginUsername.className = "login-username-active"
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
			toRegisterPage() {
				uni.navigateTo({
					url: "../../pages/register/register"
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
	
	.login-form {
		width: 100%;
		height: 800rpx;
		margin-top: 30%;
		text-align: center;
		border-radius: 20rpx;
		.login-select {
			width: 100%;
			height: 120rpx;
			position: relative;
			font-size: 38rpx;
			font-weight: bold;
			color: #383838;
			.login-select-base-top {
				height: 50rpx;
				width: 100%;
				position: absolute;
				top: 20rpx;
				left: 0;
				background-color: #E3E2E2;
				z-index: -1;
				border-radius: 20rpx;
			}
			.login-select-base-button {
				height: 50rpx;
				width: 100%;
				position: absolute;
				bottom: 0;
				left: 0;
				background-color: #fff;
				z-index: -1;
				border-radius: 20rpx;
			}
			.login-phone-active {
				width: 50%;
				position: absolute;
				left: 0;
				bottom: 0;
				border-radius: 20rpx 70rpx 0 0;
				background-color: #fff;
				height: 120rpx;
				line-height: 120rpx;
				color: #383838;
			}
			.login-phone {
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
			.login-username {
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
			.login-username-active {
				width: 50%;
				position: absolute;
				right: 0;
				bottom: 0;
				border-radius: 70rpx 20rpx 0 0;
				background-color: #fff;
				height: 120rpx;
				line-height: 120rpx;
				color: #383838;
			}
		}
		.login-main {
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
			.login-button {
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
	
	.tip-line {
		margin-top: 40rpx;
		width: 100%;
		height: 40rpx;
		line-height: 40rpx;
		display: flex;
		align-items: center;
		color: #979797;
		.line {
			flex: none;
			width: 200rpx;
			height: 1rpx;
			border-bottom: #979797 1rpx solid;
		}
		.tip {
			flex: 1;
			text-align: center;
		}
	}
	
	.external-icon {
		width: 100%;
		height: 150rpx;
		display: flex;
		align-items: center;
		margin-top: 50rpx;
		.wechat-icon {
			width: 100rpx;
			height: 100rpx;
			position: relative;
			float: right;
			margin: 0 20rpx;
		}
		.qq-icon {
			width: 110rpx;
			height: 110rpx;
			position: relative;
			float: left;
			margin: 0 20rpx;
		}
	}
	
	.icon-position {
		flex: 1;
		position: relative;
	}
	
	.icon-bg {
		width: 80rpx;
		height: 80rpx;
		background-color: #fff;
		position: absolute;
		left: 10rpx;
		top: 10rpx;
		z-index: -1;
		border-radius: 100rpx;
		
	}
</style>
