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
					<view class="login-phone">手机号登录</view>
					<view class="login-username">账号登录</view>
				</view>
				<view class="login-main">
					<view class="input-item">
						<view class="avatar-icon">
							<image src="../../static/images/my.png"></image>
						</view>
						<view class="input-text">
							<input type="text" placeholder="请输入手机号"/>
						</view>
					</view>
					<view class="input-item input-password">
						<view class="avatar-icon">
							<image src="../../static/images/my.png"></image>
						</view>
						<view class="input-text">
							<input type="safe-password" placeholder="请输入验证码"/>
						</view>
						<view class="verification-code-button">发送验证码</view>
					</view>
					<view class="other-select">
						<view class="register-button">账号注册</view>
						<view class="forget-password">忘记密码</view>
					</view>
					<view class="login-button">登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.loadFontFace({
			  family: 'Bitstream Vera Serif Bold',
			  source: 'url("https://sungd.github.io/Pacifico.ttf")',
			  success() {
				  console.log('success')
			  }
			})
		}
	}
</script>

<style lang="scss">
	@import "../../common/common.scss";
	.body {
		width: 100%;
		height: 100%;
		padding: 20px;
	}
	
	.login-form {
		width: 100%;
		height: 60%;
		margin-top: 30%;
		text-align: center;
		border-radius: 10px;
		.login-select {
			width: 100%;
			height: 60px;
			position: relative;
			font-size: 22px;
			font-weight: 600;
			color: #383838;
			.login-select-base-top {
				height: 25px;
				width: 100%;
				position: absolute;
				top: 10px;
				left: 0;
				background-color: #E3E2E2;
				z-index: -1;
				border-radius: 10px;
			}
			.login-select-base-button {
				height: 25px;
				width: 100%;
				position: absolute;
				bottom: 0;
				left: 0;
				background-color: #fff;
				z-index: -1;
				border-radius: 10px;
			}
			.login-phone {
				width: 50%;
				height: 60px;
				position: absolute;
				left: 0;
				bottom: 0;
				background-color: #fff;
				line-height: 60px;
				border-radius: 10px 35px 0 0;
			}
			.login-username {
				width: 50%;
				height: 50px;
				position: absolute;
				right: 0;
				bottom: 0;
				background-color: #E3E2E2;
				line-height: 50px;
				border-radius: 0 10px 0 35px;
			}
		}
		.login-main {
			width: 100%;
			height: 80%;
			background-color: #fff;
			border-radius: 0 0 10px 10px;
			padding: 20px;
			box-sizing: border-box;
			.input-item {
				width: 100%;
				height: 60px;
				margin-top: 10px;
				background-color: #F5F5F5;
				border-radius: 50px;
				display: flex;
				align-items: center;
				padding-left: 20px;
				padding-right: 10px;
				box-sizing: border-box;
				.avatar-icon {
					width: 32px;
					height: 32px;
					flex: none;
				}
				.input-text {
					flex: 1;
					text-align: left;
					margin-left: 10px;
				}
				.verification-code-button {
					height: 40px;
					line-height: 40px;
					border-radius: 50px;
					background-color: #9282FF;
					color: #fff;
					font-size: 18px;
					width: 110px;
				}
			}
			.input-password {
				margin-top: 20px;
			}
			.other-select {
				position: relative;
				color: #9282FF;
				margin-top: 20px;
				height: 60px;
				.register-button {
					position: absolute;
					left: 10px;
					top: 0;
				}
				.forget-password {
					position: absolute;
					right: 10px;
					top: 0;
				}
			}
			.login-button {
				font-size: 22px;
				font-weight: bold;
				color: #fff;
				background: linear-gradient(45deg, #80F8FF, #6FA0FD, #A97AFA);
				height: 50px;
				line-height: 50px;
				border-radius: 50px;
			}
		}
	}
</style>
