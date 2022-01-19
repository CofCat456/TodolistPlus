const Headers = ({ switchToggled, setSwitchToggled, setStatus }) => {
  const menuToggle = switchToggled ? "close" : "open";

  const ToggleSwitch = () => {
    setSwitchToggled(!switchToggled);
    console.log(switchToggled);
  };

  const statusHandler = (e) => {
    console.log(e.currentTarget.value);
    setStatus(e.currentTarget.value);
    setSwitchToggled(!switchToggled);
  };

  return (
    <div>
      <header className="header">
        <div className="humburger">
          <button className="header-menu-toggle" onClick={ToggleSwitch}>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="humburger-icon"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`select ${menuToggle}`}>
          <div className="job">
            <h4 className="jobHeader">工作區</h4>
            <button className="all" value="all" onClick={statusHandler}>
              <i className="tagIcon fas fa-tag" />
              總覽
            </button>
            <button
              className="complete"
              value="complete"
              onClick={statusHandler}
            >
              <i className="tagIcon fas fa-tag" />
              已完成
            </button>
            <button
              className="uncomplete"
              value="uncomplete"
              onClick={statusHandler}
            >
              <i className="tagIcon fas fa-tag" />
              未完成
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
