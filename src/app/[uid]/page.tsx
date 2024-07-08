import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());
  const date = page.data.publishing_time;

  //return <SliceZone slices={page.data.slices} components={components} />;
  return (
	<main>
		<h1>{page.data.title}</h1>
		<PrismicNextImage field={page.data.story_image} />
		<PrismicRichText field={page.data.story} />
		<p> Published on 
			<time>{date}</time>
		</p>
	</main>
  );
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

