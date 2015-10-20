var Layout = require('./battle.jsx');
var Article=React.createClass({displayName: "Article",
    render: function () {

        return (
            React.createElement("article", null, 
                React.createElement("h3", null, "      ", React.createElement("i", null, this.props.author), " ", this.props.name, "       ")

            )
        );
    }
});
var ArticleList=React.createClass({displayName: "ArticleList",
    render: function () {
      var articleList = this.props.data.map(function (item) {
            return (
              React.createElement(Article, {author: item.author, name: item.name}

              )

            );
          });

        return (
            React.createElement("section", null, 
                articleList

            )
        );
    }
});
var Component = React.createClass({displayName: "Component",
    render: function () {
      var data = [
        {author: "iallai", name: "文章1"},
        {author: "shadiao", name: "文章2"}
      ];
      
        return (
            React.createElement(Layout, null, 
                React.createElement("h1", null, "WoW"), 
                React.createElement(ArticleList, {data: data})

            )
        );
    }
});


module.exports = Component;