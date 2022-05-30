import axios from "axios";

export default axios.create({
  baseURL: 'http://fenrir-wizeline.herokuapp.com'
});