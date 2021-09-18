import React from 'react';
import { prepareElement } from '@/utils/prepare';
import { PROP_FORMS } from '@/elements';

export default (props) => {
  const { data, pageIdx, elementIdx, onChange } = props;

  const handleChange = (key, value) => {
    key = typeof key === 'string' ? key.split('.') : key;
    onChange(['pages', pageIdx, 'elements', elementIdx, ...key], value);
  }

  let element = data.pages[pageIdx]?.elements?.[elementIdx];
  let PropForm;
  if (element) {
    element = prepareElement(element, { width: window.innerWidth, height: window.innerHeight });
    PropForm = PROP_FORMS[element.type];
  }

  return (
    <PropForm
      element={element}
      onChange={handleChange}
    />
  )
}