const API_POSTS = 'https://jsonplaceholder.typicode.com/posts'

let posts = []

async function sendRequest(url) {
  const resp = await fetch(url)
  const json = await resp.json()
  return json
}

async function updatePosts() {
  posts = await sendRequest(API_POSTS)
  console.log(posts[0])
}
