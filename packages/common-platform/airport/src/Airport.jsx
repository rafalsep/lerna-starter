import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@gmdev/button';

const Airport = ({ className, name, code, showStacked }) => {
  const containerClass = classNames(className, 'Airport', { stacked: showStacked });
  return (
    <span className={containerClass} data-code={code}>
      {name || code}
      QQQQQ
      <Button><span>BUTTON233</span></Button>
    </span>
  );
};

Airport.propTypes = {
  className: PropTypes.string,
  code: PropTypes.string,
  name: PropTypes.node,
  showStacked: PropTypes.bool,
};

Airport.defaultProps = { className: undefined, code: '', name: undefined, showStacked: false };

export default Airport;
