import http from "../http-common";
const getAll = () => {
  return http.get("/viewAllCustomers");
};

const create = data => {
  return http.post("/addCustomers", data);
};
const update = (id, data) => {
  return http.put(`/updateCustomers/${id}`, data);
};
const remove = id => {
  return http.delete(`/deleteCustomers/${id}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const customerService = {
  getAll,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default customerService;