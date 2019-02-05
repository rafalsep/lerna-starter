import React, { PureComponent } from 'react';

class Button extends PureComponent {
  getProps = props => ({
    role: this.props.role ? this.props.role : 'button',
    type: this.props.type ? this.props.type : 'button',
    ...props
  });

  getStateAndHelpers() {
    return {
      getProps: this.getProps
    };
  }

  render() {
    const aa = { bb: 'bb' };
    return <button>qwertyaaaaZApp</button>
  }
}

export default Button;
