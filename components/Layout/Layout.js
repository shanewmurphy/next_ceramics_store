import Head from "next/head";

import NavMain from "../Nav/Nav-main";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <div>
        <Head>
          {title}
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>
        <div>
          <NavMain />
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Dinnerware Sets",
  description:
    "We bring modern heritage goods, from all corners of the world, right to your doorstep. Ethically sourced. Sustainably crafted. Each piece has a story - let’s explore them together.",
  keywords: "Ceramics, Pottery",
};
