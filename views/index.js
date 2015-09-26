var Layout = require('./layout.jsx');


var Component = React.createClass({displayName: "Component",
    render: function () {

        return (
            React.createElement(Layout, {title: "首页"}, 
                React.createElement("h1", null, "首页")
            )
        );
    }
});


module.exports = Component;