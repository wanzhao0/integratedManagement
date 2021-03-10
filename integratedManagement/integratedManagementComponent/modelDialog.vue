
<script>
    import dongTaiModelDiaglog from './modelDialogCompent/dongTaiModelDiaglog'
    import fengXianModelDiaglog from './modelDialogCompent/fengXianModelDiaglog'
    import xinYongModelDiaglog from './modelDialogCompent/xinYongModelDiaglog'
    import fenLeiModelDiaglog from './modelDialogCompent/fenLeiModelDiaglog'
    import zhiNengModelDiaglog from './modelDialogCompent/zhiNengModelDiaglog'
    import fuGongFangYiModelDiaglog from './modelDialogCompent/fuGongFangYiModelDiaglog'
    import fuGongFangYiDetailModelDiaglog from './modelDialogCompent/fuGongFangYiDetailModelDiaglog'
    export default {
        components: {
            dongTaiModelDiaglog,
            fengXianModelDiaglog,
            xinYongModelDiaglog,
            fenLeiModelDiaglog,
            zhiNengModelDiaglog,
            fuGongFangYiModelDiaglog,
            fuGongFangYiDetailModelDiaglog
        },
        props: {
            dialogItem: {
                type: String,
                default: "componentName"
            },
            dialogItemInner: {
                type: String
            },
            modelDialogVisible: {
                type: Boolean,
                default: false
            },
            innerVisible: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                list: [
                    {
                        title: "动态监管模型",
                        value: 0,
                        componentName: "dongTaiModelDiaglog",
                        imgSrc: require('@/assets/img/integratedManagement/dongTaiModelRrotateCircle.png'),
                        titleItem: "动态监管"
                    },
                    {
                        title: "风险监管模型",
                        value: 1,
                        componentName: "fengXianModelDiaglog",
                        titleItem: "风险监管"
                    },
                    {
                        title: "信用监管模型",
                        value: 2,
                        componentName: "xinYongModelDiaglog",
                        titleItem: "信用监管"
                    },
                    {
                        title: "分类监管模型",
                        value: 3,
                        componentName: "fenLeiModelDiaglog",
                        titleItem: "分类监管"
                    },
                    {
                        title: "智能发现模型",
                        value: 4,
                        componentName: "zhiNengModelDiaglog",
                        imgSrc: require('@/assets/img/integratedManagement/dongTaiModelRrotateCircle.png'),
                        titleItem: "智能发现"
                    },
                    {
                        title: "复工防疫监管",
                        value: 5,
                        componentName: "fuGongFangYiModelDiaglog",
                        imgSrc: require('@/assets/img/integratedManagement/dongTaiModelRrotateCircle.png'),
                    },
                    {
                        title: "复工防疫监管",
                        value: 6,
                        componentName: "fuGongFangYiDetailModelDiaglog"
                    }
                ]
            }
        },
        render() {
            let innerBaseComponent = this.dialogItemInner
            let baseComponent = this.dialogItem
            let item = this.list.filter(item => {
                return item.componentName == this.dialogItem
            })
            let itemIndex = item.length && item[0].value || 0
            return (
                <div class="model-dialog">
                    <el-dialog destroy-on-close={true} title={this.list[itemIndex].title} visible={this.modelDialogVisible}
                        width="5079" top='365px'
                        modal-append-to-body={false}
                        modal={!this.innerVisible}
                        before-close={this.dialogClose.bind(this)}
                        show-close={true}>
                        <baseComponent itemObj={this.list[itemIndex]}
                            key={baseComponent} on={this.$listeners}
                            class={this.innerVisible ? 'zIndexClass' : ''}
                        />
                        <el-dialog width="5079" top='365px' title={this.list[itemIndex].title} visible={this.innerVisible}
                            before-close={this.dialogCloseInner.bind(this)} modal={!this.innerVisible} append-to-body={false}>
                            <innerBaseComponent on={this.$listeners} />
                        </el-dialog>
                    </el-dialog >
                </div>
            )
        },
        methods: {
            dialogClose() {
                this.$emit("update:modelDialogVisible", false)
            },
            dialogCloseInner() {
                this.$emit("update:innerVisible", false)
            }
        }
    }
</script>

<style scoped>
    .model-dialog>>>.el-dialog {
        height: 2511px;
        width: 5079px;
        background-image: url("../../../assets/img/integratedManagement/model-dialog.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        background-color: rgba(0, 0, 0, 0.4);
        position: relative;
    }

    .model-dialog>>>.el-dialog__header {
        width: 100%;
        height: 230px;
        padding: 0;
        text-align: center
    }

    .model-dialog>>>.el-dialog__title {
        display: inline-block;
        width: 1610px;
        line-height: 230px;
        font-size: 100px;
        color: #FFFFFF;
        background: linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .model-dialog>>>.el-dialog__headerbtn {
        width: 123px;
        height: 123px;
        position: absolute;
        top: 123px;
        right: 70px;
        font-size: 0;
        background-image: url("../../../assets/img/integratedManagement/closeBtn.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        filter: brightness(1.5)
    }

    .btn {
        width: 250px;
        height: 100px;
        font-size: 50px
    }

    .zIndexClass {
        z-index: -9999
    }
</style>