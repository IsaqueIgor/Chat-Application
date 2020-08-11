import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton } from '@chakra-ui/core';
import classNames from 'classnames';

import './Button.scss';

const Button = (props) => (
  <BaseButton {...props} className={classNames('button', props.className)} />
);

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
