var React = require('react');
var Layout = require('./layout.jsx');

var FriendsList = React.createClass({
    render: function () {

        return (
          <div>在线好友列表1
<select>
<option>所有</option>
<option>wow</option>
<option>dota</option>


</select>
    <ul>
    <li>  iallai [wow][在线]    <a href="#">chat</a> <a href="#">voice</a> <a href="#">上线push</a></li>
    </ul>
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
                <FriendsList></FriendsList>
            </Layout>
        );
    }
});


module.exports = Component;
