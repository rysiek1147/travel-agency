export const formatTime = secondsTime => {
  if(!secondsTime || isNaN(secondsTime) || secondsTime < 0)
    return null;
  const hours = Math.floor(secondsTime / 3600) + '';
  const minutes = Math.floor(secondsTime / 60 % 60)+ '';
  const seconds =  Math.floor(secondsTime % 60) + '';

  return hours.padStart(2,'0') + ':' + minutes.padStart(2,'0') + ':' + seconds.padStart(2,'0');
};