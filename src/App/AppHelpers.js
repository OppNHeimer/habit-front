export function returnAuthHeader () {
  return { headers: { 'Authorization': 'bearer ' + localStorage.getItem('jwt') } }
}
