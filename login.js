async function login() {
  try {
    const response = await fetch('https://TweetQueueBackend.behan.repl.co/login', {
      method: 'GET',
    })
    const twitterLoginLink = await response.text()
    window.location.replace(twitterLoginLink);
  } catch (err) {
    console.log('error ocurred!')
    console.log(err)
  }
}

function loadIndex() {
  window.location = "index.html"
}