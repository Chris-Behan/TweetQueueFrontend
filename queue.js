const urlParams = new URLSearchParams(window.location.search);
// Extract oauth credentials from url parameters if redirected from twitter login
const oauthToken = urlParams.get('oauth_token');
const oauthVerifier = urlParams.get('oauth_verifier');
const test1 = urlParams.get('nonexists')
if (oauthToken && oauthVerifier) {
    const user = getUserInfoandSetCredentials(oauthToken, oauthVerifier);
    console.log(user);
} else {
    // Load user info attempt to load user info from local storage
    localStorage.getItem('user')
}

/**
 * Query for user info and credentials.
 * user info will be returned in body of request,
 * credentials will be set as an http-only cookie.
 */
async function getUserInfoandSetCredentials(oauthToken, oauthVerifier) {
    try {
        data = {
            oauth_verifier: oauthVerifier,
            oauth_token: oauthToken
        }
        const response = await fetch('https://TweetQueueBackend.behan.repl.co/getUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        const user = await response.json();
        console.log(`User info retrieved: ${user}`)
        return user
    } catch (e) {
        console.log(`Error sending POST to /getUser: ${e}`)
    }
}

async function test() {
    try {
        data = { 'text': 'hello world' }
        const response = await fetch('https://TweetQueueBackend.behan.repl.co/tweet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'same-origin'

        })
        const user = await response.text();
        console.log(user);
    } catch (err) {
        console.log('error ocurred!')
        console.log(err)
    }
}

async function addTweet() {
    try {
        data = { 'text': 'hello world' }
        const response = await fetch('https://TweetQueueBackend.behan.repl.co/tweets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'

        })
        const user = await response.text();
        console.log(user);
    } catch (err) {
        console.log('error ocurred!')
        console.log(err)
    }
}
