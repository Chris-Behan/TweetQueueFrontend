async function login() {
  try {
    // Query login endpoint to get twitter login link
    const response = await fetch('https://TweetQueueBackend.behan.repl.co/login', {
      method: 'GET',
    })
    const twitterLoginLink = await response.text()
    // Open twitter login link
    // Login link will redirect to home page on successful login
    window.location.replace(twitterLoginLink);
  } catch (err) {
    console.log('error ocurred!')
    console.log(err)
  }
}

function loadIndex() {
  window.location = "index.html"
}