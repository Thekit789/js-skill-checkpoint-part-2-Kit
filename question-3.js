// เริ่มเขียนโค้ดตรงนี้

const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

const dataJson = (response) => {
  return response.json();
};

const displayFillterData = (data) => {
  const result = data
    .map((names) => names.name)
    .filter((names) => names.length > 17);
  console.log(result);
};

getData().then(dataJson).then(displayFillterData);
