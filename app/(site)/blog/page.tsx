import BackButton from "@/components/BackButton";
import { blogs } from "@/data/data";
import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Blog",
  description: "Notes from Kent Dela Cruz on learning and building with Laravel and Next.js."
};

const page = () => {
  return (
    <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
      <BackButton />
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        Blog
      </h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default page;
