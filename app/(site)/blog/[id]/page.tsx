import BackButton from "@/components/BackButton";
import { blogs } from "@/data/data";
import BlogPost from "@/components/BlogPost";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
        <BackButton />
        <p className="text-muted">
          This post doesn&apos;t exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
      <BackButton />
      <BlogPost title={blog.title} body={blog.body} />
    </div>
  );
};

export default page;
