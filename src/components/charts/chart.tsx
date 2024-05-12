import { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

export const ChartComponent = (props) => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = 'rgb(249, 79, 89)',
      textColor = 'black',
      areaTopColor = 'rgb(17, 181, 233)',
      areaBottomColor = 'rgb(249, 79, 89, 0.28)',
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    if (!chartContainerRef.current) return;
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};
