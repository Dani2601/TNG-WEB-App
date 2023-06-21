function getDifficulty() {
  let result = [];
  for (let i = 0; i <= 5; i += 0.5) {
    result.push(i.toFixed(1));
  }
  return result.map((value) => value.toString());;
}

function getHours() {
  let result = [];
  for (let i = 0; i <= 24; i++) {
    let number = i < 10 ? `0${i}` : i.toString();
    result.push(number);
  }
  return result;
}

function getMinutes() {
    let result = [];
    for (let i = 0; i <= 59; i++) {
      let number = i < 10 ? `0${i}` : i.toString();
      result.push(number);
    }
    return result;
  }

  function getMilitaryTime() {
    const times = [];
  
    for (let hour = 0; hour <= 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        let hourStr = hour < 10 ? `0${hour}` : `${hour}`;
        let minuteStr = minute === 0 ? "00" : `${minute}`;
  
        if (hour === 23 && minute === 30) {
          times.push("00:00");
        } else {
          times.push(`${hourStr}:${minuteStr}`);
        }
      }
    }
  
    return times;
  }
export { getDifficulty, getHours,getMinutes,getMilitaryTime };
