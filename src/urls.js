export const API_URL = 'http://localhost:3003/'
export const AUTH_HEADER = {
  headers: { 'Authorization': 'bearer ' + localStorage.getItem('jwt') }
}
