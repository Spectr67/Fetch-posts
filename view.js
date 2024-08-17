const startButton = document.querySelector('button')
startButton.onclick = startLoadData

async function startLoadData() {
 await handleStart()
}


function renderContainerAll(listTextDataTop, listTextDataBot) {
  document.querySelector('.container').innerHTML = ''
  let i = 0
  while (i < listTextDataTop.length) {
    renderContainer(listTextDataTop[i], listTextDataBot[i])
    i++
  }
}

function renderContainer(textDataTop, textDataBot) {
  const elContainer = document.querySelector('.container')
  const elDivPost = generateDivPost(textDataTop, textDataBot)
  elContainer.appendChild(elDivPost)
}

function generateDivPost(textDataTop, textDataBot) {
  const elDivPost = document.createElement('div')
  const elDivTop = document.createElement('div')
  const elDivBot = document.createElement('div')
  elDivTop.textContent = textDataTop
  elDivBot.textContent = textDataBot
  elDivPost.appendChild(elDivTop)
  elDivPost.appendChild(elDivBot)
  return elDivPost
}
