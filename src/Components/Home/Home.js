import React, { useEffect, useState } from 'react';
import { Form, Row, Spinner } from 'react-bootstrap';
import ViewSearchfood from '../ViewSearchfood/ViewSearchfood'

const Home = () => {
    const [searchFood, setSearchFood] = useState('');
    const [meals, setMeals] = useState([]);
    const searchingFood = event => {
        setSearchFood(event.target.value);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.meals?.length) {
                    setMeals(data.meals)

                }


                console.log(meals);
            })
    }, [searchFood])
    return (
        <div>
            <div className="d-flex justify-content-center p-5">
                <Form.Control onChange={searchingFood} className="w-50" type="email" placeholder="Search your Favourite ♥" />
            </div>
            <div className="container">
                {meals.length === 0 ? <div className="d-flex justify-content-center m-5"><Spinner animation="grow" variant="info" /></div>
                    : <Row xs={1} md={4} className="g-0">
                        {
                            meals.map(meal => <ViewSearchfood key={meal.idMeal} meal={meal}></ViewSearchfood>)

                        }




                    </Row>

                }


            </div>


        </div>
    );
};

export default Home;