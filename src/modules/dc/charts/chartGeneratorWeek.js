/* eslint-disable import/no-extraneous-dependencies */
import * as dc from 'dc';
import * as d3 from 'd3';

const chartGeneratorWeek = (
  divRef,
  dimension,
  group,
  width = '450',
  height = '350'
) => {
  const weeksNum = group.all().map(el => el.key);
  const weeksBrushChart = dc.barChart(divRef);
  weeksBrushChart
    .transitionDuration(1000)
    .width(width)
    .height(height)
    .margins({ top: 0, right: 50, bottom: 20, left: 80 })
    .dimension(dimension)
    .group(group)
    .gap(1)
    .elasticY(true)
    .x(d3.scale.linear().domain([weeksNum[0], weeksNum[weeksNum.length - 1]]))
    .alwaysUseRounding(true);
  return weeksBrushChart;
};

export default chartGeneratorWeek;
