import { useState, useEffect } from "react";

const base_api_url = "http://localhost:3003";
const post_endpoint = "/api/v1/posts/";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData(base_api_url + post_endpoint);
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
                <div className="col" key={`post-${post.slug}`}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={base_api_url + post.image}
                      alt=""
                      style={{ height: "240px", objectFit: "cover" }}
                    />
                    <div className="card-title">{post.title}</div>
                    <div className="card-body">{post.content}</div>
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
