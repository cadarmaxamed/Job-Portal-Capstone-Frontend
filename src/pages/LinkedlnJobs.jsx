import axios from "axios";

const linkedinJobs = {
  method: 'GET',
  url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '8b0aa17787mshdffc7c486f1fc2cp1d39d4jsn6e5047e57bbd',
    'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
  },
  data: {
    title: 'Software Engineer',
    location: 'Berlin',
    rows: 100
  }
};

try {
	const response = await axios.request(linkedinJobs);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
export default linkedinJobs;
