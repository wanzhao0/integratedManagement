<script>
    import gisMap from './integratedManagementComponent/gisMap'
    import leftOne from './integratedManagementComponent/leftOne'
    import leftTwo from './integratedManagementComponent/leftTwo'
    import rightOne from './integratedManagementComponent/rightOne'
    import rightTwo from './integratedManagementComponent/rightTwo'
    import modelDialog from './integratedManagementComponent/modelDialog'
    import projectLifeCycleDialog from './integratedManagementComponent/projectLifeCycleDialog.vue'
    export default {
        components: {
            gisMap,
            leftOne,
            leftTwo,
            rightOne,
            rightTwo,
            projectLifeCycleDialog,
            modelDialog
        },
        render() {
            return (
                <div ref="integratedManagement" class="integrated-management">
                    <div class="header-title">临港新片区工程建设领域综合管理</div>
                    <div class="left-one-container integrated-management-container">
                        <left-one />
                    </div>
                    <div class="left-two-container integrated-management-container">
                        <left-two on-showDialog={this.showDialog.bind(this)} />
                    </div>
                    <div class="right-one-container integrated-management-container">
                        <right-one on-showDialog={this.showDialog.bind(this)} />
                    </div>
                    <div class="right-two-container integrated-management-container">
                        <right-two />
                    </div>
                    <div class="gis-Map-cantainer" ref="gisMap">
                        <gisMap />
                    </div>
                    <project-life-cycle-dialog />
                    <model-dialog on-showDialog={this.showDialog.bind(this)} innerVisible={this.innerVisible}
                        modelDialogVisible={this.modelDialogVisible} dialogItem={this.dialogItem}
                        dialogItemInner={this.dialogItemInner}
                        on={{ ['update:modelDialogVisible']: val => this.modelDialogVisible = val }}
                        on={{ ['update:innerVisible']: val => this.innerVisible = val }}
                    />

                </div >
            )
        },
        data() {
            return {
                integratedManagement: null,
                gisMap: null,
                width: 0,
                height: 0,
                originalWidth: 0,
                originalHeight: 0,
                gisMapDom: null,
                dom: null,
                modelDialogVisible: false,
                dialogItem: null,
                dialogItemInner: null,
                outerVisible: false,
                innerVisible: false
            }
        },
        methods: {
            initSize() {
                return new Promise(resolve => {
                    this.$nextTick(() => {
                        this.dom = this.$refs.integratedManagement
                        this.gisMapDom = this.$refs.gisMap
                        // 获取大屏的设计尺寸
                        this.width = 11520
                        this.height = 3240
                        // 获取屏幕的尺寸
                        if (!this.originalWidth || !this.originalHeight) {
                            this.originalWidth = window.screen.width
                            this.originalHeight = window.screen.height
                        }
                        resolve(true)
                    })
                })
            },
            updateSize() {
                if (this.width && this.height) {
                    this.dom.style.width = `${this.width}px`
                    this.dom.style.height = `${this.height}px`
                } else {
                    this.dom.style.width = `${this.originalWidth}px`
                    this.dom.style.height = `${this.originalHeight}px`
                }

            },
            updateScale() {
                // 获取当前视口尺寸
                const currentWidth = document.body.clientWidth
                const currentHeight = document.body.clientHeight
                this.$nextTick(() => {
                    this.gisMapDom.style.width = `${document.body.clientWidth}px`
                    this.gisMapDom.style.height = `${document.body.clientHeight}px`
                })
                // 获取大屏最终尺寸
                const realWidth = this.width || this.originalWidth
                const realHeight = this.height || this.originalHeight
                // 缩放比
                const widthScale = currentWidth / realWidth
                const heightScale = currentHeight / realHeight
                const scale = heightScale
                this.dom.style.transform = `scale(${widthScale}, ${scale})`
                this.gisMapDom.style.transform = `scale(${1 / widthScale}, ${1 / scale})`
            },
            onResize() {
                this.initSize()
                this.updateScale()
            },
            showDialog(value) {
                if (value === "fuGongFangYiDetailModelDiaglog") {
                    this.innerVisible = true
                    this.dialogItemInner = value
                } else {
                    this.dialogItem = value
                }
                this.$nextTick(() => {
                    this.modelDialogVisible = true
                })
            }

        },
        async mounted() {
            await this.initSize()
            this.updateSize()
            this.updateScale()
            window.addEventListener('resize', this.onResize)
        },
    }
    //1360*500
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .integrated-management {
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        transform-origin: top left;
        z-index: 0;
        background-color: rgb(1, 46, 71);
    }

    .gis-Map-cantainer {
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        transform-origin: top left;
        z-index: 0;
    }

    .header-title {
        width: 4744px;
        height: 361px;
        font-size: 100px;
        font-weight: 500;
        text-align: center;
        padding-top: 66px;
        color: #D7E2FD;
        line-height: 140px;
        letter-spacing: 4px;
        text-shadow: 2px 2px 20px #0D3BB8;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        z-index: 99;
        background-image: url("../../assets/img/integratedManagement/headerbgc.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
    }


    .left-one-container {
        position: absolute;
        left: 60px;
        top: 237px;
        width: 1400px;
        height: 2900px;
        z-index: 999;
    }

    .left-two-container {
        position: absolute;
        left: 1490px;
        top: 237px;
        width: 1400px;
        height: 2900px;
        z-index: 999;
    }

    .integrated-management-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 542px;
        width: 423px;
        height: 6px;
        background-image: url("../../assets/img/integratedManagement/integrated-management-container.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
    }

    .integrated-management-container::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 542px;
        width: 423px;
        height: 6px;
        background-image: url("../../assets/img/integratedManagement/integrated-management-container.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
    }

    .right-one-container {
        position: absolute;
        right: 1490px;
        top: 237px;
        width: 1400px;
        height: 2900px;
        z-index: 999;
    }

    .right-two-container {
        position: absolute;
        right: 60px;
        top: 237px;
        width: 1400px;
        height: 2900px;
        z-index: 999;
    }
</style>