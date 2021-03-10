
<script>
    import leftOneFirst from './leftOneCompent/leftOneFirst'
    import leftOneSecond from './leftOneCompent/leftOneSecond'
    import leftOneThree from './leftOneCompent/leftOneThree'
    import leftOneFour from './leftOneCompent/leftOneFour'
    export default {
        components: {
            leftOneFirst,
            leftOneSecond,
            leftOneThree,
            leftOneFour
        },
        render() {
            return (
                <div class="left-one">
                    <div class="left-one-first-container">
                        <left-one-first />
                    </div>
                    <div class="space" />
                    <div class="left-one-second-container">
                        <left-one-second />
                    </div>
                    <div class="space" />
                    <div class="left-one-three-container">
                        <left-one-three />
                    </div>
                    <div class="space-200" />
                    <div class="left-one-four-container">
                        <left-one-four />
                    </div>
                </div>
            )
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .left-one {
        width: 100%;
        height: 100%;
        background: rgba(1, 2, 6, 0.5);
        border-radius: 16px;
        border: 7px solid;
        border-image: linear-gradient(180deg, rgba(46, 116, 141, 1), rgba(12, 88, 150, 1), rgba(12, 88, 150, 1), rgba(46, 116, 141, 1)) 7 7;
        font-size: 64px;
        color: #fff;
        padding: 120px 60px 130px 60px;
    }

    .left-one-first-container {
        width: 100%;
        height: 470px;
    }

    .space {
        height: 120px;
    }

    .space-200 {
        height: 160px
    }

    .left-one-second-container {
        width: 100%;
        height: 590px;
    }

    .left-one-three-container {
        width: 100%;
        height: 660px;
    }

    .left-one-four-container {
        height: 545px;
        width: 100%
    }
</style>