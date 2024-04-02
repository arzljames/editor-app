import Editor from "@/components/Editor";

export default function Home() {
  return (
    <div className="w-full p-4 flex items-center justify-center scroll-auto">
      <div className="border shadow-sm w-full max-w-[600px] p-4 rounded-lg h-full">
        <Editor />
      </div>
    </div>
  );
}
