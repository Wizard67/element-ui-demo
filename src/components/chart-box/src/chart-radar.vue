<script>
  import { Radar } from 'vue-chartjs'
  export default Radar.extend({
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    }
  })
</script>