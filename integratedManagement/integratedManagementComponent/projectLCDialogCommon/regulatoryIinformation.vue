<template>
    <div class="regulatory-info">
        <div class="regulatory-info-left">
            <div class="regulatory-info-left-title">巡查记录</div>
            <div class="regulatory-info-left-img">
                <img src="../../../../assets/img/workImg/regulatoryInfoIeftImg.png" alt="" srcset="">
            </div>
        </div>
        <div class="regulatory-info-middle">
            <div class="regulatory-info-middle-title">隐患记录</div>
            <div class="regulatory-info-middle-img">
                <img src="../../../../assets/img/workImg/regulatoryInfoMiddleImg.png" alt="" srcset="">
            </div>
        </div>
        <div class="regulatory-info-right">
            <div class="regulatory-info-right-title">信用监管记录</div>
            <div class="regulatory-info-right-img">
                <img src="../../../../assets/img/workImg/regulatoryInfoRightImg.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .regulatory-info {
        display: flex;
        color: #fff;
        padding-top: 30px;
        padding-bottom: 100px;
    }

    .regulatory-info-left,
    .regulatory-info-right {
        width: 29.6%;
        height: 3000px;
        background: rgba(32, 110, 212, 0.06);
        box-shadow: inset 0px 1px 15px 0px rgba(32, 110, 212, 0.3);
        border: 1px solid rgba(46, 133, 191, 0.1);
        padding: 16px 45px;
        font-size: 16px;
        position: relative;
    }

    .regulatory-info-left::before,
    .regulatory-info-right::before,
    .regulatory-info-middle::before {
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

    .regulatory-info-middle {
        flex: 1;
        height: 3000px;
        margin: 0 20px;
        background: rgba(32, 110, 212, 0.06);
        box-shadow: inset 0px 1px 15px 0px rgba(32, 110, 212, 0.3);
        border: 1px solid rgba(46, 133, 191, 0.1);
        padding: 16px 45px;
        font-size: 16px;
        position: relative;
    }

    .regulatory-info-left-title,
    .regulatory-info-middle-title,
    .regulatory-info-right-title {
        text-indent: 5rem;
        font-size: 64px
    }

    .regulatory-info-left-img {
        width: 1250px;
        padding-top: 20px;
    }

    .regulatory-info-left-img>img,
    .regulatory-info-middle-img>img,
    .regulatory-info-right-img>img {
        width: 100%;
    }

    .regulatory-info-right-img {
        width: 2500px;
        padding-top: 20px;
    }

    .regulatory-info-middle-img {
        width: 2500px;
        padding-top: 20px;
    }
</style>