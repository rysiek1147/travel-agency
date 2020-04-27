import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <DatePicker 
      selected={!currentValue ? (setOptionValue(new Date()), new Date()) : currentValue}
      onChange={date => setOptionValue(date)}
      minDate={new Date()}
      disableClock={true}
      dateFormat='dd/MM/yyy'
      className={`${styles.input}`}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;