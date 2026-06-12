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
  if (!post) {
    return <DynamicBlogContent post={post} />;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.dev";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "image": post.image ? (post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`) : `${siteUrl}/geo-evolution.png`,
    "datePublished": "2026-06-07",
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Binuk Hewage",
      "jobTitle": post.author?.role || "Full-Stack Developer",
      "url": "https://binukhewage.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Binuk Hewage Portfolio",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/icon.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DynamicBlogContent post={post} />
    </>
  );
}
