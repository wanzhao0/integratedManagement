
<script>
    export default {
        props: {
            itemObj: {
                type: Object
            }
        },
        render() {
            return (
                <div class="zhi-neng-model">
                    <img src={this.itemObj.imgSrc} />
                    <div class="model-title">{this.itemObj.titleItem}</div>
                </div>
            )
        }
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .zhi-neng-model {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -45%);
        width: 4790px;
        height: 1930px;
        background-image: url("../../../../assets/img/integratedManagement/zhiNengModel.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        text-align: center;
    }

    .zhi-neng-model>img {
        width: 1100px;
        height:1100px;
        position: absolute;
        left: 39%;
        top: 32%;
        vertical-align: middle;
        animation: rotate 10s linear infinite;
        z-index: 9999;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .model-title {
        width: 361px;
        height: 396px;
        font-size: 150px;
        font-family: MicrosoftYaHei;
        color: #FFFFFF;
        line-height: 198px;
        background: linear-gradient(180deg, #EEEEEE 0%, #4191FB 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-45%, -5%)
    }
</style>