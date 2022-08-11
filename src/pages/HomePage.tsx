import { useEffect, useState } from "react";
import { NewTweetForm } from "../components/NewTweetForm";
import { TweetCard } from "../components/TweetCard";
import { TweetItem } from "../types";

export function HomePage() {
  const [tweets, setTweets] = useState<TweetItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/tweets")
      .then((resp) => resp.json())
      .then((data) => setTweets(data));
  }, []);

  return (
    <section className="home-page">
      <NewTweetForm />
      <ul>
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </ul>
    </section>
  );
}
