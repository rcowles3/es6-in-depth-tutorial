import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <a
                                key={index}
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img
                                    className="book-img"
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : ''}
                                    alt="book image"
                                />
                                <h4 className="book-text">
                                    {title}
                                </h4>
                            </a>
                        )
                    })

                }
            </div>
        )
    }
}

export default Gallery;