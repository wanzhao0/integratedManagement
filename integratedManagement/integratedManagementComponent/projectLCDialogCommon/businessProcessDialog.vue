<!-- 事项办理过程 -->
<script>
    export default {
        props: {
            businessProcessDialogVisible: {
                type: Boolean,
                default: false
            },
            businessProcessDialogData: {
                type: Object,
                default: () => { }
            }
        },
        data() {
            return {
                resultTypeList: [
                    {
                        value: "1",
                        label: "准予许可"
                    },
                    {
                        value: "2",
                        label: "不予许可"
                    }
                ]
            }
        },
        render() {
            if (!this.businessProcessDialogVisible) return
            return (
                <div class="container-box">
                    <el-dialog title="事项办理过程" custom-class="businessProcessDialog" append-to-body={true}
                        visible={this.businessProcessDialogVisible} show-close={false}
                        width="1200px" before-close={this.dialogClose.bind(this)}>
                        <el-button class="close-btn" on-click={this.dialogClose}>返回</el-button>
                        <table border="0" class="base-table">
                            <tr style="visibility: hidden;">
                                <td class="base-table-title"></td>
                                <td class="base-table-content-info">
                                </td>
                                <td class="base-table-title"></td>
                                <td class="base-table-content-info">
                                </td>
                            </tr>
                            <tr>
                                <td class="base-table-title">项目名称</td>
                                <td class="base-table-content-info" colspan="3">
                                    {this.businessProcessDialogData.projectName}
                                </td>
                            </tr>
                            <tr>
                                <td class="base-table-title">申请事项</td>
                                <td class="base-table-content-info">
                                    {this.businessProcessDialogData.itemName}
                                </td>
                                <td class="base-table-title">收件号</td>
                                <td class="base-table-content-info">
                                    {this.businessProcessDialogData.receivingNo}
                                </td>
                            </tr>
                            <tr>
                                <td class="base-table-title">联系人</td>
                                <td class="base-table-content-info">
                                    {
                                        this.businessProcessDialogData.contacts
                                    }
                                    {this.businessProcessDialogData.contacts ? "," : ''}
                                    {
                                        this.businessProcessDialogData.phone
                                    }
                                </td>
                                <td class="base-table-title"></td>
                                <td class="base-table-content-info">
                                </td>
                            </tr>
                        </table>
                        <div class="box-title">审批结果</div>
                        <table border="0" class="base-table">
                            <tr>
                                <td class="base-table-title">审批决定</td>
                                <td class="base-table-content-info">
                                    {
                                        this.resultTypeList.map(item => {
                                            if (item.value === this.businessProcessDialogData.cycleApprovalResult.resultType) {
                                                return <div>{item.label}</div>
                                            } else {
                                                return <div></div>
                                            }
                                        })
                                    }

                                </td>
                                <td class="base-table-title">发文日期</td>
                                <td class="base-table-content-info">
                                    {this.businessProcessDialogData.cycleApprovalResult.generationTime}
                                </td>
                            </tr>
                            <tr>
                                <td class="base-table-title">发文号</td>
                                <td class="base-table-content-info">
                                    {this.businessProcessDialogData.cycleApprovalResult.permitNo}
                                </td>
                                <td class="base-table-title">证件编号</td>
                                <td class="base-table-content-info">
                                    {this.businessProcessDialogData.cycleApprovalResult.documentNumber}
                                </td>
                            </tr>
                            <tr>
                                <td class="base-table-title">结果文件</td>
                                <td class="base-table-content-info" colspan="3">
                                    {this.businessProcessDialogData.cycleApprovalResult.documentNumber}
                                </td>
                            </tr>
                        </table>
                        <div class="box-title">办理过程</div>
                        <table border="0" class="base-table">
                            <thead>
                                <tr>
                                    <td class="base-table-title base-table-content-no">序号</td>
                                    <td class="base-table-title text-center">环节名称</td>
                                    <td class="base-table-title text-center">操作人</td>
                                    <td class="base-table-title text-center">接收时间</td>
                                    <td class="base-table-title text-center">办理时间</td>
                                    <td class="base-table-title text-center" style="width:20%">处理意见</td>
                                </tr>
                            </thead>
                            {
                                this.businessProcessDialogData.handleProcessList.map((item, index) => {
                                    return < tr>
                                        <td class="text-center">{index + 1}</td>
                                        <td class="base-table-content-info text-center">
                                            {item.linkName}
                                        </td>
                                        <td class="base-table-content-info text-center"> {item.handler}
                                            {item.handleDept ? `(${item.handleDept})` : ""}</td>
                                        <td class="base-table-content-info text-center">
                                            {item.receivingTime}
                                        </td>
                                        <td class="base-table-content-info text-center">
                                            {item.handleDate}
                                        </td>
                                        <td class="base-table-content-info">
                                            {item.handleOpinions}
                                        </td>
                                    </tr>
                                })
                            }
                        </table>
                        <span slot="footer" class="dialog-footer">
                        </span>
                    </el-dialog>
                </div >
            )
        },
        methods: {
            dialogClose() {
                this.$emit('update:businessProcessDialogVisible', false)
            },
        },
    }
</script>
<style src="../common/table.css" scoped></style>
<style scoped>
    .el-dialog__wrapper>>>.businessProcessDialog {
        background-color: #10327D;
        background-image: url("../../../../assets/img/workImg/businessProcessDialog.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
    }

    .el-dialog__wrapper>>>.el-dialog__header {
        height: 56px;
        background-color: #10327D;
        background-image: url("../../../../assets/img/workImg/businessProcessDialogHeader.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        padding: 0;
        text-align: center;
        line-height: 56px;
    }

    .el-dialog__wrapper>>>.el-dialog__body {
        padding-top: 20px;
    }

    .el-dialog__wrapper>>>.el-dialog__header .el-dialog__title {
        font-size: 22px;
        color: #fff;
    }

    .box-title {
        padding: 15px 0 10px 30px;
        color: #1AC9FF;
        position: relative;
    }

    .box-title::before {
        content: "";
        position: absolute;
        left: 12px;
        top: 20px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #409EFF;

    }

    .base-table-content-no {
        width: 40px;
        text-align: center;
    }

    .text-center {
        text-align: center;
    }

    .close-btn {
        position: absolute;
        right: 20px;
        top: 25px;
        width: 70px;
        height: 25px;
        box-shadow: 0px 1px 5px 0px #0A53B0;
        border: 1px solid #0A53B0;
        background-color: transparent;
        font-size: 16px;
        font-weight: 600;
        color: #68CCFF;
        letter-spacing: 2px;
        z-index: 999999999;
        transform: scaleY(1.2);
        line-height: 0.3;
    }

    /* 设置滚动条的样式 */
    ::-webkit-scrollbar {
        width: 10px;
        background: rgba(0, 145, 255, 0.1);
        height: 6px;
    }

    /* 滚动槽 */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #0091FF4D;
    }
</style>