import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class NewTrip extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  render() {
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        startDateId='startDate'
        endDate={this.state.endDate}
        endDateId='endDate'
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
        focusedInput={this.state.focusedInput}
        onFocusChange={({ focusedInput }) => this.setState({ focusedInput })}
      />
    )
  };
}

export default NewTrip;
