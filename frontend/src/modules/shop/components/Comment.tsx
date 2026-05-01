import { useState } from "react";
import { addComment } from "../../../../../backend/services/accountService";

export const CommentBox = ({ account }: any) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState(account.comments || []);
  const userId = "user1";

  const handleSend = async () => {
    if (!text.trim()) return;

    const updated = await addComment(account.id, userId, text);
    setComments(updated.comments);
    setText("");
  };

  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-[#0b1220] p-4 shadow-lg">
      {/* comments */}
      <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
        {comments.length === 0 ? (
          <p className="text-sm text-gray-500">No comments yet...</p>
        ) : (
          comments.map((c: any) => (
            <div
              key={c.id}
              className="rounded-lg bg-[#111a2e] px-3 py-2 text-sm text-gray-200 border border-white/5"
            >
              💬 <span className="text-gray-300">{c.text}</span>
            </div>
          ))
        )}
      </div>

      {/* input */}
      <div className="mt-3 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 rounded-lg bg-[#0f172a] px-3 py-2 text-sm text-white placeholder-gray-500 outline-none border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={handleSend}
          className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90 active:scale-95 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};
