import axios from "axios";

export default axios.create({
	baseURL: "https://secret-stream-98081.herokuapp.com"
	// baseURL: "http://localhost:3000"
});
