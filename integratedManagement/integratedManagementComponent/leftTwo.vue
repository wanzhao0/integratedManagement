
<script>
    import leftTwoFirst from './leftTwoCompent/leftTwoFirst'
    import leftTwoSecond from './leftTwoCompent/leftTwoSecond'
    import leftTwoThree from './leftTwoCompent/leftTwoThree'
    import leftTwoFour from './leftTwoCompent/leftTwoFour'
    export default {
        components: {
            leftTwoFirst,
            leftTwoSecond,
            leftTwoThree,
            leftTwoFour
        },
        render() {
            return (
                <div class="left-one">
                    <div class="left-two-first-container">
                        <left-two-first />
                    </div>
                    <div class="space"></div>
                    <div class="left-two-second-container">
                        <left-two-second />
                    </div>
                    <div class="space"></div>
                    <div class="left-two-three-container">
                        <left-two-three />
                    </div>
                    <div class="space200"></div>
                    <div class="left-two-four-container">
                        <left-two-four on={this.$listeners} />
                    </div>
                </div>
            )
        }
    }
</script>

<style scoped>
    .left-one {
        width: 100%;
        height: 100%;
        background: rgba(1, 2, 6, 0.5);
        border-radius: 16px;
        border: 7px solid;
        border-image: linear-gradient(180deg, rgba(46, 116, 141, 1), rgba(12, 88, 150, 1), rgba(12, 88, 150, 1), rgba(46, 116, 141, 1)) 7 7;
        font-size: 64px;
        color: #fff;
        padding: 120px 60px 110px 60px;
    }

    .left-two-first-container {
        width: 100%;
        height: 470px;
    }

    .space {
        height: 120px;
    }

    .space200 {
        height: 160px;
    }

    .left-two-second-container {
        width: 100%;
        height: 590px;
    }

    .left-two-three-container {
        width: 100%;
        height: 660px;
    }

    .left-two-four-container {
        height: 545px;
        width: 100%
    }
</style>