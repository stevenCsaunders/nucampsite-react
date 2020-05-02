import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        return (
            <div className="col-md-5 and m-1">
                <Card>
                    <CardImg src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <div>{comment.text}</div>
                                <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</div>
                                <br />
                            </div>
                        );
                    })}
                </div>
            );
        }
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>Contact Us</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.comments)}
                    </div>
                </div>
            )
        } else {
            return (
                <div>

                </div>
            );
        }
    }
}

export default CampsiteInfo;