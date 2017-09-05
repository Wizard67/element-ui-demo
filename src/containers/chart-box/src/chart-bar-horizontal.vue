<script>
  import { HorizontalBar } from 'vue-chartjs'
  export default HorizontalBar.extend({
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    }
  })
</script>