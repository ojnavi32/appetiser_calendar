<template>
  <ds-template-three-fourth>
    <template slot="sidebar">
      <div class="form-group">
        <label class="col-form-label">From</label>
        <input type="text" class="form-control" v-model="name">        
      </div>

      <div class="form-group">
        <label class="col-form-label">From</label>
        <datepicker 
          format="yyyy-MM-dd" 
          v-model="from"
          :bootstrap-styling="true"
        ></datepicker>
      </div>
      <div class="form-group">
        <label class="col-form-label">To</label>
        <datepicker 
          format="yyyy-MM-dd" 
          v-model="to"
          :bootstrap-styling="true"
        ></datepicker>
      </div>

      <div
        v-for="item in days"
        :key="item"
        class="form-check"
      >
        <input type="checkbox" :value="item" v-model="weeks" class="form-check-input">
        <label class="form-check-label">{{ item }}</label>
      </div>

      <button class="btn btn-primary" @click="addEvent">Save</button>
    </template>
    
    <h3 class="">{{ tableTitle }}</h3>
    <table class="table table-striped">
      <tr
        v-for="index in monthDays"
        :key="index"
      >
        <td>{{ `${index} ${getDay(index)}` }}</td>
        <td>{{ checkEvent(index) }}</td>
      </tr>
    </table>
  </ds-template-three-fourth>
</template>

<script>
import { mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  components: { Datepicker },
  data () {
    return {
      weeks: [],
      name: '',
      from: '',
      to: '',
      days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December']
    }
  },
  computed: {
    ...mapGetters({
      'events': 'lists'
    }),
    getToday () {
      return new Date()
    },
    tableTitle () {
      return `${this.months[this.getToday.getMonth()]} ${this.getToday.getFullYear()}`
    },
    monthDays () {
      return new Date(this.getToday.getFullYear(), this.getToday.getMonth()+1, 0).getDate()
    }
  },
  async created () {
    this.$store.dispatch('fetchLists')
  },
  methods: {
    getDay (day) {
      return this.days[this.checkDay(day)]
    },
    checkDay (day) {
      let d = new Date(this.getToday.getFullYear(), this.getToday.getMonth(), day)
      return d.getDay()
    },
    checkEvent (day) {
      if (day <= 9) {
        day = `0${day}`
      }
      let eventDate = `${this.getToday.getFullYear()}-${this.getToday.getMonth()+1}-${day}`
      // let index = this.events.findIndex(event => event.date === eventDate)

      let val = this.events.find(event => event.date === eventDate)
      return (typeof val !== 'undefined') ? val.name : ''

      // return index === 0 ? this.events[index].name : ''
    },
    async addEvent () {
      const self = this
      let 
        dateArr = [],
        postArr = [],
        currD = new Date(this.from.toLocaleDateString()),
        endD = new Date(this.to.toLocaleDateString())

      // Get all dates between from - to
      while (currD <= endD) {
        dateArr.push(new Date(currD).toLocaleDateString())
        currD.setDate(currD.getDate() + 1)
      }

      
      _.forEach(dateArr, (val) => {
          let 
            dd = val.split('/'),
            d = new Date(dd[2], dd[0]+1, dd[1])
            // index = this.weeks.findIndex(week => week === self.days[d.getDay()])

          _.forEach(self.weeks, (i) => {
            let index = self.weeks.findIndex(week => week === self.days[d.getDay()])

            if (index === 0) {
              postArr.push(val)
            }
          })

      })
      
      this.$store.dispatch('addEvents', {
        dates: postArr,
        name: this.name,
        from: this.from.toLocaleDateString(),
        to: this.to.toLocaleDateString(),
      })

      this.$notify({
        group: 'notify',
        title: 'Success!',
        text: 'Event successfully added'
      })
    },
  }
}
</script>