const urlParam = new URLSearchParams(window.location.search);
const greeting = urlParam.get("greeting");
console.log(greeting);