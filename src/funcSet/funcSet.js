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

/**
 * 비밀번호 체크 함수
 * @params userPwd => 사용자가 입력한 비밀번호
 * @params realPwd => 실제 비밀번호
 **/
const checkPwd = (userPwd, realPwd) => {
  console.log(userPwd, realPwd);
  return userPwd === realPwd ? true : false;

}

export { checkPwd }

/** 
 * 객체 empty 여부 확인 함수
 * @params obj => 실제 검사할 객체
 * @return 빈 객체일 경우 true, 빈 객체가 아닌 경우 false
 * **/
const isEmpty = (obj) => {
  if (obj !== undefined) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  } else {
    return {}
  }

}

export { isEmpty }