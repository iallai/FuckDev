

var React = require('react');
var  DocumentMeta =require('react-document-meta');
var Component = React.createClass({
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

        var ss=  <DocumentMeta {...metaData} />
        console.log(ss);
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
