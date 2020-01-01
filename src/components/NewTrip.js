import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Container, Form } from 'semantic-ui-react';

class NewTrip extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focused: null
  };

  render() {
    return (
      <div>
        New Trip
      </div>
    )
  };
}

export default NewTrip;
