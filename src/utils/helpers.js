import axios from 'axios';

/**
 * Using https://rss2json.com API to parse the rss feed to json
 * Sample url GET request: https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss&api_key=cu9juohyy0qdve6w5jxv3ry56gakhlah9c9o7wol&order_dir=desc&count=20
*/

const API_URL = "https://api.rss2json.com/v1/api.json";
const API_KEY = "cu9juohyy0qdve6w5jxv3ry56gakhlah9c9o7wol";

const DEFAULT_ORDER = "desc";
const DEFAULT_RSS_URL = "http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444";

function getRSSFeed(rss_url = DEFAULT_RSS_URL, count = 20) {
  return axios.get(API_URL, {
    responseType: 'json',
    params: {
      count,
      rss_url,
      api_key: API_KEY,
      order_dir: DEFAULT_ORDER,
    }
  });
}

var helpers = {
  getRSSFeed: getRSSFeed
};

export default helpers;
