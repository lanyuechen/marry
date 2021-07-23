import React from 'react';
import { NavLink } from 'umi';

import style from './style.less';

export default function(props) {
  return (
    <div className={style.layout}>
      {props.children}
      <div className={style.navbar}>
        <NavLink to="/" exact activeClassName={style.active}>首页</NavLink>
        <NavLink to="/templates" exact activeClassName={style.active}>模板</NavLink>
        <NavLink to="/my" exact activeClassName={style.active}>我的</NavLink>
      </div>
    </div>
  );
}
