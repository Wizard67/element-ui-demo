<script>
  import { PolarArea } from 'vue-chartjs'
  export default PolarArea.extend({
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    }
  })
</script>