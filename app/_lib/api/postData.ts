export async function post(url: string, payload: object) {
  fetch(
    'https://jsonplaceholder.typicode.com' + url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  ).then(res => console.log(res))
}
