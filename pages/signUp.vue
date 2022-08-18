<template>
    <div>
        <section class="login_section">
            <div class="login_box">
                <div class="login">
                    <div>
                        <button @click="$router.push('/')">
                            <img class="login_img" src="~/assets/img/vuegram_logo.png" >
                        </button>
                    </div>
                    <div class="input_box">
                        <input type="text" placeholder="휴대폰 번호 또는 이메일 주소" v-model.trim="user.user_id">
                    </div>
                    <div class="input_box">
                        <input type="text" placeholder="성명" v-model.trim="user.name">
                    </div>
                    <div class="input_box">
                        <input type="text" placeholder="사용자 닉네임" v-model.trim="user.nick_name">
                    </div>
                    <div class="input_box">
                        <input type="password" placeholder="비밀번호" v-model.trim="user.user_pw">
                    </div>
                    <div class="btn_login">
                        <button @click="sign_up">회원 가입</button>
                    </div>
                    <div class="btn_box">
                        <button>비밀번호를 잊으셨나요?</button>
                    </div>
                    <hr>
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
</template>

<script>
export default {

    data() {
        return {
            user: {
                user_id: '',
                name: '',
                nick_name: '',
                user_pw: '',
            }
        };
    },

    mounted() {
        
    },

    methods: {
        async sign_up() {
            try {
                const user_info = this.user;
                await this.$axios.post('/sign_up', {
                    user_info
                })

            } catch (e) {
                console.error(e);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.login_section {
    margin: 0;
    height: 600px;
    width: 60%;


    .login_box{
        background-color: #ffffff;
        border: 1px solid #e4e4e4;
        width: 700px;
        height: 620px;
        margin: 0;
        padding: 12px;
        border-radius: 80px;
    }

    .login{
        .login_img{
            height: 50%;
            width: 50%;
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
            }
        }
    }
}
</style>