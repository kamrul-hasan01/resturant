import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Catagori = (props) => {
    const history = useHistory();
    const viewDetails = () => {

        history.push(`/catagori/${strCategory}`)
    }

    const { strCategory, strCategoryThumb, strCategoryDescription } = props.cata;


    return (
        <Col className="col-md-3 p-2">
            <Card className="shadow-lg rounded">
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        {strCategoryDescription.slice(0, 35)}...
                    </Card.Text>

                    <Button className="text-white" variant="info" onClick={viewDetails}>View List</Button>

                </Card.Body>
            </Card>
        </Col >
    );
};

export default Catagori;