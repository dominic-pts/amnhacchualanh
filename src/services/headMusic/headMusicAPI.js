import BaseAPI from '../baseAPI';
import { v4 as uuidv4 } from 'uuid';

const API_ENDPOINT = "/head-musics?populate=*";

class HeadMusicAPI extends BaseAPI {
  async getHeadMusicAudio() {
    try {
      const response = await this.get(API_ENDPOINT);
      const transformedData = response.data.map(item => ({
        name: item.attributes.name || 'Unknown Title',
        cover: item.attributes.cover?.data[0]?.attributes?.url || 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
        artist: item.attributes.artist || 'Unknown Artist',
        audio:   item.attributes.audio?.data[0]?.attributes?.url ||'https://mp3.chillhop.com/serve.php/?mp3=10075',
        color: item.attributes.color || ['#205950', '#2ab3bf'],
        id: uuidv4(),
        active: item.attributes.active !== undefined ? item.attributes.active : true,
      }));
      return transformedData;
    } catch (error) {
      console.error("Error fetching sections:", error);
      throw error;
    }
  }
}

export default HeadMusicAPI;
