/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, Fragment } from 'react';

import SelectBarView from './selectBar/selectBarView';
import Dashboard from './dc/dashboard';

class ChartContainer extends Component {
  state = {
    parametr: null
  };

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
        {parametr ? <Dashboard classes={classes} {...this.state} /> : null}
      </Fragment>
    );
  }
}

export default ChartContainer;
