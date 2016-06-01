var React = require("react");
var Button = require("./button");
var ListItem = require("./listitem");

module.exports = React.createClass({

  handleClick: function() {
    // react method which changes value and re render
    this.setState({open: !this.state.open})

    // dont do this this.state.open = value;
  },
  getInitialState: function() {
    // first time I render
    return {open:false}
  },
  handleItemClick: function(item)
  {
    this.setState({
      open: false,
      itemTitle: item,

    });
  },
  render: function() {
    var list = this.props.items.map(function(item){
      return <ListItem item={item} whenItemClicked={this.handleItemClick} className={this.state.itemTitle == item ? "active" : ""}/>
    }.bind(this));

    return <div className="dropdown">
      <Button
      whenClicked={this.handleClick}
      className="btn-default"
      title={this.state.itemTitle || this.props.title}
      subTitleClassName="caret"
      />

      <ul className={"dropdown-menu "+ (this.state.open ? "show" : "")}>
        {list}
      </ul>
      </div>
  }

});
