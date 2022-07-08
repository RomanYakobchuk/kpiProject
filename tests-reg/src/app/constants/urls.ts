import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  users:`${API}users`,
  auth:`${API}auth/login`,
  allUsers:`${API}users/allUsers`,
  search: `${API}users?email=`,
  searchRole: `${API}users?role=`,
  delete: `${API}users/`,
  searchByPassNumb: `${API}users?pass_number=`,
  searchByName: `&name=`,
  searchByTax: `&tax_number=`,
  searchOnlyPass: `${API}users?pass_number=`,
  searchOnlyName: `${API}users?name=`,
  searchOnlyAge: `${API}users?age=`,
  update: `${API}users/`
}
