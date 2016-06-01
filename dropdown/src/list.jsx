var React = require("react");

module.exports = React.createClass({
  render: function(){

    items = this.props.items.map(function(item){
      return <ListItem item={item}/>
    });

    return  <ul> {item} </ul>
  }
});
