import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Next.js Enterprise Starter Kit - Documentation",
  description: "Production-ready Next.js 15 starter template with advanced dynamic layout system, comprehensive form handling, real-time features, and enterprise-grade architecture.",
};

const banner = (
  <Banner storageKey="enterprise-starter-v1">Next.js Enterprise Starter Kit v1.0.0 is now available! 🚀</Banner>
);
const navbar = (
  <Navbar
    logo={<b>⚡ Next.js Enterprise Starter</b>}
    logoLink={"/"}
    // point to the GitHub profile instead of the repo
    projectLink="https://github.com/zahidrahimoon"
    // removed Discord/chat link per request
  />
);
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} • Made by{' '}
    <a href="https://github.com/zahidrahimoon">Muhammad Zahid Rahimoon</a>{' '}
  </Footer>
);

const search = <Search placeholder="Search docs.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        {/* Preload Playfair Display from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <style>{`:root { --font-heading: 'Playfair Display', serif; } body { font-family: var(--font-sans, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial); } h1,h2,h3,h4,h5,h6 { font-family: var(--font-heading); } `}</style>
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/zahidrahimoon/next-starter"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
