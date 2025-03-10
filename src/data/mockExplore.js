// Generate a grid of mock posts for the explore section
export const generateMockExplorePosts = (count = 50) => {
    const posts = [];
    
    for (let i = 1; i <= count; i++) {
      posts.push({
        id: i,
        user: {
          id: `user_${Math.floor(Math.random() * 1000)}`,
          username: `user_${Math.floor(Math.random() * 1000)}`,
        },
        multipleItems: Math.random() > 0.7, // 30% of posts have multiple images
        likes: Math.floor(Math.random() * 10000),
        caption: `This is a caption for post #${i}`,
        location: Math.random() > 0.5 ? 'Random Location' : null,
        timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
      });
    }
    
    return posts;
  };
  
  // Pre-generate posts so they don't change on every reload
  export const EXPLORE_POSTS = generateMockExplorePosts(60);
  
  // Generate filtered posts by category (for demo purposes)
  export const getPostsByCategory = (categoryId) => {
    if (categoryId === 'all') {
      return EXPLORE_POSTS;
    }
    
    // For demo purposes: return a subset of posts for other categories
    const startIdx = Math.floor(Math.random() * 20);
    const endIdx = startIdx + Math.floor(Math.random() * 30) + 10; // At least 10 posts
    
    return EXPLORE_POSTS.slice(startIdx, endIdx);
  };