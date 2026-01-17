import api from "./api";

export const ReviewAPI = {
  // GET /api/reviews
  list() {
    return api.get("/api/reviews");
  },

  // POST /api/reviews
  create(payload) {
    return api.post("/api/reviews", payload);
  },
};
