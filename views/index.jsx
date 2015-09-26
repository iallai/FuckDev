var React = require('react');
var Layout = require('./layout.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout title="首页">
                <h1>首页</h1>
            </Layout>
        );
    }
});


module.exports = Component;
