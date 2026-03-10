import Database from 'better-sqlite3';

const db = new Database('database.sqlite');

const post = {
  title: "Canada PR Pathways: Navigating 2026 Trends and Updates",
  slug: "canada-pr-pathways-2026-trends",
  category: "Immigration",
  author: "Abhinav Grover",
  excerpt: "Explore the latest trends, policy shifts, and most viable pathways for securing Canadian Permanent Residency in 2026.",
  content: "As we move into 2026, Canada continues to refine its immigration policies to address labor shortages and demographic challenges. The Express Entry system remains the flagship pathway, but recent trends show a strong pivot towards category-based draws. Candidates with proficiency in French, or experience in healthcare, STEM, trades, transport, and agriculture are seeing significantly lower CRS score requirements.\n\n### Key Trends for 2026\n\n1. **Provincial Nominee Programs (PNPs) Expansion:** Provinces are gaining more autonomy to select candidates who meet localized economic needs. Programs in Alberta, Saskatchewan, and the Atlantic provinces are particularly active.\n2. **Focus on Retention:** Temporary foreign workers and international students already in Canada are being prioritized through specialized pathways, making the transition from temporary to permanent resident smoother.\n3. **Tech and Healthcare Demand:** The demand for tech professionals and healthcare workers is at an all-time high, with dedicated streams offering expedited processing times.\n\n### What Should You Do?\n\nTo maximize your chances in 2026, focus on improving your language scores (especially French, if possible), gaining relevant work experience in high-demand sectors, and exploring provincial pathways rather than relying solely on federal draws.\n\n**Speak with AbroadVerse experts to evaluate your profile and find the best PR pathway for you.**",
  featuredImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};

try {
  const insert = db.prepare('INSERT INTO posts (title, slug, category, author, excerpt, content, featuredImage) VALUES (?, ?, ?, ?, ?, ?, ?)');
  insert.run(post.title, post.slug, post.category, post.author, post.excerpt, post.content, post.featuredImage);
  console.log('Successfully added the new blog post.');
} catch (err) {
  console.log('Error adding blog post:', err.message);
}
