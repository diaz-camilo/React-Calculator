const AppTopBar = (props) => (
  <div className="app-handlebar">
    <div className="close-max-min">
      <div className="close"></div>
      <div className="min"></div>
      <div className="max"></div>
    </div>
    <p className="title">{props.title}</p>
  </div>
);

export default AppTopBar;
