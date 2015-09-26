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
                    <li>  {item.name} [wow][{online}]    <a href="#">chat</a> <a href="#">voice</a> <a href="#">上线push</a></li>
                </ul>

            );
        });
        return (
          <div>在线好友列表1
<select>
<option>所有</option>
<option>wow</option>
<option>dota</option>


</select>
              {usersList}
          </div>

        );
    }
});
var Component = React.createClass({
    render: function () {

        return (
            <Layout title="战！">
                <h1>战</h1>
                <nav>
                  <a href="/battle/wow">WOW</a> | <a href="/battle/dota2">DOTA2</a>
                </nav>
                {this.props.children}
                <hr />
                <FriendsList users={this.props.users}></FriendsList>
            </Layout>
        );
    }
});


module.exports = Component;
