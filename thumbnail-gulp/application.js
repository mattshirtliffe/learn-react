var options = {
  thumbnailData:[
  {message:"inbox",
  number:42,
  image:"http://i.imgur.com/EvPTPuj.jpg",
  title:"Vegan Birthday Cake",
  description:"Vegan, low carb, low fat, no gluten birthday cake!"
  },
  {message:"inbox",
  number:42,
  image:"http://i.imgur.com/EvPTPuj.jpg",
  title:"Vegan Birthday Cake",
  description:"Vegan, low carb, low fat, no gluten birthday cake!"
  }]
}
// instantiate
var element = React.createElement(ThumbnailList,options);


// place in dom
ReactDOM.render (element,document.querySelector('.target'));

var Badge = React.createClass({displayName: "Badge",
    render: function(){
      return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.message, " ", React.createElement("span", {className: "badge"}, this.props.number)
      )
    }
});

var ThumbnailList	 = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      // ... all
        return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
     )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
      return React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.image, alt: this.props.alt}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.title), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
          React.createElement(Badge, {message: this.props.message, number: this.props.number}	)


          )
        )
      )
    }
});
