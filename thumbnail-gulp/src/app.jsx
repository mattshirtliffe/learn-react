var React = require('react')
var ReactDOM = require('react-dom')
var ThumbnailList = require('./thumbnail-list')


var options = {thumbnailData:[
  {
    title:"See tutorials",
    number: 42,
    header:"Learn React",
    description:" React for the win",
    imageUrl: "https://facebook.github.io/react/img/logo.svg"
  },
  {
    title:"See tutorials",
    number: 42,
    header:"Learn React",
    description:" React for the win",
    imageUrl: "https://facebook.github.io/react/img/logo.svg"
  },
  {
    title:"See tutorials",
    number: 42,
    header:"Learn React",
    description:" React for the win",
    imageUrl: "https://facebook.github.io/react/img/logo.svg"
  }
]};

// render react class
var element = React.createElement(ThumbnailList,options);

// where to place the element in dom
// put into page
ReactDOM.render(element, document.querySelector('.container'));
