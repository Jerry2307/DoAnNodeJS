async function getAll() {
  fetch("http://127.0.0.1:3000/api/v1/sanpham/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
    }
  })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log((data));
    });
}
getAll();
