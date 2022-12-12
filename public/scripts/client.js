$(document).ready(function () {
  // --- our code goes here ---



const newTweet = document.querySelector("#tweetBtn");

if (newTweet) {
  newTweet.addEventListener("click", newTweetClick);
}

function newTweetClick(event) {
  event.preventDefault();
  // Add any other code that should be executed when the #tweetBtn element is clicked here.
}


async function fetchTweetsJSON() {
  const response = await fetch("http://localhost:8080/tweets");
  const tweets = await response.json();
  return tweets;
}

// load tweets
fetchTweetsJSON().then((tweets) => {
  console.log(tweets);

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const tweetHTML = tweets
    .map(
      (tweets) => `
      <article class="tweet-post">
        <header>
          <a>avatar</a>
          <a>${escape(tweets.user.name)}</a>
          <a>@handle</a>
        </header>
        <section class="tweet-post-main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus ut mauris in aliquam. Nulla non nunc sagittis, feugiat ligula.
        </section>

        <footer>
          <time>time of tweet</time>
          <a><i class="fa-solid fa-flag"></i></a>
          <a><i class="fa-solid fa-retweet"></i></a>
          <a><i class="fa-regular fa-heart"></i></a>
        </footer>
      </article>    
    `
    )
    .join("");

  const tweetContainer = document.querySelector(".load-tweets");
  tweetContainer.innerHTML += tweetHTML;
});













  
});
