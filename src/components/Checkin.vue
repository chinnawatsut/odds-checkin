<template>
  <div>
    <h2>checkin route</h2>
    <div class="timer">
      <smooth-picker v-show="showPicker" ref="smoothPicker" :data="data" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkin',
  data () {
    let hours = []
    let minutes = []
    for (let h = 0; h < 24; h++) {
      hours.push(h)
    }
    for (let m = 0; m < 60; m++) {
      minutes.push(m)
    }
    return {
      showPicker: true,
      data: [
        {
          currentIndex: 1,
          flex: 3,
          list: hours,
          onClick: this.clickOnGender,
          textAlign: 'center',
          className: 'row-group'
        },
        {
          currentIndex: 1,
          flex: 3,
          list: minutes,
          onClick: this.clickOnGender,
          textAlign: 'center',
          className: 'row-group'
        }
      ]
    }
  }
}
</script>

<style scoped>
.timer {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border: solid blue 2px;
}
</style>