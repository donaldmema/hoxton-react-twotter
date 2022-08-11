import { GoComment } from "react-icons/Go";
import {
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineUpload,
} from "react-icons/Ai";
import { TweetItem } from "../types";

type Props = {
  tweet: TweetItem;
};

export function TweetCard({ tweet }: Props) {
  return (
    <div className="tweet-card">
      <div className="card-img">
        <img
          className="profile-pic"
          src={tweet.username}
          alt="profile picture"
        />
      </div>

      <div className="card-content">
        <h4>{tweet.username}</h4>
        <p>{tweet.content}</p>
        {/* TODO: put a ternary to check if content of tweet includes img and if so post an img along with the rest of the tweet*/}

        <div className="tweet-stats">
          <div className="tweet-stat reply">
            <GoComment className="tweet-stat-icon" />
            <span>{tweet.replies}</span>
          </div>
          <div className="tweet-stat retweet">
            <AiOutlineRetweet className="tweet-stat-icon" />
            <span>{tweet.retweets}</span>
          </div>
          <div className="tweet-stat like">
            <AiOutlineHeart className="tweet-stat-icon" />
            <span>{tweet.likes}</span>
          </div>
          <div className="tweet-stat share">
            <AiOutlineUpload className="tweet-stat-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
