var React = require('react');
var Layout = require('./layout.jsx');

var FriendsList = React.createClass({


    render: function () {
        var usersList = this.props.users.map(function (item) {
            var online='离线';
            if(item.online==1){
                online='在线'

            }
            return (
                <ul>
                    <li>  {item.name}[种族{item.race}][等级{item.level}][wow][{online}]    <a href="#">chat</a> <a href="#">voice</a> <a href="#">上线push</a></li>
                </ul>

            );
        });
        return (
          <div>在线好友列表
          
              {usersList}
          </div>

        );
    }
});
var Component = React.createClass({
    render: function () {

        return (
            <Layout title="战！">
                <h1>WOW</h1>

                {this.props.children}
                <hr />
                <FriendsList users={this.props.users}></FriendsList>
            </Layout>
        );
    }
});


module.exports = Component;
