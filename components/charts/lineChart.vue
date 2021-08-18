<template>
  <client-only>
    <div class="small">
      <line-chart :data="chartData" :styles="myStyles"></line-chart>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      myStyles: {
        height: '1392px',
        position: 'relative'
      },
      chartData: {
        labels: ['Januari', 'Februari', 'March', 'April', 'May'],
        datasets: [{
          label: 'Profit',
          data: [10, 20, 30],
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }
}
</script>

<style>

</style>
