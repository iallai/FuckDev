var Layout = require('./layout.jsx');

var FriendsList = React.createClass({displayName: "FriendsList",


    render: function () {
        var usersList = this.props.users.map(function (item) {
            var online='离线';
            if(item.online==1){
                online='在线'

            }
            var klass=item.class;
            if(item.class=='8'){
                  klass='法爷'

            }else if(item.class=='7'){

              klass='萨大爷'
            }else if(item.class=='6'){

              klass='DK'
            }
            else if(item.class=='5'){

                klass='MS'
            }
            else if(item.class=='9'){

                klass='SS'
            }
            else if(item.class=='11'){

                klass='XD'
            }
            else if(item.class=='4'){

                klass='DZ'
            }
            else if(item.class=='3'){

                klass='LR'
            }

            else if(item.class=='2'){

                klass='QS'
            }
            else if(item.class=='1'){

                klass='ZS'
            }
            var race=item.race;
            if(item.race=='5'){
                  race='亡灵'

            }else if(item.race=='8'){
                  race='巨魔'

            }
            else if(item.race=='10'){
                  race='血精灵'

            }
            else if(item.race=='6'){
                  race='NTR'

            }
            else if(item.race=='2'){
                race='兽人'

            }
            return (
                React.createElement("ul", null, 
                    React.createElement("li", null, " #", item.account, " ", item.name, "[等级", item.level, "] [职业:", klass, "] [种族:", race, "]  ", React.createElement("a", {href: "#"}, "chat"), " ", React.createElement("a", {href: "#"}, "voice"), " ", React.createElement("a", {href: "#"}, "上线push"))
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