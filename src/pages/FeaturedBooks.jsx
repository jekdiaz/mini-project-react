import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=best-books&orderBy=newest&maxResults=24&key=AIzaSyDE2MnXJyfh-Ncs8nWDI262F82lHuQZQk4"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [FeaturedBooks]);

  return (
    <>
      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">
          <h2>BEST BOOKS</h2>

          <div className="row mt-3">
            {books.map((book) => (
              <div className="book col-lg-2 text-center">
                <div className="mb-3">
                  <div className="featured-book-img p-1">
                    <div className="inner-block p-1">
                      <img
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={`${book.volumeInfo.title} Book Cover`}
                        
                        title={book.volumeInfo.title}
                        height={"310px"}
                        width={"100%"}
                        onClick={()=>navigate(`/bookdetails/${book.id}`)}
                      />
                    </div>
                  </div>

                  {/* <div className="text-white featued-book-text text-uppercase">
                    <h5 className="">{book.volumeInfo.title}</h5>
                    <h5> Author: {book.volumeInfo.authors}</h5>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedBooks;
