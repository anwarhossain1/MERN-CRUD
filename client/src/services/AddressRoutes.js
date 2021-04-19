import http from '../http.js';
class TutorialDataService {
    getAll() {
      return http.get("/");
    }
  
    get(id) {
      console.log(id)
      return http.get(`/tutorials/${id}`);
    }
  
    create(data) {
      return http.post("/", data);
    }
  
    update(id, data) {
      return http.put(`/tutorials/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/`);
    }
  
    findByTitle(title) {
      return http.get(`/tutorials?title=${title}`);
    }
  }
  
  export default new TutorialDataService();