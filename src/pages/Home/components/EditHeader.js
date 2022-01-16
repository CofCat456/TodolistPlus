const EditHeader = () => {
  var day = new Date();
  var week = day.getUTCDay();

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
          <h1 className="eDitTitle">Today</h1>
          <p className="eDitText">{week + day.toLocaleTimeString()}</p>
        </div>
      </header>
    </div>
  );
};

export default EditHeader;
