<script>
  import { Line } from 'vue-chartjs'
  export default Line.extend({
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    }
  })
</script>