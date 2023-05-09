fetch("http://localhost:4001/posts/", {
  method: "POST",
  body: JSON.stringify({
    id: 2,
    title: "eli",
    author: "emilia",
  }),
  headers: {
    "Content-type": "application/json",
  },
}).then((res) => console.log(res));

fetch("http://localhost:4001/posts/2", {
  method: "DELETE",
}).then((res) => console.log(res));

fetch("http://localhost:4001/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    title: "elinge",
    author: "elinge",
    TDA: "true",
  }),
  headers: {
    "Content-type": "application/json",
  },
}).then((res) => console.log(res));
