/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, Fragment } from 'react';
import * as d3 from 'd3';
import crossfilter from 'crossfilter2';

import SelectBarView from './selectBar/selectBarView';
import Dashboard from './dc/dashboard';

class ChartContainer extends Component {
  state = {
    parametr: null
  };

  componentDidMount() {
    d3.csv('./data.csv', (err, data) => {
      if (err) throw err;
      this.ndx = crossfilter(data);
    });
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { parametr } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <SelectBarView
          parametr={parametr}
          onHandleChange={this.onHandleChange}
        />
        {parametr ? (
          <Dashboard classes={classes} {...this.state}>
            <h1>asdasd</h1>
          </Dashboard>
        ) : null}
      </Fragment>
    );
  }
}

export default ChartContainer;
