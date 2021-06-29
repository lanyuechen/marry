import './index.css';

function BasicLayout(props) {
  return (
    <div className="layout-normal">
      {props.children}
    </div>
  );
}

export default BasicLayout;
