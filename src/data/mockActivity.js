// Generate dates in the past
const getRandomDate = (daysAgo = 7) => {
    const date = new Date();
    const randomDays = Math.floor(Math.random() * daysAgo);
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    
    date.setDate(date.getDate() - randomDays);
    date.setHours(date.getHours() - randomHours);
    date.setMinutes(date.getMinutes() - randomMinutes);
    
    return date;
  };
  
  // Today's activity (within 24 hours)
  export const TODAY_ACTIVITY = [
    {
      id: 't1',
      type: 'like',
      user: {
        id: 'user1',
        username: 'johndoe',
      },
      post: {
        id: 'post1',
      },
      createdAt: getRandomDate(1),
    },
    {
      id: 't2',
      type: 'comment',
      user: {
        id: 'user2',
        username: 'sarah_smith',
      },
      post: {
        id: 'post2',
      },
      comment: 'This looks amazing! 🔥',
      createdAt: getRandomDate(1),
    },
    {
      id: 't3',
      type: 'follow',
      user: {
        id: 'user3',
        username: 'mike_design',
      },
      createdAt: getRandomDate(1),
    },
    {
      id: 't4',
      type: 'mention',
      user: {
        id: 'user4',
        username: 'travel_addict',
      },
      post: {
        id: 'post3',
      },
      createdAt: getRandomDate(1),
    },
    {
      id: 't5',
      type: 'like',
      user: {
        id: 'user5',
        username: 'photo_pro',
      },
      post: {
        id: 'post1',
      },
      createdAt: getRandomDate(1),
    },
  ];
  
  // This week's activity (within 7 days)
  export const THIS_WEEK_ACTIVITY = [
    {
      id: 'w1',
      type: 'follow',
      user: {
        id: 'user6',
        username: 'art_gallery',
      },
      createdAt: getRandomDate(7),
    },
    {
      id: 'w2',
      type: 'like',
      user: {
        id: 'user7',
        username: 'fitness_coach',
      },
      post: {
        id: 'post4',
      },
      createdAt: getRandomDate(7),
    },
    {
      id: 'w3',
      type: 'comment',
      user: {
        id: 'user8',
        username: 'foodie101',
      },
      post: {
        id: 'post5',
      },
      comment: 'Could you share the recipe please?',
      createdAt: getRandomDate(7),
    },
    {
      id: 'w4',
      type: 'tag',
      user: {
        id: 'user9',
        username: 'mountain_climber',
      },
      post: {
        id: 'post6',
      },
      createdAt: getRandomDate(7),
    },
  ];
  
  // This month's activity (older)
  export const THIS_MONTH_ACTIVITY = [
    {
      id: 'm1',
      type: 'follow_request',
      user: {
        id: 'user10',
        username: 'tech_geek',
      },
      createdAt: getRandomDate(30),
    },
    {
      id: 'm2',
      type: 'like',
      user: {
        id: 'user11',
        username: 'bookworm',
      },
      post: {
        id: 'post7',
      },
      createdAt: getRandomDate(30),
    },
    {
      id: 'm3',
      type: 'comment',
      user: {
        id: 'user12',
        username: 'music_lover',
      },
      post: {
        id: 'post8',
      },
      comment: 'What song is this?',
      createdAt: getRandomDate(30),
    },
  ];
  
  // Suggested users for "You May Know"
  export const SUGGESTED_USERS = [
    {
      id: 'suggest1',
      username: 'james_wilson',
      following: 342,
      followers: 1245,
    },
    {
      id: 'suggest2',
      username: 'emma_photography',
      following: 124,
      followers: 5678,
    },
    {
      id: 'suggest3',
      username: 'travel_adventures',
      following: 567,
      followers: 12400,
    },
    {
      id: 'suggest4',
      username: 'cooking_master',
      following: 432,
      followers: 8654,
    },
    {
      id: 'suggest5',
      username: 'fitness_guru',
      following: 231,
      followers: 7632,
    },
  ];
  
  // Combined activity data
  export const ALL_ACTIVITY = [
    ...TODAY_ACTIVITY,
    ...THIS_WEEK_ACTIVITY,
    ...THIS_MONTH_ACTIVITY,
  ];