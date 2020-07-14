import React from "react";
import { css } from '@emotion/core';

export const Button = (props) => {

    const style = css`
    ${!props.warning && !props.danger && !props.success ? 'background: light-grey;' : '' }
    ${props.warning ? 'background: yellow;' : '' }
    ${props.danger ? 'background: red;' : '' }
    ${props.success ? 'background: green;' : '' }
    color: black;
    font-family: Lato;
   `;

  return <button css={style} onClick={props.action} className="px-3 py-2 mx-2">{props.text}</button>;
};

export default Button;
