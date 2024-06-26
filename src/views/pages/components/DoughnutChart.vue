<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  id: {
    type: String,
    default: "doughnut-chart",
  },
  title: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "300",
  },
  chart: {
    type: Object,
    required: true,
    labels: Array,
    datasets: {
      type: Object,
      label: String,
      data: Array,
    },
  },
});

onMounted(() => {
  let ctx = document.getElementById(props.id).getContext("2d");

  let chartStatus = Chart.getChart(props.id);
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: props.chart.labels,
      datasets: [
        {
          label: props.chart.datasets.label,
          weight: 9,
          cutout: 60,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: [
            "#2152ff",
            "#3A416F",
            "#f53939",
            "#a8b8d8",
            "#4BB543 ",
          ],
          data: props.chart.datasets.data,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  });
});
</script>
<template>
  <div class="card z-index-2">
    <div class="p-3 pb-0 card-header">
      <h6>{{ props.title }}</h6>
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <canvas
          :id="props.id"
          class="chart-canvas"
          :height="props.height"
        ></canvas>
      </div>
    </div>
  </div>
</template>
