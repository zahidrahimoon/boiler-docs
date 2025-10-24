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
    projectLink="https://github.com/zahidrahimoon/next-starter"
    chatLink="https://discord.gg/nextjs"
  />
);
const footer = (
  <Footer>MIT {new Date().getFullYear()} © Next.js Enterprise Starter Kit.</Footer>
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
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
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
