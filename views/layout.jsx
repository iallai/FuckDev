var React = require('react');
var  DocumentMeta =require('react-document-meta');
var Component = React.createClass({

    componentDidMount: function () {
        console.log("222")
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
        var oMeta = document.createElement('meta');
        oMeta.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
        return (
            <div>



                    <nav>
                      <a href="/">首页</a> | <a href="/battle">战！</a>
                    </nav>

                    {this.props.children}


            </div>
        );
    }
});


module.exports = Component;
