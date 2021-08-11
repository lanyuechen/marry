import React from 'react';
import { NavLink } from 'umi';
import Icon from '@/components/icon';

import style from './style.less';

export default function(props) {
  return (
    <div className={style.layout}>
      {props.children}
      <div className={style.navbar}>
        <NavLink to="/" exact activeClassName={style.active}>
          <Icon type="icon-home" />
          <span className={style.title}>首页</span>
        </NavLink>
        <NavLink to="/templates" activeClassName={style.active}>
          <Icon type="icon-card-bag" />
          <span className={style.title}>模板</span>
        </NavLink>
        <NavLink to="/my" exact activeClassName={style.active}>
          <Icon type="icon-001-man" />
          <span className={style.title}>我的</span>
        </NavLink>
      </div>
    </div>
  );
}
