import React from 'react';
import { Card } from 'antd';
import { AntIcon } from '@/elements/icon';

import style from './style.less';

const ICONS = ['001-man', '002-man', '003-man', '004-man', '005-man', '006-man', '007-man', '009-man', '008-man', '010-woman', '011-woman', '012-woman', '013-woman', '014-woman', '015-woman', '016-woman', '017-woman', '018-man', '019-man', '020-man', '023-man', '021-man', '022-man', '026-man', '025-man', '024-man', '027-woman', '028-woman', '030-woman', '029-woman', '031-woman', '033-woman', '032-woman', '034-woman', '035-man', '037-man', '036-man', '038-man', '039-man', '040-man', '041-man', '042-man', '043-woman', '044-woman', '045-woman', '046-woman', '047-woman', '049-woman', '050-woman', '048-woman'];

export default (props) => {
  const { element, onChange } = props;

  return (
    <Card bordered={false}>
      {ICONS.map(icon => (
        <Card.Grid
          key={icon}
          className={style.grid}
          style={{
            background: element.props.type === icon ? '#f0f0f0' : ''
          }}
          onClick={() => onChange('props.type', icon)}
        >
          <AntIcon type={`icon-${icon}`} style={{fontSize: 24}} />
        </Card.Grid>
      ))}
    </Card>
  );
}