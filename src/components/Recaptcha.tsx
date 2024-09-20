import React from "react";
import ReCAPTCHA from 'react-google-recaptcha'

const Recaptcha = () => {
    const onChange = () => {}
  return (
    <ReCAPTCHA style={{ display: 'flex', justifyContent: 'center'}}
    sitekey="6Ld-xUgqAAAAAAeWxyt6oqIuZ0xpIPnvLw1Ozo6q"
    onChange={onChange}
  />
  );
};

export default Recaptcha;
