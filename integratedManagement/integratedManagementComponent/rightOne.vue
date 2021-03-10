
<script>
    import rightOneFirst from './rightOneComent/rightOneFirst'
    import rightOneSecond from './rightOneComent/rightOneSecond'
    import rightOneThree from './rightOneComent/rightOneThree'
    import rightOneFour from './rightOneComent/rightOneFour'
    import rightOneFive from './rightOneComent//rightOneFive'
    import rightOneSix from './rightOneComent/rightOneSix'
    export default {
        components: {
            rightOneFirst,
            rightOneSecond,
            rightOneThree,
            rightOneFour,
            rightOneFive,
            rightOneSix
        },
        render() {
            return (
                <div class="right-one">
                    <div class="right-one-first-container">
                        <right-one-first on={this.$listeners}  />
                    </div>
                    <div class="space"></div>
                    <div class="right-one-second-container">
                        <right-one-second on={this.$listeners}  />
                    </div>
                    <div class="space"></div>
                    <div class="right-one-three-container">
                        <right-one-three on={this.$listeners}  />
                    </div>
                    <div class="space"></div>
                    <div class="right-one-four-container">
                        <right-one-four on={this.$listeners}  />
                    </div>
                    <div class="space120"></div>
                    <div class="right-one-five-container">
                        <right-one-five on={this.$listeners} />
                    </div>
                    <div class="space120"></div>
                    <div class="right-one-six-container">
                        <right-one-six />
                    </div>
                </div>
            )
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box
    }

    .right-one {
        width: 100%;
        height: 100%;
        background: rgba(1, 2, 6, 0.5);
        border-radius: 16px;
        border: 7px solid;
        border-image: linear-gradient(180deg, rgba(46, 116, 141, 1), rgba(12, 88, 150, 1), rgba(12, 88, 150, 1), rgba(46, 116, 141, 1)) 7 7;
        padding: 86px 50px 110px 50px
    }


    .right-one-first-container {
        width: 100%;
        height: 290px;
    }

    .space {
        height: 50px;
    }

    .space120 {
        height: 120px
    }

    .right-one-second-container {
        width: 100%;
        height: 290px;
    }

    .right-one-three-container {
        width: 100%;
        height: 290px;
    }

    .right-one-four-container {
        width: 100%;
        height: 290px;
    }

    .right-one-five-container {
        width: 100%;
        height: 600px;
    }

    .right-one-six-container {
        width: 100%;
        height: 570px;
    }
</style>