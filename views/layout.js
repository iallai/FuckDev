

var Component = React.createClass({displayName: "Component",
    render: function () {

        return (
            React.createElement("html", null, 
                React.createElement("head", null, 
                    React.createElement("title", null, this.props.title)
                ), 
                React.createElement("body", null, 

                    React.createElement("nav", null, 
                      React.createElement("a", {href: "/"}, "首页"), " | ", React.createElement("a", {href: "/battle"}, "战！")
                    ), 
  React.createElement("hr", null), 
                    this.props.children

                )
            )
        );
    }
});


module.exports = Component;