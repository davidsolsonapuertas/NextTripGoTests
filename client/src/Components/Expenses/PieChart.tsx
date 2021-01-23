import React, { useEffect } from 'react';
import Chart from 'chart.js';

import { colors } from '../../assets/ColorPalette';
import { Expense } from '../../Interfaces/Trip';

interface Expenses extends Array<Expense> {}

interface IProps {
  expenses: Expenses;
}

function PieChart({ expenses }: IProps) {
  const values: number[] = [];
  const types: string[] = [];

  expenses &&
    // eslint-disable-next-line array-callback-return
    expenses.map((expense: any) => {
      types.push(expense.type);
      values.push(expense.amount);
    });

  useEffect(() => {
    var ctx = 'myChart';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: types,
        datasets: [
          {
            data: values,
            backgroundColor: colors,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: 'rgb(255,255,255)',
          bodyFontColor: '#858796',
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas id="myChart"></canvas>;
}

export default PieChart;
