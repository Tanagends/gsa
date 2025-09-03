import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import ArticlePageClient from './ArticlePageClient';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());
  
  const date = page.data.publishing_time;
  const dateMain = date?.slice(0, 10);
  
  // Get related articles for suggestions
  const relatedArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [{ field: "document.first_publication_date", direction: "desc" }]
  });
  
  const filteredRelated = relatedArticles.filter(article => article.uid !== params.uid);

  return <ArticlePageClient page={page} dateMain={dateMain} relatedArticles={filteredRelated} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("article");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
