const EditHeader = ({ time }) => {
  var day = new Date();
  var week = day.getUTCDay();
  var month = day.getMonth() + 1;
  var date = day.getDate();
  switch (week.toString()) {
    case "0":
      week = "禮拜日";
      break;
    case "1":
      week = "禮拜一";
      break;
    case "2":
      week = "禮拜二";
      break;
    case "3":
      week = "禮拜三";
      break;
    case "4":
      week = "禮拜四";
      break;
    case "5":
      week = "禮拜五";
      break;
    case "6":
      week = "禮拜六";
      break;
  }

  return (
    <div>
      <header className="eDitHeader">
        <div className="eDit">
          <i className="dateIcon fas fa-calendar-alt"></i>
          <h1 className="eDitTitle">{`Today ${month}月${date}日 ${week}`}</h1>
          <i className="clockIcon fas fa-clock"></i>
          <p className="eDitText">{time}</p>
        </div>
      </header>
    </div>
  );
};

export default EditHeader;
