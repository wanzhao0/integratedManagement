
<script>
    export default {
        functional: true,
        render(h, context) {
            const { props } = context
            props.statusList=[
                        {
                            title: "按期完成",
                            bgcColor: "#43D49F"
                        },
                        {
                            title: "超期完成",
                            bgcColor: "#FF9901"
                        },

                        {
                            title: "正常进行中",
                            bgcColor: "#2593FC"
                        },
                        {
                            title: "超期进行中",
                            bgcColor: "#FF3300"
                        },
                        {
                            title: "未申报",
                            bgcColor: "#D7D7D7"
                        }
            ]
            let contentInfoMatters =  <div class="content-info-matters">
                        <div>操作事项图示 :</div>
                        <div class="content-info-matters-color">
                            <div>
                                <span class="content-info-matters-span square"></span>
                                <span>部门操作事项</span>
                            </div>
                            <div>
                                <span class="content-info-matters-span round-corners"></span>
                                <span>项目方操作事项</span>
                            </div>
                        </div>
                    </div>
            return (
                <div class="content-info-container">
                    <div class="content-info-tips">
                        <div>办理状态图示 :</div>
                        <div class="content-info-color">
                            {
                                props.statusList.map(item => {
                                    return <div>
                                        <div class="content-info-color-item">
                                            <span style={{ backgroundColor: item.bgcColor }} class="bgc-span"></span>
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {
                        props.isFlow ? contentInfoMatters :""
                    }
                </div>

            )
        },
    }
</script>

<style scoped>
    .content-info-container {
        position: relative;
    }

    .content-info-container>div {
        position: absolute;
        right: 90px;

    }

    .content-info-container>div:nth-of-type(2) {
        top: 300px;
    }

    .content-info-tips {
        font-size: 42px;
        color: #fff;
        display: flex;
        width: 1250px;
    }

    .content-info-tips>div:first-of-type {
        width: 305px;
    }

    .content-info-color {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        justify-content: flex-start;
    }

    .content-info-color>div {
        width: 50%;
        padding-bottom: 30px;
        align-items: center;
    }

    .content-info-color-item {
        width: 50%;
        white-space: nowrap;
    }

    .bgc-span {
        display: inline-block;
        width: 90px;
        height: 40px;
        margin-right: 50px;
    }

    .content-info-matters {
        display: flex;
        font-size: 42px;
        width:1250px;
        color: #fff;
    }

    .content-info-matters>div:first-of-type {
        width: 305px;
    }


    .content-info-matters-color {
        flex: 1;
    }

    .content-info-matters-color>div {
        width: 50%;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
    }

    .content-info-matters-span {
        display: inline-block;
           width: 90px;
        height: 40px;
        border: 1px solid #999;
        margin-right: 50px;
    }

    .round-corners {
        border-radius: 5px;
    }
</style>