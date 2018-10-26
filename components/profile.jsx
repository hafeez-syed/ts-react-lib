import * as React from 'react';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row profile">
                <div className="col-md-3">
                    <div className="card">
                        <img src="/components/img/nobody_f.original.jpg" alt="John" />
                            <h1>John Doe</h1>
                            <p className="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </div>
                            <p>
                                <button>Contact</button>
                            </p>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                        Some user related content goes here...
                    </div>
                </div>
            </div>
        )
    }
}