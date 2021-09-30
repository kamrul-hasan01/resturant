import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import SelectedFoodList from '../SelectedFoodList/SelectedFoodList';

const SelectedCatagory = () => {
    const { cataName } = useParams();
    const [selectedCatagoryFood, setSelectedCatagoryFood] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cataName}`

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setSelectedCatagoryFood(data.meals);

            })

    }, [])
    return (
        <div className="container">
            {
                selectedCatagoryFood.length === 0 ? <div className="d-flex justify-content-center m-5"><Spinner animation="grow" variant="info" /></div>
                    : <Row xs={1} md={2} className="g-0">
                        {
                            selectedCatagoryFood.map(sFood => <SelectedFoodList
                                key={sFood.idMeal} sFood={sFood}></SelectedFoodList>)

                        }




                    </Row>
            }

        </div>
    );
};

export default SelectedCatagory;