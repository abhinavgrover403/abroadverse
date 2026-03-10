import Database from 'better-sqlite3';

const db = new Database('database.sqlite');

const posts = [
  {
    title: "Canada Introduces New PR Pathway for Temporary Workers",
    slug: "canada-new-pr-pathway-temporary-workers",
    category: "Immigration News",
    author: "AbroadVerse Experts",
    excerpt: "Canada has introduced a new immigration pathway that allows temporary workers and international graduates already living in the country to transition to permanent residency.",
    content: "Canada has introduced a new immigration pathway that allows temporary workers and international graduates already living in the country to transition to permanent residency. The program targets skilled professionals working in sectors experiencing labour shortages. By prioritizing applicants who already have Canadian work experience, the government aims to retain talent that contributes to economic growth. For many workers, this new pathway offers a faster route to long-term settlement compared to traditional immigration programs. Applicants must meet eligibility requirements such as work experience, language proficiency, and valid temporary status.\n\n**Speak with AbroadVerse experts to explore your immigration options.**",
    featuredImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Key Student Visa Changes in 2026",
    slug: "key-student-visa-changes-2026",
    category: "Study Abroad",
    author: "AbroadVerse Experts",
    excerpt: "International students planning to study abroad in 2026 should be aware of new visa regulations introduced by several major destinations.",
    content: "International students planning to study abroad in 2026 should be aware of new visa regulations introduced by several major destinations. Countries like the United States, Canada, the United Kingdom, and Australia have implemented stricter screening procedures, higher visa fees, and additional documentation requirements. These changes aim to improve immigration compliance while ensuring students genuinely intend to study. Applicants should prepare their financial documents, academic records, and visa applications more carefully than before. Despite tighter rules, studying abroad remains a strong pathway to international career opportunities and possible immigration routes.\n\n**Speak with AbroadVerse experts to explore your immigration options.**",
    featuredImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Australia’s New Skilled Migration Changes",
    slug: "australia-new-skilled-migration-changes",
    category: "Work Visas",
    author: "AbroadVerse Experts",
    excerpt: "Australia has introduced several immigration reforms aimed at attracting skilled professionals to sectors facing labour shortages.",
    content: "Australia has introduced several immigration reforms aimed at attracting skilled professionals to sectors facing labour shortages. One key change is the introduction of a new Skills-in-Demand visa designed to replace older temporary work visas. The updated program focuses on occupations that support economic growth and innovation. In addition, some requirements for graduates transitioning from study to work have been adjusted to make skilled migration pathways more efficient. Applicants with relevant qualifications and work experience may benefit from faster processing and clearer eligibility criteria.\n\n**Speak with AbroadVerse experts to explore your immigration options.**",
    featuredImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Best Countries for Immigration in 2026",
    slug: "best-countries-immigration-2026",
    category: "Global Immigration",
    author: "AbroadVerse Experts",
    excerpt: "Many professionals and students are exploring new immigration opportunities in 2026 as global migration policies evolve.",
    content: "Many professionals and students are exploring new immigration opportunities in 2026 as global migration policies evolve. Countries like Canada, Australia, the United Kingdom, and Germany continue to attract international talent through skilled worker programs and study-to-immigration pathways. Canada remains one of the most popular destinations because of its clear permanent residency programs and demand for skilled workers. Meanwhile, European countries are expanding work visa options to address labour shortages. Choosing the right country depends on your profession, education, and long-term goals.\n\n**Speak with AbroadVerse experts to explore your immigration options.**",
    featuredImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const insert = db.prepare('INSERT INTO posts (title, slug, category, author, excerpt, content, featuredImage) VALUES (?, ?, ?, ?, ?, ?, ?)');

posts.forEach(post => {
  try {
    insert.run(post.title, post.slug, post.category, post.author, post.excerpt, post.content, post.featuredImage);
    console.log(`Inserted: ${post.title}`);
  } catch (err) {
    console.log(`Error inserting ${post.title}:`, err.message);
  }
});

console.log('Seeding complete.');
