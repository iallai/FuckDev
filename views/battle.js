var Layout = require('./layout.jsx');

var FriendsList = React.createClass({displayName: "FriendsList",
    render: function () {

        return (
          React.createElement("div", null, "在线好友列表", 
React.createElement("select", null, 
React.createElement("option", null, "所有"), 
React.createElement("option", null, "wow"), 
React.createElement("option", null, "dota")


), 
    React.createElement("ul", null, 
    React.createElement("li", null, "  iallai [wow][在线]    ", React.createElement("a", {href: "#"}, "chat"), " ", React.createElement("a", {href: "#"}, "voice"), " ", React.createElement("a", {href: "#"}, "上线push"))
    )
          )

        );
    }
});
var Component = React.createClass({displayName: "Component",
    render: function () {

        return (
            React.createElement(Layout, {title: "战！"}, 
                React.createElement("h1", null, "战"), 
                React.createElement("nav", null, 
                  React.createElement("a", {href: "/battle/wow"}, "WOW"), " | ", React.createElement("a", {href: "/battle/dota2"}, "DOTA2")
                ), 
                this.props.children, 
                React.createElement("hr", null), 
                "\b", React.createElement(FriendsList, null)
            )
        );
    }
});


module.exports = Component;