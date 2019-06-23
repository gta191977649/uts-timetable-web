
import axios from 'axios'
import querystring from 'querystring'
const proxy = 'https://cors-anywhere.herokuapp.com/'
const restURI = `${proxy}https://mytimetable.uts.edu.au/aplus2019/rest/timetable/subjects`;
function searchSubject (subjectCode) {
    const requestBody = {
        'search-term': subjectCode
    }
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return axios.post(restURI,querystring.stringify(requestBody),config)
}
export default {searchSubject}