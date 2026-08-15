import BackButton from "@/components/BackButton";
import { blogs } from "@/data/data";
import BlogPost from "@/components/BlogPost";

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt((await params).id);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="min-h-screen py-10 px-4 bg-black">
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <BackButton />
        <BlogPost title={blog.title} body={blog.body} />
      </div>
    </div>
  );
};

export default page;
