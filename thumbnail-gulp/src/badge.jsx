
var React = require('react');

module.exports = Badge = React.createClass({
    render: function(){
      return <button className="btn btn-primary" type="button">
      {this.props.message} <span className="badge">{this.props.number}</span>
      </button>
    }
});
