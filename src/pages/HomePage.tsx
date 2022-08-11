import { NewTweetForm } from "../components/NewTweetForm";
import { TweetCard } from "../components/TweetCard";

export function HomePage() {
  return (
    <section className="home-page">
      <NewTweetForm />
      <TweetCard
        tweet={{
          id: "2",
          username: "@johndoe",
          img: "https://images.pexels.com/photos/1590483/pexels-photo-1590483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content:
            "Moved to the city after I was born. I got an English medium education (first person in my family to do so), didn't have to work as a kid to support the family, and had a loving 2 parent family.",
          replies: 5,
          retweets: 3,
          likes: 420,
        }}
      />
    </section>
  );
}
