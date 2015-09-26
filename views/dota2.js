var Layout = require('./battle.jsx');


var Component = React.createClass({displayName: "Component",
    render: function () {

        return (
            React.createElement(Layout, null, 
                React.createElement("h1", null, "Dota2")
            )
        );
    }
});


module.exports = Component;