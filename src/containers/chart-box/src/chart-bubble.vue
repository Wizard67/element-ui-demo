<script>
  import { Bubble } from 'vue-chartjs'
  export default Bubble.extend({
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    }
  })
</script>