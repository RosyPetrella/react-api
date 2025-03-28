import { useState, useEffect } from "react";

const api_url = "http://localhost:3003/api/v1/posts";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData(api_url);
  }, []);

  function fetchData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }
  return (
    <>
      <h1>Hello</h1>
      <main>
        <section className="pizzas">
          <div className="container">
            <div className="row">
              {posts.map((post) => (
                <div className="col">
                  <div className="card">
                    <div className="card-body">{post.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
