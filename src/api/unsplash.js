import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID eb4a06eb9f76b61bfcaf54a39d56670f1fb1688a692b2330e6d44e51b86edff5'
  }
})