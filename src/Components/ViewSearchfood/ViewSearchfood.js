
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ViewSearchfood = (props) => {
    const history = useHistory();
    const foodDetails = () => {

        history.push(`/fooddetails/${strMeal}`)
    }

    const { strMeal, strInstructions, strMealThumb, } = props.meal;


    return (
        <Col>
            <Card className="p-3 m-2">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 40)}
                    </Card.Text>
                </Card.Body>
                <Button className="text-white" variant="info" onClick={foodDetails}>View Details</Button>
            </Card>
        </Col>

    );
};

export default ViewSearchfood;