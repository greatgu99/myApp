import axios from "axios";
import { BASE_URL } from "./pathMap";
const instance = axios.create({
  baseURL:BASE_URL
})

export default {
  get:instance.get,
  post:instance.post
}