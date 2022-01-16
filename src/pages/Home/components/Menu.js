const Menu = ({
  setStatus,
  setEditToggled,
  setAddToggled,
  setRwdSwitchToggled,
  rwdSwitchToggled,
  switchToggled,
  setSwitchToggled,
}) => {
  const statusHandler = (e) => {
    console.log(e.currentTarget.value);
    setRwdSwitchToggled(false);
    setStatus(e.currentTarget.value);
    if (e.currentTarget.value !== "all") {
      setEditToggled(false);
      setAddToggled(false);
    } else {
      setEditToggled(false);
      setAddToggled(true);
    }
    
    if (rwdSwitchToggled) {
      setSwitchToggled(true);
      console.log("wd");
    }
  };
  return (
    <div className="select">
      <button className="all" value="all" onClick={statusHandler}>
        <i className="tagIcon fas fa-tag" />
        總覽
      </button>
      <button className="complete" value="complete" onClick={statusHandler}>
        <i className="tagIcon fas fa-tag" />
        已完成
      </button>
      <button className="uncomplete" value="uncomplete" onClick={statusHandler}>
        <i className="tagIcon fas fa-tag" />
        未完成
      </button>
    </div>
  );
};

export default Menu;
