import React, { useState, useEffect } from 'react';
import { Link, history } from 'umi';
import Icon from '@/components/icon';

import style from './style.less';

export default function(props) {
  const [pathname, setPathname] = useState('/');
  useEffect(() => {
    return history.listen((location) => {
      setPathname(location.pathname);
    });
  }, []);

  return (
    <div className={style.layout}>
      {props.children}

      {['/', '/template', 'story'].includes(pathname) && (
        <div className={style.navbar}>
          <Link to="/" className={pathname === '/' ? style.active : ''}>
            <Icon type="icon-home" />
            <span className={style.title}>首页</span>
          </Link>
          <Link to="/template" className={pathname === '/template' ? style.active : ''}>
            <Icon type="icon-card-bag" />
            <span className={style.title}>模板</span>
          </Link>
          <Link to="/story" className={pathname === '/story' ? style.active : ''}>
            <Icon type="icon-001-man" />
            <span className={style.title}>我的</span>
          </Link>
        </div>
      )}
    </div>
  );
}
