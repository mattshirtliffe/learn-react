var React = require('react')
var ReactDOM = require('react-dom')
var ThumbnailList = require('./thumbnail-list')

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
