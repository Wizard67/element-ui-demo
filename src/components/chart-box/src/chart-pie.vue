<script>
  import { Pie } from 'vue-chartjs'
  export default Pie.extend({
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    }
  })
</script>