import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from 'semantic-ui-react';
import Button from 'components/Button';
import ChartHelper from 'common/chart';
import { areEqualLocationKey } from 'common/hooks';
import { ContainerCanvas, StyledCanvas } from './style';

const dataBubble = {
  datasets: [
    {
      label: '# of Votes',
      data: [
        {
          x: 5,
          y: 5,
          r: 15,
        },
        {
          x: 10,
          y: 10,
          r: 15,
        },
        {
          x: 15,
          y: 15,
          r: 15,
        },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 20,
    },
  ],
};

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  responsive: false,
};
const MyChart = () => {
  const { t } = useTranslation();
  const drawChart = (typeChart) => {
    const myChart = document.getElementById(typeChart);
    return ChartHelper[typeChart]({
      ctx: myChart,
      data: typeChart === 'bubble' ? dataBubble : data,
      options,
    });
  };

  return (
    <Grid columns={6} stretched>
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Button color="green" content={t('chart.line')} onClick={() => drawChart('line')} />
        </Grid.Column>
        <Grid.Column>
          <Button color="red" content={t('chart.bar')} onClick={() => drawChart('bar')} />
        </Grid.Column>
        <Grid.Column>
          <Button color="blue" content={t('chart.radar')} onClick={() => drawChart('radar')} />
        </Grid.Column>
        <Grid.Column>
          <Button color="purple" content={t('chart.pie')} onClick={() => drawChart('pie')} />
        </Grid.Column>
        <Grid.Column>
          <Button
            color="orange"
            content={t('chart.polarArea')}
            onClick={() => drawChart('polarArea')}
          />
        </Grid.Column>
        <Grid.Column>
          <Button color="brown" content={t('chart.bubble')} onClick={() => drawChart('bubble')} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <ContainerCanvas>
          <StyledCanvas id="line" width="400" height="400" />
          <StyledCanvas id="bar" width="400" height="400" />
          <StyledCanvas id="radar" width="400" height="400" />
          <StyledCanvas id="pie" width="400" height="400" />
          <StyledCanvas id="polarArea" width="400" height="400" />
          <StyledCanvas id="bubble" width="400" height="400" />
        </ContainerCanvas>
      </Grid.Row>
    </Grid>
  );
};

MyChart.propTypes = {};
MyChart.defaultProps = {};

export default memo(MyChart, areEqualLocationKey);
