import Providers from "@/components/Providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Wraps every public page. The Sanity Studio at /studio sits outside this group,
// so it doesn't get the site header and footer.
export default function SiteLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="min-h-[calc(100vh-3.5rem)]">
        {children}
      </main>
      <SiteFooter />
    </Providers>
  );
}
