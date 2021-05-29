<script>
	export default {
		globalData: {
			appid: "wxee1df51d9c15e8da", // 微信小程序的appid
			secret: "d5f49efd712055eacb4809e19b388daf", // 微信小程序的secret
			openid: "", // 用户openid
			accessToken: "", // AccessToken
			navHeight: 0, // 导航栏高度
			statuHeight: 0, // 状态栏高度
			contextHeight: 0, // 文字栏高度
			rpxRatio: 0, // rpx换算px比例
			screenHeight: 0, // 屏幕高度
			areaKey: "1e279352f502efae4ebfe4e90061042f", // 高德KEY
			userInfo: null, // 用户信息
			city: "", // 当前城市
			vaccine:[],//疫苗信息
			taboo:[],//禁忌信息
			order: null
		},
		methods: {
			
			getAccessToken: function() {
				const that = this;
				// 获取AccessToken
				uni.request({
					url:"https://api.weixin.qq.com/cgi-bin/token",
					data: {
						grant_type: "client_credential",
						appid: that.globalData.appid,
						secret: that.globalData.secret
					},
					success: (e) => {
						that.globalData.accessToken = e.data.access_token;
						console.log("获取AccessToken", e.data.access_token);
					}
				});
			}
		},
		onLaunch: function() {
			// 定义变量接收this
			const that = this;
			
			/* 
				获取系统信息
			*/
		   
			// 获取胶囊信息
			const menuButton = uni.getMenuButtonBoundingClientRect();
			
			console.log("成功获取到胶囊信息", menuButton);
			
			const data = this.globalData;
			
			// 获取系统信息
			uni.getSystemInfo({
				success: (e) => {
					console.log("成功获取到系统信息", e);
					data.navHeight = (menuButton.top - e.statusBarHeight) * 2 + menuButton.height + e.statusBarHeight; // 导航栏高度
					data.statuHeight = e.statusBarHeight; // 状态栏高度
					data.contextHeight = (menuButton.top - e.statusBarHeight) * 2 + menuButton.height; // 文字栏高度
					data.rpxRatio = e.pixelRatio; // rpx转换率
					data.screenHeight = e.screenHeight; // 屏幕高度
				}
			});
			
			
			// 定时获取AccessToken
			
			that.getAccessToken();
			const accessTokenTimer = setInterval(e => {
				that.getAccessToken();
			}, 7200000);
			
			
			
			// 登录获取code，向后台发送请求换取openid
			
			uni.login({
				success: (e) => {
					
					uni.request({
						url: "https://api.weixin.qq.com/sns/jscode2session",
						method: "GET",
						data: {
							appid: that.globalData.appid,
							secret: that.globalData.secret,
							js_code: e.code,
							grant_type: "authorization_code"
						},
						success: (e) => {
							data.openid = e.data.openid;
							console.log("成功获取到用户openid", e);
						}
					})
				}
			});
			
			
			/* 
				获取用户授权
			*/
			uni.getSetting({
			  success(res) {
				console.log("成功获取到用户授权", res);
				
				// 获取相机授权
			    if (!res.authSetting['scope.camera']) {
			      uni.authorize({
			        scope: 'scope.camera',
			        success (e) {
						console.log("成功获取到用户相机授权", e)
			        }
			      })
			    }
				
				// 获取定位权限
				
				if (res.authSetting['scope.userLocation']) {
					uni.authorize({
						scope: 'scope.userLocation',
						success: (e) => {
							console.log("成功获取到定位", e);
						}
					})
				}
				
				// 获取用户信息授权
				/* if (res.authSetting['scope.userInfo']) {
					that.getUserInfo();
				  uni.authorize({
				    scope: 'scope.userInfo',
				    success (e) {
						console.log(e)
						that.getUserInfo();
				    }
				  })
				}else {
					that.getUserInfo();
				} */
			  }
			  
			});
			
			//获取所有疫苗信息
			uni.request({
				url: "https://health.ymhdev.xyz:9999/vaccine/select",
				method: "GET",
				success:function(e){
					console.log("疫苗信息",e);
					data.vaccine = e.data.msg;
				},
				fail:function(e){
					console.log(e);
				}
			});
			
			//获取所有禁忌信息
			uni.request({
				url: "https://health.ymhdev.xyz:9999/taboo/select",
				method: "GET",
				success:function(e){
					console.log("禁忌信息",e);
					data.taboo = e.data.msg;
				},
				fail:function(e){
					console.log(e);
				}
			});
			
			
			// 获取用户信息
			let userInfoTime = setInterval(function() {
				console.log(data.openid)
				if(data.openid != null && data.openid != '') {
					uni.request({
						url: "https://health.ymhdev.xyz:9999/user/select",
						method: "GET",
						data: {
							openid: data.openid
						},
						success:function(e){
							console.log("用户信息",e);
							if(e.data.msg) {
								data.userInfo = e.data.data;
							} else {
								data.userInfo = null;
							}
							console.log(e.data.msg.length)
							console.log(data.userInfo);
						},
						fail:function(e){
							console.log(e);
						}
					});
					clearInterval(userInfoTime);
				}
			}, 1000);
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/icon.css";
	@import "colorui/main.css";
	@import "colorui/animation.css";
	@import "utils/animate.css";
	@import "wxcomponents/vant/dist/common/index.wxss";
	
	* {
		color: #3c3f48;
	}
</style>
