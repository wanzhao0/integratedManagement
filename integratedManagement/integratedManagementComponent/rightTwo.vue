
<script>
    import rightTwoFirst from './rightTwoCompent/rightTwoFirst'
    import rightTwoSecond from './rightTwoCompent/rightTwoSecond'
    export default {
        components: {
            rightTwoFirst,
            rightTwoSecond
        },
        render() {
            return (
                <div class="right-two">
                    <div class="right-two-first-container">
                        <right-two-first />
                    </div>
                    <div class="space120"></div>
                    <div class="right-two-second-container">
                        <right-two-second />
                    </div>
                </div>
            )
        },
    }
</script>

<style scoped>
    .right-two {
        width: 100%;
        height: 100%;
        background: rgba(1, 2, 6, 0.5);
        border-radius: 16px;
        border: 7px solid;
        border-image: linear-gradient(180deg, rgba(46, 116, 141, 1), rgba(12, 88, 150, 1), rgba(12, 88, 150, 1), rgba(46, 116, 141, 1)) 7 7;
        font-size: 64px;
        color: #fff;
        padding: 120px 60px 80px 60px;
    }

    .space120 {
        height: 120px;
    }

    .right-two-first-container {
        height: 470px;
        width: 100%;
    }

    .right-two-second-container {
        height: 2100px;
        width: 100%;
    }
</style>