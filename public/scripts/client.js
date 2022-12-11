/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




async function fetchTweetsJSON() {
  const response = await fetch("http://localhost:8080/tweets");
  const tweets = await response.json();
  return tweets;
}


fetchTweetsJSON()
.then((tweets) => {
  
  console.log(tweets)

  const tweetHTML = tweets.map(
    (tweets) => `
      <article class="tweet-post">
        <header>
          <a>avatar</a>
          <a>${tweets.user.name}</a>
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
  .join('');

console.log(tweetHTML)

 


});


// const renderTweets = function(tweets) {
//   // loops through tweets
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container

// }

// const createTweetElement = function(tweet) {



//       <article class="tweet-post"> 
//         <header>
//           <a>avatar</a>
//           <a>@Name</a>
//           <a>@handle</a>
//         </header>
//         <section class="tweet-post-main">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//           faucibus ut mauris in aliquam. Nulla non nunc sagittis, feugiat
//           ligula.
//         </section>

//         <footer>
//           <time>time of tweet</time>
//           <a>
//             <i class="fa-solid fa-flag"></i>
//           </a>
//           <a>
//             <i class="fa-solid fa-retweet"></i>
//           </a>
//           <a>
//             <i class="fa-regular fa-heart"></i>
//           </a>
//         </footer>
//       </article>;


//   // ...
//   return tweet;
// }

// console.log(renderTweets(data));


