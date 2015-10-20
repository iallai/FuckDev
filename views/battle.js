var Layout = require('./layout.jsx');

var FriendsList = React.createClass({displayName: "FriendsList",


    render: function () {
        var usersList = this.props.users.map(function (item) {
            var online='离线';
            if(item.online==1){
                online='在线'

            }
            return (
                React.createElement("ul", null, 
                    React.createElement("li", null, "  ", item.name, "[种族", item.race, "][等级", item.level, "][wow][", online, "]    ", React.createElement("a", {href: "#"}, "chat"), " ", React.createElement("a", {href: "#"}, "voice"), " ", React.createElement("a", {href: "#"}, "上线push"))
                )

            );
        });
        return (
          React.createElement("div", null, "在线好友列表", 
          
              usersList
          )

        );
    }
});
var Component = React.createClass({displayName: "Component",
    render: function () {

        return (
            React.createElement(Layout, {title: "战！"}, 
                React.createElement("h1", null, "WOW"), 

                this.props.children, 
                React.createElement("hr", null), 
                "\b", React.createElement(FriendsList, {users: this.props.users})
            )
        );
    }
});


module.exports = Component;