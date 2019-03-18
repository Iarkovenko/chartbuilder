/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from './selectBarStyle';

class SelectBarView extends React.Component {
  state = {};

  render() {
    const { classes, onHandleChange, parametr } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="Select Parametr">Parametr</InputLabel>
          <Select
            value={parametr}
            onChange={onHandleChange}
            name="parametr"
            inputProps={{
              id: 'parametr-required'
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="margin">margin</MenuItem>
            <MenuItem value="revenues">revenues</MenuItem>
            <MenuItem value="markdown">markdown</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </form>
    );
  }
}

SelectBarView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectBarView);
