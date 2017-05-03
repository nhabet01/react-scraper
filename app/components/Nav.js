var React = require('react');

var Nav = React.createClass({
    render: function() {
        return(
            <nav role="navigation" className="navbar navbar-default">
            {/*-- Brand and toggle get grouped for better mobile display --*/}
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="#" className="navbar-brand">NYT-React</a>
                </div>
    {/*-- Collection of nav links and other content for toggling --*/}
                <div id="navbarCollapse" className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#/search">Search <span className="glyphicon glyphicon-search"/></a></li>
                        <li><a href="#/saved">Saved Articles</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
});


module.exports = Nav;

// var Header = React.createClass({
//     render: function() {
//         return(
//             <div className="page-header" role="navigation">
//                 <div className="container">
//                     <div className="col-xs-12 col-sm-6 title">
//                         <h1><a href="/">React NYTimes</a></h1>
//                     </div>
//                     <div className="col-xs-12 col-sm-6 header-links">
//                         <h4><a href="#/search">Search <span className="glyphicon glyphicon-search"/></a></h4>
//                         <h4><a href="#/saved">Saved <span className="glyphicon glyphicon-bookmark"/></a></h4>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// });