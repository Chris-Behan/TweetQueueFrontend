const urlParams = new URLSearchParams(window.location.search);
const oauthToken = urlParams.get('oauth_token');
const oauthVerifier = urlParams.get('oauth_verifier');

async function getUser() {
  try {
    data = { oauth_verifier: oauthVerifier,
            oauth_token: oauthToken }
    const response = await fetch('https://TweetQueueBackend.behan.repl.co/getUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      
    })
    const user = await response.json();
    console.log(user);
  } catch (err) {
    console.log('error ocurred!')
    console.log(err)
  }
}
getUser();

function test(){
  alert('test!')
}