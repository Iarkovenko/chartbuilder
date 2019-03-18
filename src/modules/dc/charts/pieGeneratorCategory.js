import * as dc from 'dc';

const pieGeneratorCategory = (
  divRef,
  dimension,
  group,
  width = '350',
  height = '350'
) => {
  const categoriesChart = dc.pieChart(divRef);
  categoriesChart
    .transitionDuration(1000)
    .width(width)
    .height(height)
    .innerRadius(20)
    .dimension(dimension)
    .group(group);
  return categoriesChart;
};

export default pieGeneratorCategory;
