import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Catagori from '../Catagori/Catagori';

const Mealbd = () => {
    const [catagory, setCatagory] = useState([])
    useEffect(() => {

        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => {
                setCatagory(data.categories);

            })

    }, [])


    return (
        <div>
            <div className="container">
                {catagory.length === 0 ? <div className="d-flex justify-content-center m-5"><Spinner animation="grow" variant="info" /></div>
                    :
                    <Row xs={1} md={2} className="g-0">

                        {
                            catagory.map(cata => <Catagori
                                key={cata.idCategory} cata={cata}></Catagori>)
                        }




                    </Row>
                }
            </div>


        </div >
    );
};

export default Mealbd;