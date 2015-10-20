var  DocumentMeta =require('react-document-meta');
var Component = React.createClass({displayName: "Component",

  componentDidMount: function() {

      alert("ss")
    },
    render: function () {
      var metaData = {
           title: 'Some Meta Title',
           description: 'I am a description, and I can create multiple tags',
           canonical: 'http://example.com/path/to/page',
           meta: {
             charset: 'utf-8',
             name: {
               keywords: 'react,meta,document,html,tags'
             }
           }
         };

        var ss=  React.createElement(DocumentMeta, React.__spread({},  metaData));

        return (
          React.createElement("html", null, 
                          React.createElement("head", null, 
                              React.createElement("meta", {charSet: "utf-8"}), 
                              React.createElement("title", null, "战不解释")
                          ), 
                          React.createElement("body", null, 
                          React.createElement("div", null, 


                                  React.createElement("nav", null, 
                                    React.createElement("a", {href: "/"}, "wow"), " | ", React.createElement("a", {href: "http://card.letus.ws/"}, "卡牌")
                                  ), 

                                  this.props.children


                          )
                          )
                      )

        );
    }
});


module.exports = Component;