import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch posts', err);
        setLoading(false);
      });
  }, []);

  // Placeholder posts if DB is empty
  const displayPosts = posts.length > 0 ? posts : [
    {
      id: 4,
      title: 'Canada PR Pathways: Navigating 2026 Trends and Updates',
      slug: 'canada-pr-pathways-2026-trends',
      category: 'Immigration',
      author: 'Abhinav Grover',
      excerpt: 'Explore the latest trends, policy shifts, and most viable pathways for securing Canadian Permanent Residency in 2026.',
      featuredImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publishedAt: new Date().toISOString(),
    },
    {
      id: 1,
      title: 'Top Countries for Immigration in 2026',
      slug: 'top-countries-immigration-2026',
      category: 'Immigration',
      author: '',
      excerpt: 'Discover the best destinations for skilled workers and families looking to relocate this year.',
      featuredImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publishedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    },
    {
      id: 2,
      title: 'Student Visa Checklist: Everything You Need',
      slug: 'student-visa-checklist',
      category: 'Study Visa',
      author: '',
      excerpt: 'A comprehensive guide to preparing your documents for a successful student visa application.',
      featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: 3,
      title: 'Common Visa Rejection Reasons and How to Avoid Them',
      slug: 'common-visa-rejection-reasons',
      category: 'Visa Tips',
      author: 'Sarah Lee',
      excerpt: 'Learn about the most frequent mistakes applicants make and how you can ensure your application is approved.',
      featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">Immigration Insights & News</h1>
          <p className="text-lg text-slate-600">
            Stay updated with the latest visa policies, travel tips, and immigration news from our experts.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-500">Loading posts...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="bg-[#00A8A8]/10 text-[#00A8A8] px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#0B3C5D] mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-[#0B3C5D] font-semibold flex items-center gap-1 hover:text-[#00A8A8] transition-colors"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
