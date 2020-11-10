import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Feeds</CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="far fa-bell"></i></div> New schedule booking on Calender. <span className="ml-auto font-12 text-muted">Just Now</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-success"><i className="ti-server"></i></div> New Contact message received!<span className="ml-auto font-12 text-muted">2 Hours ago</span>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
