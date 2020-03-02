<template>
  <div class="show-data">
    <div ref="showData" class="echarts"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {
        title:{
          color:"red"
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "2015", "2016"],
          source: [
            { product: "Matcha Latte", "2015": 43.3, "2016": 85.8 },
            { product: "Milk Tea", "2015": 83.1, "2016": 73.4 },
            { product: "Cheese Cocoa", "2015": 86.4, "2016": 65.2 },
            { product: "Walnut Brownie", "2015": 72.4, "2016": 53.9 }
          ]
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#FF0000"
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#FF0000"
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }]
      }
    };
  },
  mounted() {
    var myChart = this.$echarts.init(this.$refs.showData);
    window.onresize = function() {
      myChart.resize();
    };
    myChart.setOption(this.option);
  }
};
</script>
<style scoped>
.show-data {
  height: 98%;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.echarts{
  width: 90%;
  height: 90%;
}
</style>