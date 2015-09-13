var React = require("react");
var Task = require("./task.jsx");

var Todo = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      tasks: [],
    };
  },
  onChangeText: function(e) {
    this.setState({text: e.target.value});
  },
  onSubmitText: function(e) {
    // formのイベントをキャンセルしてページのリロードを防ぐ
    e.preventDefault();
    if (this.state.text !== "") {
      var newTasks = this.state.tasks.concat({
        text: this.state.text,
        complete: false
      });
      this.setState({
        text: "",
        tasks: newTasks
      });
    }
  },
  onChange: function(key) {
    var target = this.state.tasks[key];
    var newTasks = this.state.tasks.filter(function(e, i) {
      return i !== key;
    }).concat({
      text: target.text,
      complete: !target.complete
    });
    this.setState({tasks: newTasks});
  },
  render: function() {
    var tasks = [];
    var done = [];
    this.state.tasks.map(function(e, i) {
      if (e.complete) {
        done.push(
            <Task key={i} id={i} text={e.text}
                  complete={true} onChange={this.onChange}/>);
      } else {
        tasks.push(
            <Task key={i} id={i} text={e.text}
                  complete={false} onChange={this.onChange}/>);
      }
    }, this);
    return <div>
      <form onSubmit={this.onSubmitText}>
        <input type="text" value={this.state.text}
               onChange={this.onChangeText} />
        <button type="submit">追加</button>
      </form>
      <h3>ToDo</h3>
      <ul>{tasks}</ul>
      <h3>Complete</h3>
      <ul>{done}</ul>
    </div>;
  }
});

React.render(
  <Todo />,
  document.getElementById("container")
);
