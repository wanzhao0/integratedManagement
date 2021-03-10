
<template>
    <div class="construction-info">
        <div class="construction-info-title">单位工程施工情况</div>
        <img src="./constructionInfo.png" alt="" srcset="">
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .construction-info {
        width: 100%;
        height: 94%;
        margin-bottom: 50px;
        color: #ffffff;
        margin-top: 30px;
        padding-bottom: 200px;
        padding: 20px;
        background: rgba(32, 110, 212, 0.06);
        box-shadow: inset 0px 1px 15px 0px rgba(32, 110, 212, 0.3);
        border: 1px solid rgba(46, 133, 191, 0.1);
    }

    .construction-info-title {
        position: relative;
        font-size: 64px;
        color: rgba(255, 255, 255, 0.8);
        line-height: 110px;
        text-indent: 130px;
    }

    .construction-info-title::before {
        content: "";
        position: absolute;
        left: 20px;
        top: 19px;
        width: 80px;
        height: 70px;
        background-image: url("../../../../assets/img/workImg/arrow.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;

    }

    .construction-info>img {
        margin-top: 20px;
        width: 100%;
    }
</style>