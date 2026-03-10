import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import { format } from 'date-fns';

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
}

export default function AdminBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<Post>>({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const isNew = !currentPost.id;
    const url = isNew ? '/api/posts' : `/api/posts/${currentPost.id}`;
    const method = isNew ? 'POST' : 'PUT';

    // Auto-generate slug if empty
    const postToSave = {
      ...currentPost,
      slug: currentPost.slug || currentPost.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postToSave),
      });
      if (res.ok) {
        setIsEditing(false);
        setCurrentPost({});
        fetchPosts();
      } else {
        alert('Failed to save post');
      }
    } catch (err) {
      alert('Error saving post');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      if (res.ok) fetchPosts();
    } catch (err) {
      alert('Error deleting post');
    }
  };

  if (loading && !isEditing) return <div>Loading posts...</div>;

  if (isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">{currentPost.id ? 'Edit Post' : 'Create New Post'}</h2>
          <button 
            onClick={() => { setIsEditing(false); setCurrentPost({}); }}
            className="text-slate-500 hover:text-slate-800"
          >
            Cancel
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
              <input 
                type="text" required
                value={currentPost.title || ''}
                onChange={e => setCurrentPost({...currentPost, title: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Slug (URL)</label>
              <input 
                type="text"
                value={currentPost.slug || ''}
                onChange={e => setCurrentPost({...currentPost, slug: e.target.value})}
                placeholder="auto-generated-if-empty"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
              <input 
                type="text" required
                value={currentPost.category || ''}
                onChange={e => setCurrentPost({...currentPost, category: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Author</label>
              <input 
                type="text" required
                value={currentPost.author || ''}
                onChange={e => setCurrentPost({...currentPost, author: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Featured Image URL</label>
            <div className="flex gap-4">
              <input 
                type="url" required
                value={currentPost.featuredImage || ''}
                onChange={e => setCurrentPost({...currentPost, featuredImage: e.target.value})}
                placeholder="https://images.unsplash.com/..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] outline-none"
              />
              {currentPost.featuredImage && (
                <img src={currentPost.featuredImage} alt="Preview" className="h-10 w-10 rounded object-cover" />
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Excerpt</label>
            <textarea 
              required rows={3}
              value={currentPost.excerpt || ''}
              onChange={e => setCurrentPost({...currentPost, excerpt: e.target.value})}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] outline-none resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Content (Markdown/HTML)</label>
            <textarea 
              required rows={10}
              value={currentPost.content || ''}
              onChange={e => setCurrentPost({...currentPost, content: e.target.value})}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] outline-none font-mono text-sm"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-200">
            <button 
              type="button"
              onClick={() => { setIsEditing(false); setCurrentPost({}); }}
              className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-[#0B3C5D] text-white rounded-lg hover:bg-[#00A8A8] transition-colors font-medium"
            >
              Save Post
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">Blog Posts</h2>
        <button 
          onClick={() => { setCurrentPost({}); setIsEditing(true); }}
          className="flex items-center gap-2 bg-[#0B3C5D] text-white px-4 py-2 rounded-lg hover:bg-[#00A8A8] transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Post
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider border-b border-slate-200">
              <th className="px-6 py-4 font-medium">Post</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                  No posts found. Create one to get started.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {post.featuredImage ? (
                        <img src={post.featuredImage} alt="" className="h-12 w-16 object-cover rounded shadow-sm" />
                      ) : (
                        <div className="h-12 w-16 bg-slate-100 rounded flex items-center justify-center text-slate-400">
                          <ImageIcon className="h-5 w-5" />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-slate-800 mb-1 line-clamp-1">{post.title}</div>
                        <div className="text-sm text-slate-500">by {post.author}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button 
                      onClick={() => { setCurrentPost(post); setIsEditing(true); }}
                      className="text-blue-600 hover:text-blue-800 p-2"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-800 p-2 ml-2"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
