var React = require('react');
var Layout = require('./battle.jsx');
var Article=React.createClass({
    render: function () {

        return (
            <article>
                <h3>      <i>{this.props.author}</i> {this.props.name}       </h3>

            </article>
        );
    }
});
var ArticleList=React.createClass({
    render: function () {
      var articleList = this.props.data.map(function (item) {
            return (
              <Article author={item.author} name={item.name}>

              </Article>

            );
          });

        return (
            <section>
                {articleList}

            </section>
        );
    }
});
var Component = React.createClass({
    render: function () {
      var data = [
        {author: "iallai", name: "文章1"},
        {author: "shadiao", name: "文章2"}
      ];
        return (
            <Layout>
                <h1>WoW</h1>
                <ArticleList data={data}></ArticleList>
            </Layout>
        );
    }
});


module.exports = Component;
