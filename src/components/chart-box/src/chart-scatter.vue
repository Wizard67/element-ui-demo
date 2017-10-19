<script>
  import { Scatter } from 'vue-chartjs'
  export default Scatter.extend({
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    }
  })
</script>