/**
 * 오늘 년,월,일을 yyyy-mm-dd 형태로 반환하는 함수
 **/
const getTodayForm = () => {
  const dateObj = new Date();
  const Year = dateObj.getFullYear();
  const Month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const Day = ("0" + (dateObj.getDate())).slice(-2);

  return Year + "-" + Month + "-" + Day;
}

export { getTodayForm }