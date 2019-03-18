/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const Button = ({ reset }) => <span onClick={() => reset()}>Reset All</span>;

export default Button;
