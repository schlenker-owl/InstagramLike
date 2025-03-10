// Mock current user profile
export const CURRENT_USER = {
    id: 'current',
    username: 'yourprofile',
    displayName: 'Your Name',
    bio: 'This is your profile bio. You can add details about yourself, interests, and links here.',
    website: 'yourwebsite.com',
    postsCount: 24,
    followersCount: 843,
    followingCount: 162,
    isVerified: false,
  };
  
  // Mock other user profile
  export const OTHER_USER = {
    id: 'user123',
    username: 'instagram_user',
    displayName: 'Instagram User',
    bio: 'Photography | Travel | Food\nSharing moments and capturing memories.',
    website: 'instagram.com',
    postsCount: 142,
    followersCount: 4382,
    followingCount: 982,
    isVerified: true,
    isFollowing: false,
  };
  
  // Mock highlights
  export const MOCK_HIGHLIGHTS = [
    {
      id: 'h1',
      name: 'Travel',
      coverUrl: null,
    },
    {
      id: 'h2',
      name: 'Food',
      coverUrl: null,
    },
    {
      id: 'h3',
      name: 'Moments',
      coverUrl: null,
    },
    {
      id: 'h4',
      name: 'Friends',
      coverUrl: null,
    },
    {
      id: 'h5',
      name: 'Nature',
      coverUrl: null,
    },
  ];
  
  // Generate mock posts
  const generateMockPosts = (count = 24) => {
    const posts = [];
    
    for (let i = 1; i <= count; i++) {
      posts.push({
        id: `post_${i}`,
        imageUrl: null, // This would be a real image URL in a production app
        caption: `This is post #${i}`,
        likes: Math.floor(Math.random() * 500) + 10,
        commentsCount: Math.floor(Math.random() * 50),
        createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        type: i % 7 === 0 ? 'video' : i % 5 === 0 ? 'reel' : 'photo',
        multipleItems: i % 4 === 0,
      });
    }
    
    return posts;
  };
  
  // Mock data for profile posts
  export const MOCK_POSTS = generateMockPosts(24);
  
  // Mock data for reels
  export const MOCK_REELS = Array(8).fill().map((_, index) => ({
    id: `reel_${index + 1}`,
    imageUrl: null,
    views: Math.floor(Math.random() * 10000) + 500,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000),
    type: 'reel',
  }));
  
  // Mock data for tagged posts
  export const MOCK_TAGGED = Array(12).fill().map((_, index) => ({
    id: `tagged_${index + 1}`,
    imageUrl: null,
    taggedBy: `user_${Math.floor(Math.random() * 100)}`,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000),
    type: 'photo',
  }));