import { ArticlePage } from '@/components/blog/ArticlePage';
import { getArticleById, siteContent } from '@/lib/content';

export function generateStaticParams() {
  return siteContent.articles.map(({ id }) => ({ id }));
}

export const dynamicParams = true;

export default async function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id) || siteContent.articles[0];
  return <ArticlePage article={article} />;
}

