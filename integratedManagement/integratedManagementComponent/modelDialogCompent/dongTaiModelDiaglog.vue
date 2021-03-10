
<script>
    export default {
        props: {
            itemObj: {
                type: Object
            }
        },
        render() {
            console.log(this.itemObj)
            return (
                <div class="dong-tai-model">
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

    .dong-tai-model {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3014px;
        height: 2054px;
        background-image: url("../../../../assets/img/integratedManagement/dongTaiModel.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        text-align: center;
    }

    .dong-tai-model>img {
        width: 800px;
        height: 800px;
        position: absolute;
        left: 34.5%;
        top: 20.54%;
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
        transform: translate(-66%, -105%)
    }
</style>