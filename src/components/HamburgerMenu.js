import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './HamburgerMenu.scss';

const HamburgerMenu = ({ open }) => (
  <button
    aria-expanded={open}
    aria-label="Mobile Menu"
    type="button"
    className={cx('HamburgerMenu', { HamburgerMenu__open: open })}
  >
    <div />
    <div />
    <div />
  </button>
);

HamburgerMenu.propTypes = {
  open: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  open: false,
};

export default HamburgerMenu;
