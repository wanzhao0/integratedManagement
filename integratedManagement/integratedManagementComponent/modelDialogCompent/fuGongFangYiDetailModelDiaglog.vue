
<script>
    export default {
        props: {
            itemObj: {
                type: Object
            }
        },
        data() {

            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '唐晓玲',
                        source: "洋山保税港区全球",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",

                    }, {
                        date: '2016-05-03',
                        name: '许进培',
                        ource: "洋山保税港区全球",
                        address: '洋山保税港区全球维修暨综合保障基地项目'
                    }
                ]
            }
        },
        render(h, content) {
            let tableScoped = (value => {
                return (
                    <div >
                        {value}
                    </div >
                )
            })

            let cols = [
                {
                    label: "姓名", minWidth: "20%", align: "center", scopedSlots: {
                        default: scoped => tableScoped(scoped.row.name)
                    }
                },
                {
                    label: "入场时间", minWidth: "50%", align: "center", scopedSlots: {
                        default: scoped => tableScoped(scoped.row.date)
                    }
                },
                {
                    label: "来源地", align: "center", minWidth: "20%", scopedSlots: {
                        default: scoped => tableScoped(scoped.row.address)
                    }
                },
                {
                    label: "途径风险地区", align: "center", scopedSlots: {
                        default: scoped => tableScoped(scoped.row.address)
                    }
                }
            ]
            return (
                <div class="fu-gong-model">
                    <div class="fu-gong-model-title">
                        工地名称: 临港产业区 "先租后售" 园区公共租赁住房四期项目001
                    </div>
                    <div class="fu-gong-model-title">
                        总包单位: 上海宝业集团有限公司,王学结,15234686545
                    </div>
                    <div class="fu-gong-model-title-box">
                        <div class="top-feng-xian">高风险 : 0个</div>
                        <div class="top-feng-xian low-feng-xian">中风险 : 0个</div>
                    </div>
                    <el-table data={this.tableData} border max-height="1800"
                        header-cell-style={{ background: '#072A76', color: '#fff', fontSize: '60px', padding: "20px 0" }}>
                        {cols.map((col, index) => {
                            const { scopedSlots } = col;
                            return (<el-table-column key={index}
                                {...{ attrs: col }} scopedSlots={scopedSlots} />);
                        })}
                    </el-table>
                </div>
            )
        }
    }
</script>
<style scoped>
    div {
        box-sizing: border-box;
    }

    .fu-gong-model {
        position: absolute;
        top: 450px;
        left: 215px;
        width: 4794px;
        height: 1930px;
    }

    .fu-gong-model>>>.el-table {
        background-color: transparent;
        color: #fff;
        border: 1px solid #3A8FD6;
    }

    .fu-gong-model>>>.el-table--border td,
    .fu-gong-model>>>.el-table--border th {
        border-right: 1px solid #3A8FD6;
        border-right-color: #3A8FD6;
        border-bottom: 1px solid #3A8FD6;
    }

    .fu-gong-model>>>.el-table__row {
        height: 150px;
        font-size: 50px;
        background-color: transparent;
        border: 1px solid #3A8FD6;
    }

    .fu-gong-model>>>.el-table .cell {
        line-height: 80px;
        background-color: transparent;
    }

    .fu-gong-model>>>.el-table th,
    .el-table tr {
        background-color: transparent
    }

    .fu-gong-model>>>.el-table--enable-row-hover .el-table__body tr:hover>td {
        background: rgba(46, 45, 45, 0.8);
    }

    .fu-gong-model-title-box {
        display: flex;
        justify-content: flex-end;
        margin-top: -100px;
    }

    .fu-gong-model-title {
        font-size: 60px;
        color: #fff;
        letter-spacing: 5px;
        line-height: 1.8
    }

    .top-feng-xian {
        width: 500px;
        height: 100px;
        font-size: 50px;
        color: #AC1C1E;
        border: 4px solid #AC1C1E;
        text-align: center;
        line-height: 100px
    }

    .low-feng-xian {
        color: #975128;
        border: 4px solid #975128;
        margin-left: 80px;
        margin-bottom: 50px;
    }

    .fu-gong-model>>>.el-table__row>td:nth-of-type(1),
    .fu-gong-model>>>.el-table__row>td:nth-of-type(2) {
        text-indent: 30px
    }

    .fu-gong-model>>>.has-gutter tr {
        background-color: transparent;
    }
</style>