
<script>
    export default {
        props: {
            tableData: {
                type: Object
            },
            tableMapItem: {
                type: Object
            }
        },
        watch: {
            tableData(val) {
                this.list = val
            }
        },
        data() {
            return {
                list: {}
            }
        },
        render() {
            let tableTitle = this.tableMapItem.tableTitle
            return (
                <div class="main-wrap">
                    <div class="main-wrap-title">
                        {tableTitle.icon === true ? <i class="el-icon-d-arrow-right" /> : ""}{tableTitle.title}
                    </div>
                    {
                        tableTitle.isDivider == true ? <el-divider /> : ""
                    }
                    <table border="0" class="base-table">
                        {
                            this.tableMapItem.tableList.map(item => {
                                if (item.colspan && item.colspan === "3") {
                                    return <tr>
                                        <td class="base-table-title">{item.titleL}</td>
                                        <td class="base-table-content-info" colspan={item.colspan}>
                                            {this.list[item.valueL]}
                                        </td>
                                    </tr>
                                } else {
                                    return <tr>
                                        <td class="base-table-title">{item.titleL}</td>
                                        <td class="base-table-content-info">
                                            {this.list[item.valueL]}
                                        </td>
                                        <td class="base-table-title">{item.titleR}</td>
                                        <td class="base-table-content-info"> {this.list[item.valueR]}</td>
                                    </tr>
                                }
                            })
                        }
                    </table>
                </div>
            )
        }
    }
</script>

<style src="../../common/table.css" scoped>
</style>
<style scoped>
    .main-wrap-title {
        border-bottom: none;
        padding-left: 64px;
        height: 20px;
        position: relative;
        color: #fff;
        font-size: 16px;

    }

    .main-wrap-title .el-icon-d-arrow-right {
        font-size: 20px;
        color: #2794FC;
        font-weight: 600;
        position: absolute;
        left: 40px;
    }
</style>