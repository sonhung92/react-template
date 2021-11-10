import Chart from 'chart.js';

const drawChart = ({ ctx, data, options }, type) =>
  new Chart(ctx, {
    type,
    data,
    options,
  });

const ChartHelper = {
  line: (object) => drawChart(object, 'line'),
  bar: (object) => drawChart(object, 'bar'),
  radar: (object) => drawChart(object, 'radar'),
  pie: (object) => drawChart(object, 'pie'),
  polarArea: (object) => drawChart(object, 'polarArea'),
  bubble: (object) => drawChart(object, 'bubble'),
};

export default ChartHelper;
