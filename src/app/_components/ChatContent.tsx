export type Author = 'User' | 'AI';
export type ChatItem = {
  content?: string;
};
type Props = {
  chatItems: ChatItem[];
};
export const ChatContent = ({ chatItems }: Props) => {
  return (
    <div>
      {chatItems.map((chat, index) => {
        return <div key={index}>{chat.content}</div>;
      })}
    </div>
  );
};
