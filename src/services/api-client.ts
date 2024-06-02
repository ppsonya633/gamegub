
import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'54115a304771480eb4f0a5162ac3c06f'
    }
})