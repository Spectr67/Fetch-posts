const API_TEXT = 'https://jsonplaceholder.typicode.com/posts'
const url = API_TEXT
let textData 
let textDataTop 
let textDataBot 

async function sendRequest(url) {
  const resp = await fetch(url)
  console.log(resp)
  const json = await resp.json()
  return json
}

async function updateTextData() {
  const json = await sendRequest(url)
  textData = json
  textDataTop = updateTextDataTop(textData)
  textDataBot = updateTextDataBot(textData)
  return textData
}

function updateTextDataTop(textData) {
  textDataTop = textData.map(obj => obj.title)
  return textDataTop
}

function updateTextDataBot(textData) {
  textDataBot = textData.map(obj => obj.body)
  return textDataBot
}


