import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: 1,
      name: "Kusal Kalinga",
      username: "kusalkalinga",
      userImg:
        "https://yt3.ggpht.com/ytc/AMLnZu8IFJmMRkzYny2lGghAO9bIyiY8N4SUcxYf3Sec=s900-c-k-c0x00ffffff-no-rj",
      img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      name: "Kusal Kalinga",
      username: "kusalkalinga",
      userImg:
        "https://yt3.ggpht.com/ytc/AMLnZu8IFJmMRkzYny2lGghAO9bIyiY8N4SUcxYf3Sec=s900-c-k-c0x00ffffff-no-rj",
      img: "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "Wow!",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
