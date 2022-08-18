<template>
    <div class="main">
        <div class="header">
        </div>
        <div class="body">
            <section class="promotion_section">
                <div class="main_phone">
                    <img src="~/assets/img/main_phone.png" >
                    <!-- <div class="img1">
                        <img src="~/assets/img/insta_main1.png" >
                    </div>
                    <div class="img2">
                        <img src="~/assets/img/insta_main2.png" >
                    </div> -->
                </div>
            </section>
            <section class="login_section">
                <div class="logo_box">
                    <img class="logo_img" src="~/assets/img/vuegram_logo.png" >
                </div>
                <div class="login_box">
                    <div class="login">
                        <div>
                            <img class="login_img" src="~/assets/img/user_login.jpeg" >
                        </div>
                        <div class="input_box">
                            <input type="text" placeholder="휴대폰 번호 또는 이메일 주소">
                        </div>
                        <div class="input_box">
                            <input type="password" placeholder="비밀번호">
                        </div>
                        <div class="btn_login">
                            <button>로그인</button>
                        </div>
                        <div class="btn_box">
                            <button>비밀번호를 잊으셨나요?</button>
                        </div>
                        <hr>
                    </div>
                    <div class="sign_up">
                        계정이 없으신 가요? 
                        <button class="btn_sign_up" @click="move_sign_up">가입하기</button>
                    </div>
                    <div class="app_down">
                        앱을 다운로드하세요.
                        <div class="app_img_box">
                            <div >
                                <img class="app_img" src="~/assets/img/app_down1.png" alt="">
                            </div>
                            <div>
                                <img class="app_img" src="~/assets/img/app_down2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        move_sign_up() {
            this.$router.push('/signUp');
        }
    },
}
</script>

<style lang="scss" scope>
.main{
    .header {
        width: 100%;
        display: flex;
        margin: 0 0 60px 0;
        
    }
    .body {
        width: 100%;
        /* height: 90%; */
        display: flex;
        align-items: center;
        justify-content: center;
        .promotion_section {
            margin: 0;
            margin-top: auto;
            /* height: auto; */
            width: 40%;
            display: flex;
            .main_phone {
                display: flex;
                margin-left: auto;
                .img1 {
                    width: 5%;
                }

                .img2 {
                    width: 5%;
                    float: left;
                    padding-bottom: 10px;
                }
            }
        }
        .login_section {
            margin: 0;
            /* height: 600px; */
            width: 60%;
            margin-top: auto;

            .logo_img{
                max-width: 400px;
                display: block;
                margin-left: 100px;
            }

            .login_box{
                background-color: #ffffff;
                border: 1px solid #e4e4e4;
                max-width: 600px;
                
                height: 620px;
                /* margin-left:120px; */
                padding: 12px;
                border-radius: 100px;

                .login{
                    .login_img{
                        height: 150px;
                        width: 150px;
                        display: block;
                        margin: auto;
                        margin-bottom: 10px;
                    }
                    .input_box {
                        width: 350px;
                        margin: auto;
                        padding: 2px;
                        input{
                            border: 1px solid #e4e4e4;
                            width: 100%;
                            padding: 10px;
                        }
                    }
                    .btn_login {
                        text-align: center;
                        margin: auto;
                        width: 350px;
                        padding: 2px;
                        padding: 20px;
                    }
                    .btn_box {
                        text-align: center;
                        margin: auto;
                        font-size: 13px;
                        padding: 10px;
                    }
                }

                .sign_up {
                    width: 350px;
                    padding: 20px;
                    margin: auto;
                    text-align: center;
                }

                .app_down {
                    text-align: center;
                    width: 400px;
                    padding: auto;
                    margin: auto;
                    margin-top: 40px;

                    .app_img_box {
                        display: flex;
                        margin: 0 auto;
                        margin-top: 10px;
                        .app_img {
                            width: 200px;
                            margin: 0 auto;
                            margin-right: 16px;
                        }
                    }
                }
            }
        }
    }
}
.test{
    display: flex;
    p{
        display: block;
    }
}
</style>
