import React from "react";
import authors from "./data"

function App() {
  const authorList = authors.map(author => { return (
              <>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="card">
                <div class="image">
                  <img class="card-img-top img-fluid" src={author.imageUrl} alt="J.K. Rowling"/>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <span>{author.first_name} {author.last_name}</span>
                  </h5>
                  <small class="card-text">{author.books.length} books</small>
                </div>
              </div>
            </div>
                </>
  );
  });
  return (
  <div> 
        <div className="row">
      <div className="col-2">
        <div id="sidebar">
          <img src="theindex.svg" className="logo" alt="the index logo"/>
          <section>
            <h4 className="menu-item active">
              <button>AUTHORS</button>
            </h4>
          </section>
        </div>
      </div>
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">
            {authorList}
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default App;
