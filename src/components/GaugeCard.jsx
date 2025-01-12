import { Gauge } from '@ant-design/plots';
import ReactDOM from 'react-dom';
import React, { useContext, useEffect, useState, createContext } from 'react';
import { Card, Space, Tag, Typography, theme } from 'antd';
import { fontString } from 'chart.js/helpers';
const GaugeCard = (database) => {
  const [data, setData] = useState({
    total: 1,
    occupied: 0,
    unoccupied: 0
  });
  useEffect(() => {

    setData(database.database);

  }, []);

  const { token } = theme.useToken();

  const config = {
    // theme: currTheme,

    height: 200,
    percent: data.occupied / data.total,
    range: {
      color: [token.colorPrimary, token.colorFillSecondary]
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    innerRadius: 0.84,
    min: 0,
    indicator: {
      pointer: null,
      pin: null
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: 'black',
            lineWidth: 24,
            lineDash: [4, 5],
            strokeOpacity: 0.7,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: 'pointer'
          }
        }
      }
    },
    axis: {
      label: {
        offset: 5,
        offsetY: 25,
        style: { fontSize: 14 },
        formatter: (val) => {
          return '';
          if (val === '0') {
            return '0';
          } else if (val === '1') {
            return val * data.total;
          }
        }
      },
      subTickLine: null,
      tickLine: null
    },
    statistic: {
      title: {
        offsetY: -44,
        style: {
          fontSize: 26
        },
        formatter: (e) => {
          return `${data.occupied.toString()}/${data.total}`;
        }
      },
      content: {
        offsetY: -24,
        style: {
          fontSize: '18px',
          lineHeight: '44px',
          color: token.colorTextSecondary
        },
        formatter: () => ('Xe đang đỗ')
      }
    },
    gaugeStyle: {
      lineCap: 'round',
      lineDash: [4, 5],
      strokeOpacity: 0.7,
      shadowColor: token.boxShadowCard,
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    }
  };
  return (<Gauge {...config} />);
};


const GaugeCard0 = (database) => {
  const [data, setData] = useState({
    total: 1,
    occupied: 0,
    unoccupied: 0
  });
  useEffect(() => {

    setData(database.database);

  }, []);

  const { token } = theme.useToken();

  const config = {
    // theme: currTheme,

    height: 200,
    percent: data.occupied / data.total,
    range: {
      color: [token.colorPrimary, token.colorFillSecondary]
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    innerRadius: 0.84,
    min: 0,
    indicator: {
      pointer: null,
      pin: null
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: 'black',
            lineWidth: 24,
            lineDash: [4, 5],
            strokeOpacity: 0.7,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: 'pointer'
          }
        }
      }
    },
    axis: {
      label: {
        offset: 5,
        offsetY: 25,
        style: { fontSize: 14 },
        formatter: (val) => {
          return '';
          if (val === '0') {
            return '0';
          } else if (val === '1') {
            return val * data.total;
          }
        }
      },
      subTickLine: null,
      tickLine: null
    },
    statistic: {
      title: {
        offsetY: -44,
        style: {
          fontSize: 26
        },
        formatter: (e) => {
          return `${data.occupied.toString()}`;
        }
      },
      content: {
        offsetY: -24,
        style: {
          fontSize: '18px',
          lineHeight: '44px',
          color: token.colorTextSecondary
        },
        formatter: () => ('Xe chưa có chỗ đậu')
      }
    },
    gaugeStyle: {
      lineCap: 'round',
      lineDash: [4, 5],
      strokeOpacity: 0.7,
      shadowColor: token.boxShadowCard,
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    }
  };




  return (<Gauge {...config} />);
};




export { GaugeCard, GaugeCard0 };