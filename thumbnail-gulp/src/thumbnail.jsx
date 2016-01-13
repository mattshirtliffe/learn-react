var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
    render: function(){
      return <div className="thumbnail">
        <img src={this.props.image} alt={this.props.alt}/>
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>
          <Badge  message={this.props.message} number ={this.props.number} 	/>


          </p>
        </div>
      </div>
    }
});
