var React = require('react');
var  DocumentMeta =require('react-document-meta');
var Component = React.createClass({

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

        var ss=  <DocumentMeta {...metaData} />;

        return (
          <html>
                          <head>
                              <meta charSet="utf-8"/>

                              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                              <title>战不解释</title>
                            
                          </head>
                          <body>
                          <div>


                                  <nav>
                                    <a href="/">wow</a> | <a href="http://card.letus.ws/">卡牌</a>
                                  </nav>

                                  {this.props.children}


                          </div>
                          </body>
                      </html>

        );
    }
});


module.exports = Component;
