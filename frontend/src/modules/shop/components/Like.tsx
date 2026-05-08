import { useAccountActions } from "../hooks/useAccountAction";

export const LikeButton = ({ account }: any) => {
  const { handleLike, handleUnlike } = useAccountActions();
  const userId = "user1";

  const isLiked = account.likes?.includes(userId);

  const handleToggle = async () => {
    if (isLiked) {
      await handleUnlike(account._id, userId);
    } else {
      await handleLike(account._id, userId);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition active:scale-95 ${
        isLiked
          ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
          : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
      }`}
    >
      {isLiked ? "❤️" : "🤍"} {account.likes?.length || 0}
    </button>
  );
};
