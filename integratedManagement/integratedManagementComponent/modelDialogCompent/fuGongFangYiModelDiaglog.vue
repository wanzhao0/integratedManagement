
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
                        name: '中建一局集团第一建筑有限公司',
                        userInfo: "许进培,1386985222",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",
                        no: 27,
                        topFengXian: 0,
                        lowFengXian: 0
                    }, {
                        date: '2016-05-03',
                        name: '中建一局集团第一建筑有限公司',
                        userInfo: "许进培,1386985222",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",
                        no: 27,
                        topFengXian: 0,
                        lowFengXian: 0
                    }, {
                        date: '2016-05-03',
                        name: '中建一局集团第一建筑有限公司',
                        userInfo: "许进培,1386985222",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",
                        no: 27,
                        topFengXian: 0,
                        lowFengXian: 0
                    }, {
                        date: '2016-05-03',
                        name: '中建一局集团第一建筑有限公司',
                        userInfo: "许进培,1386985222",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",
                        no: 27,
                        topFengXian: 0,
                        lowFengXian: 0
                    }, {
                        date: '2016-05-03',
                        name: '中建一局集团第一建筑有限公司',
                        userInfo: "许进培,1386985222",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",
                        no: 27,
                        topFengXian: 0,
                        lowFengXian: 0
                    }, {
                        date: '2016-05-03',
                        name: '中建一局集团第一建筑有限公司',
                        userInfo: "许进培,1386985222",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",
                        no: 27,
                        topFengXian: 0,
                        lowFengXian: 0
                    }, {
                        date: '2016-05-03',
                        name: '中建一局集团第一建筑有限公司',
                        userInfo: "许进培,1386985222",
                        address: '洋山保税港区全球维修暨综合保障基地项目',
                        type: "房建项目",
                        no: 27,
                        topFengXian: 0,
                        lowFengXian: 0
                    }
                ]
            }
        },
        render(h, content) {
            let tableScoped = (value => {
                return (
                    <div class="text-ide">
                        {value}
                    </div >
                )
            })
            let tableScoped1 = ((value1, value2) => {
                return (
                    <div class="text-ide">
                        中风险({value1}) 高风险({value2})
                    </div >
                )
            })
            let tableScoped2 = ((value1, value2) => {
                return (
                    <div class="text-ide">
                        <div>{value1}</div>
                        <div>{value2}</div>
                    </div >
                )
            })
            let cols = [
                {
                    label: "工地名称", align: "center", scopedSlots: {
                        default: scoped => tableScoped(scoped.row.address)
                    }
                },
                {
                    label: "总包单位", minWidth: "50%", align: "left", scopedSlots: {
                        default: scoped => tableScoped2(scoped.row.name, scoped.row.userInfo)
                    }
                },
                {
                    label: "工地分类", align: "center", minWidth: "20%", scopedSlots: {
                        default: scoped => tableScoped(scoped.row.type)
                    }
                },
                {
                    label: "工人总数", align: "center", width: "500", scopedSlots: {
                        default: scoped => tableScoped(scoped.row.no)
                    }
                },
                {
                    label: "途径中.高风险人员", align: "center", width: "800", scopedSlots: {
                        default: scoped => tableScoped1(scoped.row.topFengXian, scoped.row.lowFengXian)
                    }
                }
            ]
            return (
                <div class="fu-gong-model">
                    <div class="fu-gong-model-title-box">
                        <div class="top-feng-xian">高风险 : 0个</div>
                        <div class="top-feng-xian low-feng-xian">中风险 : 0个</div>
                    </div>

                    <el-table data={this.tableData} border max-height="1800" on-row-click={this.nextDetail.bind(this)}
                        header-cell-style={{ background: '#072A76', color: '#fff', fontSize: '60px', padding: "20px 0" }}>
                        {cols.map((col, index) => {
                            const { scopedSlots } = col;
                            return (<el-table-column key={index}
                                {...{ attrs: col }} scopedSlots={scopedSlots} />);
                        })}
                    </el-table>
                </div>
            )
        },
        methods: {
            // 点击每行数据
            nextDetail(val) {
                this.$emit("showDialog", "fuGongFangYiDetailModelDiaglog")
            }
        },
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