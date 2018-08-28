/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import FormControl from './components/form-control';

const inputEmail = (props) => {
  return (
    <FormControl>
      <label htmlFor={props.inputName}>
        {props.labelName}
        {props.isRequired ? <span className="star">*</span> : null}
      </label>
      <input type="email" onChange={props.onInputChange} name={props.inputName} placeholder={props.placeholder} className="input-element" id={props.inputName} required={props.isRequired} />
    </FormControl>
  );
};

export default inputEmail;