export function NewTweetForm() {
  return (
    <section className="tweet-form">
      <form className="new-tweet-form">
        <div>
          <img
            className="profile-pic"
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile pic"
          />
          <textarea name="newtweet"></textarea>
        </div>
      </form>
    </section>
  );
}
