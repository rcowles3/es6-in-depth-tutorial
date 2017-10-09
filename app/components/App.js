import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }

        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }
    
    onChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit() {
        this.search();
    }

    search() {
        console.log("search", this.state.query);
        const searchQuery = this.state.query;
        const queryURL = 'https://www.googleapis.com/books/v1/volumes?q=';

        fetch(`${queryURL}${searchQuery}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => {
                let { items } = json;
                this.setState({ items })
                console.log(items);
            });
    }

    keyPress(event) {    
        if (event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <div className="Global">
                <h2>Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for a book"
                            onChange={this.onChange}
                            onKeyPress={this.keyPress}
                        />
                        <InputGroup.Addon
                            onClick={this.handleSubmit}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items}/>
            </div>
        )
    }
}

export default App;