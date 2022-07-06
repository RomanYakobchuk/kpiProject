import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  users:`${API}users`,
  auth:`${API}auth/login`,
  allUsers:`${API}users/allUsers`,
  search: `${API}users?email=`
}
