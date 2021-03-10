
<script>
    export default {
        data() {
            return {
                list: [
                    {
                        num: "23",
                        title: "C类",
                        textColor: "#D83C59"
                    },
                    {
                        num: "119",
                        title: "B类",
                        textColor: "#DC732B"
                    },
                    {
                        num: "364",
                        title: "A类",
                        textColor: "#00C86B"
                    }
                ]
            }
        },
        render() {
            return (
                <div class="right-one-four">
                    <div class="right-one-four-title">分类监管</div>
                    <div class="right-one-four-content">
                        {
                            this.list.map((item, index) => {
                                return <div class="right-one-four-content-item" key={index}>
                                    <div class="item-num" style={{ color: item.textColor }}>{item.num}</div>
                                    <div class="item-title">{item.title}</div>
                                </div>
                            })
                        }
                        <el-divider direction="vertical"></el-divider>
                        <div class="right-one-four-right" on-click={this.showModel}>
                            <i class="el-icon-s-grid icon"></i>模型
                        </div>
                    </div>
                </div>
            )
        },
        methods: {
            showModel() {
                this.$emit("showDialog", "fenLeiModelDiaglog")
            }
        }
    }
</script>

<style scoped>
    div {
        box-sizing: border-box
    }

    .right-one-four {
        width: 100%;
        height: 100%;
    }

    .right-one-four-title {
        width: 278px;
        height: 68px;
        background-color: #04296D;
        font-size: 38px;
        color: #51FDFE;
        line-height: 65px;
        letter-spacing: 2px;
        display: inline-block;
        margin-left: 30px;
        text-indent: 60px;
        border: 3px solid #011726;
        position: relative;
    }

    .right-one-four-title::before {
        content: "";
        position: absolute;
        width: 22px;
        height: 22px;
        left: -20px;
        top: 17%;
        border: 8px solid #21BDD3;
        transform: rotateZ(45deg);
        background-color: #011726;
    }

    .right-one-four-title::after {
        content: "";
        position: absolute;
        right: -28px;
        top: -10px;
        width: 50px;
        height: 30px;
        background-color: #011726;
        /* background-color: red; */
        transform: rotateZ(45deg);
    }

    .right-one-four-content {
        width: 100%;
        height: 222px;
        box-shadow: inset 0px 1px 20px 6px #04296D;
        padding: 40px 30px 40px 30px;
        display: flex
    }

    .right-one-four-content>>>.el-divider {
        color: #979797;
        height: 145px;
    }

    .right-one-four-content .icon {
        margin-right: 20px;
        font-size: 60px;
        transform: translate(2px, 5px);
    }

    .right-one-four-right {
        width: 354px;
        font-size: 50px;
        color: #1890FF;
        letter-spacing: 2px;
        text-align: center;
        line-height: 3;
        cursor: pointer
    }

    .right-one-four-content-item {
        display: flex;
        flex-direction: column;
        width: 354px;
        text-align: center;
        line-height: 1.5
    }

    .item-num {
        font-size: 56px;
        font-weight: 500;
        color: #51FDFE;
        letter-spacing: 3px;
    }

    .item-title {
        font-size: 40px;
        color: #B0DFF4;
        letter-spacing: 2px;
    }
</style>