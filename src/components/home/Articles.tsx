/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import type { Article } from '@/types';

type ArticlesProps = {
  articles: Article[];
};

export function Articles({ articles }: ArticlesProps) {
  return (
    <section className="section" id="articles">
      <div className="section__header">
        <p className="eyebrow">Blog</p>
        <h2>Insights from the shop floor</h2>
      </div>
      <div className="grid grid--articles">
        {articles.slice(0, 4).map((article) => (
          <article key={article.id} className="card card--article">
            <div className="card__image" aria-hidden="true">
              <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={article.heroImage} alt={article.imageAlt} />
            </div>
            <h3>{article.title}</h3>
            <Link className="link" href={`/${article.id}`}>
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

