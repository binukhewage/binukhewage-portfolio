import React from 'react';
import { posts } from '../postsData';
import DynamicBlogContent from './DynamicBlogContent';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: 'Article Not Found | Binuk Hewage',
    };
  }

  return {
    title: `${post.title} | Binuk Hewage`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return <DynamicBlogContent post={post} />;
}
