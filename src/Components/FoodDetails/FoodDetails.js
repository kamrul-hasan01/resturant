import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

const FoodDetails = () => {

    const { foodName } = useParams();
    const [foodDetails, setFoodDetails] = useState([])
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } = foodDetails;

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setFoodDetails(data.meals[0]);


            })

    }, [])
    return (
        <div className="container">
            {foodDetails.length === 0 ? <div className="d-flex justify-content-center m-5"><Spinner animation="grow" variant="info" /></div>
                : <Row className="g-0 justify-content-md-center mt-5">
                    <Card className=" col-md-8 border-0">

                        <Row className=" justify-content-md-center">
                            <div className="col-md-4 p-3">
                                <Card.Img style={{ borderRadius: "15px" }} src={strMealThumb} alt="Card image" fluid />

                            </div>
                        </Row>

                        <Card.Body>
                            <Card.Title>{strMeal}</Card.Title>
                            <h6> Area :{strArea} ,Catagory :{strCategory}</h6>

                            <Card.Text>
                                {strInstructions}
                            </Card.Text>

                            <Card.Link href={strYoutube}> <Button variant="info" >Go to Youtube</Button></Card.Link>

                        </Card.Body>

                    </Card>
                </Row>
            }

        </div>
    );
};

export default FoodDetails;