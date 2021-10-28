const enviromentUrls = new Map();

enviromentUrls.set("localhost","http://localhost:8080");
enviromentUrls.set("algo-book-client","http://algo-book-client.herokuapp.com");

export default enviromentUrls.get(window.location.hostname);