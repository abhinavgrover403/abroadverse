import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import Markdown from 'react-markdown';

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-[#0B3C5D] mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="bg-[#0B3C5D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00A8A8] transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#0B3C5D] hover:text-[#00A8A8] font-medium mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to all posts
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-[400px] object-cover"
            referrerPolicy="no-referrer"
          />
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="bg-[#00A8A8]/10 text-[#00A8A8] px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3C5D] mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#0B3C5D] prose-a:text-[#00A8A8]">
              <Markdown>{post.content}</Markdown>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
