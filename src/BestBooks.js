import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  async componentDidMount() {
    let url = `http://localhost:3001/books`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ books: response.data })
    console.log('this is in state', this.state.books)
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (

          this.state.books.map(book => (
            <>
              <Carousel>
                <Carousel.Item>

                  <Carousel.Caption>
                    {book.title}
                    {book.description}
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </>

          ))) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
