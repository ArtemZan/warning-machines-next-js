import { BlogPage } from '@/components/blog/BlogPage';
import { siteContent } from '@/lib/content';

export default function Blog() {
  return <BlogPage articles={siteContent.articles} />;
}

