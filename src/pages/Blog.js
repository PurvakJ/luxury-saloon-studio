// pages/Blog.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const posts = [
    {
      id: 1,
      title: 'A Natural Hair Guru Shares Tips for Hair',
      date: 'October 5, 2018',
      author: 'BoldThemes',
      category: 'Hair',
      comments: 0,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/post_11-1280x640.jpg',
      excerpt: 'Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.'
    },
    {
      id: 2,
      title: '8 Frizzy Hair Solutions That Actually Work',
      date: 'January 10, 2018',
      author: 'BoldThemes',
      category: 'Hairstyle',
      comments: 2,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_02-1280x640.jpg',
      excerpt: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Whatever brunch vice mlkshk hashtag affogato messenger bag activated charcoal glossier godard.'
    },
    {
      id: 3,
      title: 'What Does a Healthy Scalp Look Like?',
      date: 'January 10, 2018',
      author: 'BoldThemes',
      category: 'Products',
      comments: 3,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_03-1280x640.jpg',
      excerpt: 'Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Proactively envisioned multimedia based expertise and cross-media growth strategies. Holistically pontificate installed base portals after maintainable products.'
    },
    {
      id: 4,
      title: '5 Types of Hair Brushes You Need to Use',
      date: 'January 9, 2018',
      author: 'BoldThemes',
      category: 'Products',
      comments: 1,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_04.jpg',
      excerpt: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration visualize customer directed convergence without revolutionary.'
    },
    {
      id: 5,
      title: 'Products Hair Stylist Gerome Cheveux Swears By',
      date: 'January 9, 2018',
      author: 'BoldThemes',
      category: 'Products',
      comments: 2,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_06-1280x640.jpg',
      excerpt: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with clickthroughs. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing holistically pontificate.'
    },
    {
      id: 6,
      title: 'Tips to Help Your Hair Color Last Longer',
      date: 'January 9, 2018',
      author: 'BoldThemes',
      category: 'Hairstyle',
      comments: 3,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_01-1280x640.jpg',
      excerpt: 'Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed.'
    },
    {
      id: 7,
      title: 'How to Keep Every Type of Curly Hair Healthy',
      date: 'January 9, 2018',
      author: 'BoldThemes',
      category: 'Beauty',
      comments: 3,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_05-1280x640.jpg',
      excerpt: 'Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with networks. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits the start-up mentality to derive.'
    },
    {
      id: 8,
      title: 'Most Flattering Bangs for Your Face Shape',
      date: 'January 9, 2018',
      author: 'BoldThemes',
      category: 'Beauty',
      comments: 1,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_05-1280x640.jpg',
      excerpt: 'Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains after maintainable products.'
    },
    {
      id: 9,
      title: 'How to Moisturize Hair That\'s Feeling Dry',
      date: 'January 8, 2018',
      author: 'BoldThemes',
      category: 'Beauty',
      comments: 0,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/post_12-1280x640.jpg',
      excerpt: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Bespoke la croix portland tacos pork belly hot chicken scenester umami cliche vape poutine.'
    },
    {
      id: 10,
      title: '9 Reasons to Use Coconut Oil in Your Routine',
      date: 'July 20, 2017',
      author: 'BoldThemes',
      category: 'Products',
      comments: 3,
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_08-1280x640.jpg',
      excerpt: 'Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities engage.'
    }
  ];

  const categories = [
    { name: 'Beauty', count: 3 },
    { name: 'Hair', count: 1 },
    { name: 'Hairstyle', count: 2 },
    { name: 'Products', count: 4 }
  ];

  const recentPosts = posts.slice(0, 5);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="container">
          <h1>OUR BLOG</h1>
          <h2>KOSA SALON</h2>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-layout">
            <main className="blog-posts">
              {currentPosts.map((post) => (
                <article key={post.id} className="blog-post">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="category">{post.category}</span>
                      <span className="date">{post.date}</span>
                      <span className="author">by {post.author}</span>
                      <span className="comments">{post.comments} comments</span>
                    </div>
                    <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)}>
                      Previous
                    </button>
                  )}
                  <span>Page {currentPage} of {totalPages}</span>
                  {currentPage < totalPages && (
                    <button onClick={() => setCurrentPage(currentPage + 1)}>
                      Next
                    </button>
                  )}
                </div>
              )}
            </main>

            <aside className="blog-sidebar">
              {/* Search */}
              <div className="sidebar-widget search-widget">
                <input type="search" placeholder="Search..." />
                <button>🔍</button>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-widget recent-posts">
                <h3>Recent Posts</h3>
                <ul>
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <div className="recent-post">
                        <img src={post.image} alt={post.title} />
                        <div className="recent-post-info">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="sidebar-widget categories">
                <h3>Categories</h3>
                <ul>
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <Link to={`/blog/category/${cat.name.toLowerCase()}`}>
                        {cat.name} ({cat.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;