import React from "react";
import "./switcher-mode.scss";

class SwitcherMode extends React.Component {
  state = {
    value: true,
    toggled: false
  };

  UNSAFE_componentDidMount = () => {
    const { value } = this.props;
    if (value) {
      this.setState({
        value
      });
    }
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    const { value } = nextProps;
    if (this.state.value != value) {
      this.setState({
        toggled: !value,
        value
      });
    }
  };

  onChange = () => {
    const { onChange, filterKey } = this.props;
    const { value, toggled } = this.state;
    this.setState({
      value: !value,
      toggled: !toggled
    });
    if (onChange) {
      onChange(!value, filterKey);
    }
  };

  toggled = () => {
    const { toggled } = this.state;
    this.setState({
      toggled: !toggled
    });
  };

  render() {
    const { customClass } = this.props;
    const { value, toggled } = this.state;
    return (
      <div className={`switcher-mode ${customClass ? customClass : ''}`}>
        <label
          className={"switch" + (toggled ? " switch-mode-active" : " switch-mode-hide")}
        >
          <input
            type="checkbox"
            checked={!value}
            onClick={this.onChange.bind(this)}
          />
          <span className="switch-slider switch-round">
            <span className="switch-status switch-status-show">keywords mode</span>
            <span className="switch-status switch-status-hide">value</span>
          </span>
        </label>
      </div>
    );
  }
}

export default SwitcherMode;
