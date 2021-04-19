import React, { useState } from 'react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css';

const Header = (props) => {
    const [ searchInput, setSearchInput ] = useState();

    const onEnter = (event) => {
        if (event.key === 'Enter') {
            console.log(event.target.value);
            props.inputHandler(searchInput);
        }
    };

    const ButtonClicked = (event) => {
        props.inputHandler(searchInput);
    };

    const onChangeHandler = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <div>
            <Navbar className="row">
                <Navbar.Brand><b className="title-bold">Open, High, Low & Open Dashboard</b></Navbar.Brand>
                <Form inline className="border-left ml-auto">
                    <FormControl    type = "text"
                                    className="input-field"
                                    placeholder = "Enter Ticker Symbol"
                                    onChange = { onChangeHandler }
                                    onKeyDown = { onEnter }
                    />
                    <Button className="ui blue button" onClick={ ButtonClicked }>Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;