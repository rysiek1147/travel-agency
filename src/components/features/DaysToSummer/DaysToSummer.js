import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getDayCount(){
    const currentTime = new Date();
    const summerTimeStart = new Date(Date.UTC(currentTime.getFullYear(), 5, 21, 0, 0, 0));
    const summerTimeEnd = new Date(Date.UTC(currentTime.getFullYear(), 8, 23, 0, 0, 0));
    const dayCount = (summerTimeStart) => Math.ceil((summerTimeStart.getTime() - currentTime.getTime()) / (24 * 3600) / 1000);

    if(currentTime > summerTimeEnd){
      summerTimeStart.setUTCFullYear(currentTime.getFullYear() + 1);
    }
    if(currentTime < summerTimeStart || currentTime > summerTimeEnd){
      return dayCount(summerTimeStart);
    }
    return 0;
  }

  render(){
    const dayCount = this.getDayCount();
    return (
      <div className={styles.component}>
        <h3 className={styles.heading}>{`${dayCount ? (dayCount > 1 ? `${dayCount} days` : `${dayCount} day`) + ` to Summer` : ''}`}</h3>
      </div>
    );
  }
}

export default DaysToSummer;