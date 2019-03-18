/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, createRef } from 'react';

import * as dc from 'dc';
import * as d3 from 'd3';
import crossfilter from 'crossfilter2';

import pieGeneratorCategory from './charts/pieGeneratorCategory';
import chartGeneratorWeek from './charts/chartGeneratorWeek';

import Button from './buttonReset';

class Dashboard extends Component {
  chartsRef = createRef();

  pieChartRef = createRef();

  barChartRef = createRef();

  state = { loading: false, hasNDX: false };

  componentDidMount() {
    const { hasNDX, loading } = this.state;
    const { parametr } = this.props;

    if (hasNDX) {
      return;
    }
    if (loading) {
      return;
    }
    this.setState({ loading: true });

    d3.csv('./data.csv', (err, data) => {
      if (err) throw err;
      this.ndx = crossfilter(data);
      this.setState({ loading: false, hasNDX: true });
      this.categoryDim = this.ndx.dimension(d => d.item_category);
      this.categoryDimGroup = this.categoryDim
        .group()
        .reduceSum(d => d[parametr]);

      this.weekDim = this.ndx.dimension(d => d.week_ref);
      this.weekDimGroup = this.weekDim.group().reduceSum(d => d[parametr]);

      pieGeneratorCategory(
        this.pieChartRef.current,
        this.categoryDim,
        this.categoryDimGroup
      );
      chartGeneratorWeek(
        this.barChartRef.current,
        this.weekDim,
        this.weekDimGroup
      );

      dc.renderAll();
    });
  }

  componentDidUpdate(prevProps) {
    const { parametr } = this.props;
    if (!this.chartsRef.current) return;
    if (parametr !== prevProps.parametr) {
      this.categoryDimGroup = this.categoryDim
        .group()
        .reduceSum(d => d[parametr]);
      this.weekDimGroup = this.weekDim.group().reduceSum(d => d[parametr]);

      pieGeneratorCategory(
        this.pieChartRef.current,
        this.categoryDim,
        this.categoryDimGroup
      );
      chartGeneratorWeek(
        this.barChartRef.current,
        this.weekDim,
        this.weekDimGroup
      );

      dc.renderAll();
    }
  }

  handleReset = () => {
    dc.filterAll();
    dc.redrawAll();
  };

  render() {
    const { hasNDX } = this.state;

    if (!hasNDX) {
      return <div>Loading...</div>;
    }
    return (
      <div ref={this.chartsRef}>
        <div>
          <div id="categoriesChart" ref={this.pieChartRef} />
          <div id="WeeksChart" ref={this.barChartRef} />
        </div>
        <Button reset={this.handleReset} />
      </div>
    );
  }
}

export default Dashboard;
