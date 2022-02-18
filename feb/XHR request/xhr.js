const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    if (data) {
      xhr.setRequestHeader("content-type", "application/json");
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("something went wrong");
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    console.log(responseData);
  });
};
const sendData = () => {
  sendHttpRequest("Post", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
