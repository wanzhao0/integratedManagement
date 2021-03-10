<script>
    import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
    export default {
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        },
        props: {
            timeLineInfoDatas: {
                type: Array,
                default: () => []
            }
        },
        render() {
            return (
                <div>
                    <div class="time-line-info">
                        {
                            this.timeLineInfoDatas.map(item => {
                                return <timeline >
                                    <timeline-title bg-color="#37AEE3" icon-size="large" font-color="#016CBC">
                                        <div class="timeliner">
                                            <div style="line-height: 1.8;" class="timeline-title-year">{item.year}</div>
                                            <div class="timeline-item-circle" style={{ backgroundColor: item.color }}>
                                                <div>{item.month}</div>
                                            </div>
                                            <div style="line-height: 1.8;" class="timeline-title-month">{item.unit}</div>
                                        </div>
                                    </timeline-title>
                                    {
                                        item.timerShaftDetailsList.map(info => {
                                            return <timeline-item bg-color={info.color} font-color="#FFFFFFCC">
                                                <div class="item-container" >
                                                    <div class="item-title" >{info.acceptTime}{info.completionTime ? ` ~ ${info.completionTime}` : ''}</div>
                                                    <div class="item-container-box" style={{ borderColor: info.color }}>
                                                        <div class="item-container-box-1">
                                                            <div class="info-title" style={{ color: info.color }} title={info.name}> {info.name}</div>
                                                            <div style="fontSize:70px">
                                                                {
                                                                    info.workTime != null ? "用时" : ""
                                                                }
                                                                <span span style="color:red">{info.workTime}</span>
                                                                {
                                                                    info.workTime != null ? "工作日" : ""
                                                                }
                                                                {
                                                                    info.promiseTime != null ? "，承诺" : ""
                                                                }
                                                                <span span style="color:red">{info.workTime}</span>
                                                                {
                                                                    info.promiseTime != null ? "工作日" : ""
                                                                }
                                                            </div>
                                                        </div>
                                                        <div class="item-box-b" style={{ backgroundColor: info.color }} >{info.deptName}</div>
                                                    </div>
                                                </div>
                                            </timeline-item >
                                        })
                                    }

                                </timeline >
                            })
                        }

                    </div >

                </div>
            )
        }
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .time-line-info {
        position: relative;
        width: 3500px;
        margin: 0 auto;
        overflow: hidden;
        padding-left: 500px;
    }

    .time-line-info>>>.timeline:after {
        background-color: #2593FC !important;
        height: 115%;
        width: 5px;
        left: 1.5px;
    }

    .time-line-info>>>.timeline-item {
        border-bottom: none;
        margin-bottom: 100px;
        margin-top: 100px;
    }

    .item-title {
        display: inline-block;
        height: 66px;
        line-height: 1.5;
        padding-bottom: 140px;
    }

    .time-line-info>>>.timeline-title {
        cursor: default;
    }

    .time-line-info>>>.timeline-title-circle {
        top: 0;
    }

    .time-line-info>>>.timeline-circle {
        top: 4px;
        left: -65px;
        width: 80px;
        height: 80px;
    }

    .timeliner {
        position: relative;
    }

    .timeline-item-circle {
        position: absolute;
        border-radius: 50%;
        width: 145px;
        height: 145px;
        font-size: 70px;
        background-color: #37AEE3;
        /* background-color: red; */
        left: -100px;
        color: #fff;
        text-align: center;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .timeline-title-year {
        position: absolute;
        left: -400px;
        top: 20px;
        color: #FFFFFF;
        font-size: 70px;
        font-weight: 600;
    }

    .timeline-title-month {
        color: #FFFFFF;
        position: relative;
        font-size: 70px;
        left: 100px;
        top: 15px;
        font-weight: 600;
    }

    .item-container {
        color: #FFFFFF;
        font-size: 70px;
        position: relative;
        left: 150px;
    }

    .item-container-box {
        width: 2350px;
        height: 520px;
        border: 5px solid #ccc;
        border-radius: 3px;
        position: relative;
        text-align: center;
        font-size: 70px;
    }

    .item-container-box-1 {
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5px;

    }

    .info-title {
        line-height: 1.2;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 70px;
    }

    .item-box-b {
        width: 100%;
        height: 145px;
        position: absolute;
        bottom: -1px;
        left: 0;
        font-size: 70px;
        background-color: #ccc;
        color: #fff;
        text-align: center;
        line-height: 145px;
        border-radius: 3px;
    }
</style>