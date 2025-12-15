import { HomePage } from '@/components/home/Home';
import { siteContent } from '@/lib/content';

export default function Home() {
  return <HomePage content={siteContent} />;
}
