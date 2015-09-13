var React = require("react");

var Task = React.createClass({
  onChangeCheckbox: function() {
    this.props.onChange(this.props.id);
  },
  render: function() {
    return <li>
      <input type="checkbox" onChange={this.onChangeCheckbox}
             checked={this.props.complete} />
      {this.props.text}
    </li>;
  }
});

module.exports = Task;
