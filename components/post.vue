<template>
    <section class="vuegram_post">
        <div class="post_header">
            <div class="user">
                <div>
                    <img class="user_img" src="~/assets/img/user_ex1.jpeg">
                </div>
                <div class="user_id"> 유저 아이디</div>
            </div>
        </div>
        <div class="content">
            <div class="content_main">
                내용
            </div>
            <div class="like">
                <button>
                    <img src="~/assets/img/em_heart.png">
                </button>
                <div>100 좋아요</div>
            </div>
            
            <div class="content_discription">
                내용 설명
            </div>
            <div class="content_comment">
                댓글
            </div>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scope>
.vuegram_post {
    height: 700px;
    width: 500px;
    overflow: hidden;
    margin-left: 30px;
    .post_header {
        /* width: 100%; */
        height: 5%;
        background: #fafafa;
        z-index: 99;
        
        /* object-fit: cover; */
        .user {
            /* width: 40px; */
            height: 100%;
            display: flex;
            .user_img {
                max-width: 100%;
                max-height: 100%;
                border-radius: 180px;
                margin-left: 20px;
                margin: auto;
                padding: auto;
            }
            .user_id {
                margin: auto;
                margin-left: 20px;
            }
        }
    }
    .content {
        padding: 10px;
        width: 100%;
        height: 70%;
        .content_main {
            width: 100%;
            height: 100%;
        }
        .like {
            width: 100%;
            height: 5%;
            display: flex;
            margin: auto;
        }
        .content_discription {
            width: 100%;
            height: 30%;
        }
        .content_comment {
            width: 100%;
            height: 30%;
        }
    }
}
</style>