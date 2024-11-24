import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart14 = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/generatePoints?param=144')
      .then((response) => response.json())
      .then((data) => {
        setChartData(data.map((point) => [point.x, point.y]));
      });
  }, []);

  const options = {
    title: { text: 'Micro Frontend Line Chart' },
    xAxis: { title: { text: 'X' } },
    yAxis: { title: { text: 'Y' } },
    series: [{ name: 'Data', data: chartData }],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart14;
