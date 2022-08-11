export function NewTweetForm() {
  return (
    <section className="tweet-form">
      <form className="new-tweet-form">
        <div className="form-group">
          <img
            className="profile-pic"
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile pic"
          />
          <textarea name="newtweet" placeholder="What's happening?"></textarea>
        </div>
        <button className="tweet-btn">Tweet</button>
      </form>
    </section>
  );
}
