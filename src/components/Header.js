import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h5 className="display-3">Project quản lý thành viên bằng React Js</h5>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Header;