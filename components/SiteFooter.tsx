import AccentPicker from "@/components/AccentPicker";
import { profile } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
          and Sanity.
        </p>
        <AccentPicker />
      </div>
    </footer>
  );
}
