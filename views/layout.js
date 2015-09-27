var  DocumentMeta =require('react-document-meta');

var Component = React.createClass({displayName: "Component",
    render: function () {
      const metaData = {
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
        return (
            React.createElement("html", null, 
                React.createElement(DocumentMeta, React.__spread({},  metaData)), 
                React.createElement("body", null, 

                    React.createElement("nav", null, 
                      React.createElement("a", {href: "/"}, "首页"), " | ", React.createElement("a", {href: "/battle"}, "战！")
                    ), 
  React.createElement("hr", null), 
                    this.props.children

                )
            )
        );
    }
});


module.exports = Component;