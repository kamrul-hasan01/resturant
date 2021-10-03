import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SelectedFoodList = (props) => {
    const history = useHistory();
    const foodDetails = () => {

        history.push(`/fooddetails/${strMeal}`)
    }
    console.log(props.sFood)
    const { strMeal, strMealThumb } = props.sFood;
    return (
        <Col className="col-md-3 p-2">
            <Card className="shadow-lg rounded">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal.slice(0, 16)} ... </Card.Title>

                    <Button className="text-white" variant="info" onClick={foodDetails}>View Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SelectedFoodList;