import BackButton from "@/components/BackButton";
import { blogs } from "@/data/data";
import BlogList from "@/components/BlogList";

const page = () => {
  return (
    <div className="bg-black w-screen min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <BackButton />
        <p className="text-white font-extrabold text-3xl lg:text-2xl">
          Kent&apos;s Blog
        </p>
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default page;
