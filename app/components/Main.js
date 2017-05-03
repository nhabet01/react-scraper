var React = require('react');

var Nav = require('./Nav');
var Footer = require('./Footer');

var Main = React.createClass({
    render: function () {
        return(
            <div className="main-main-container">
                <Nav />
                <div className="jumbotron">
                    <h2 className="text-center">(ReactJS) New York Times Article Scrubber
                    </h2>
                    <h4 className="text-center">Search for and save articles of interest.
                    </h4>

                </div>

                <div className="main-container">
                    {this.props.children}
                </div>
                <Footer />
            </div>

        )
    }
});

module.exports = Main;