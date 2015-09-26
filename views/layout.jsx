

var React = require('react');


var Component = React.createClass({
    render: function () {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>

                    <nav>
                      <a href="/">首页</a> | <a href="/battle">战！</a>
                    </nav>
  <hr />
                    {this.props.children}

                </body>
            </html>
        );
    }
});


module.exports = Component;
