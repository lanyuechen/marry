/**
 * 矩形边框
 */

 import React from 'react';

 import style from './style.less';
 
 export default (props) => {
   const { children, borderWidth = 24, borderRadius = 0 } = props;
   return (
     <div
       className={style.rectFrame}
       style={{
         borderWidth,
         borderRadius: `${borderRadius * 100}%`,
       }}
     >
       {children}
     </div>
   )
 }