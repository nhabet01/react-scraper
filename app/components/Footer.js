var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <h5>
                         <i className="fa fa-newspaper-o" aria-hidden ="true"></i> 
                         <a href="https://nytimes.com/">The New York Times </a> 
                    </h5>
                     <h4>
                    <small>: <a href="https://github.com/nhabet01">    Nahir Habet</a>.</small>
                    </h4>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;