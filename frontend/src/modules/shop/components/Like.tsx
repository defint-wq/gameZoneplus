import { useState } from "react";
import { toggleLike } from "../../../../../backend/services/accountService";

export const LikeButton = ({ account }: any) => {
  const [likes, setLikes] = useState(account.likes || []);
  const userId = "user1";

  const handleLike = async () => {
    const updated = await toggleLike(account.id, userId);
    setLikes(updated.likes);
  };

  return (
    <button onClick={handleLike}>
      ❤️ {likes.length}
    </button>
  );
};