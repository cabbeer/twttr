$(document).ready(function () {
  //escape helper-function
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const fetchtweets = function () {
    $.ajax({
      url: "/tweets",
      type: "GET",
    })
      .then((response) => {
        loadTweets(response);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  fetchtweets();

  const tweetTemplate = function (obj) {
    const $tweet = `
      <article class="tweet-post">
        <header>
          <a>
            <img src=${obj.user.avatars}/>          
          </a>
          <a>${escape(obj.user.name)}</a>
          <a>${escape(obj.user.handle)}</a>
        </header>
        <section class="tweet-post-main">
             ${escape(obj.content.text)}
        </section>

        <footer>
          <time id="time">${timeago.format(obj.created_at)}</time>
          <a><i class="fa-solid fa-flag"></i></a>
          <a><i class="fa-solid fa-retweet"></i></a>
          <a><i class="fa-regular fa-heart"></i></a>
        </footer>
      </article>  
    `;
    return $tweet;
  };

  const loadTweets = function (tweets) {
    $(".load-tweets").empty();
    for (let post of tweets) {
      const $tweet = tweetTemplate(post);
      $(".load-tweets").prepend($tweet);
    }
  };

  $(".tweet-box form").on("submit", function (e) {
    e.preventDefault();
    const $newTweetText = $(this).find("#nt-input").val();
    $("#err-undefined").slideUp();
    $("#err-exceed").slideUp();

    //Garurds leading to successful tweet
    if ($newTweetText.length < 1) {
      $("#err-undefined").slideDown();
    } else if ($newTweetText.length > 140) {
      $("#err-exceed").slideDown();
    } else {
      const $formData = $(this).serialize();

      $.ajax({
        url: "/tweets",
        type: "POST",
        data: $formData,
      })
        .then(() => {
          $(this).children("#nt-input").val("");
          $(this).find(".counter").html("140");
          fetchtweets();
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
  });
});
