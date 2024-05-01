import BaseAPI from '../baseAPI';

const API_ENDPOINT = "/head-musics?populate=*";

class HeadMusicAPI extends BaseAPI {
    async getHeadMusicAudio() {
        try {
          const response = await this.get(API_ENDPOINT);
          return response; 
        } catch (error) {
          console.error("Error fetching sections:", error);
          throw error;
        }
      }
};

export default HeadMusicAPI;


