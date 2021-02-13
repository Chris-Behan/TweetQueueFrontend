
async function login() {
  try {

    const response = await fetch('https://TweetQueueBackend.behan.repl.co/tweet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        hello: 'world',
        goodbye: 'dreams'
      })
    })
    const data = await response.text()
    console.log(data);
  } catch (err) {
    console.log('error ocurred!')
    console.log(err)
  }

}