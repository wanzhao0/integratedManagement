<script>
    export default {
        data() {
            return {
                timeInfoList: [
                    {
                        label: "已办结",
                        color: "#2FA0E6"
                    },
                    {
                        label: "办理中",
                        color: "#FF9900"
                    },
                    {
                        label: "办理中",
                        color: "#CCCCCC"
                    }
                ]
            }
        },
        render() {
            return (
                <div class="time-info-tips">
                {
                    this.timeInfoList.map(item=>{
                        return <div class="time-info-tips-item">
                        {item.label}
                        </div>
                    })
                }
                </div>
            )
        },
    }
</script>

<style scoped>
div {
    box-sizing: border-box;
}
.time-info-tips {
    position: absolute;
    right: -30px;
    display: flex;
    top: 20px;
}
.time-info-tips-item {
    width: 80px;
    position: relative;
}
.time-info-tips-item::before{
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #2FA0E6;
    position: absolute;
    left: -20px;
    top: 4px;
}
.time-info-tips-item:nth-of-type(2)::before{
    background-color:#FF9900 ;
}
.time-info-tips-item:nth-of-type(3)::before{
    background-color:#CCCCCC ;
}
</style>