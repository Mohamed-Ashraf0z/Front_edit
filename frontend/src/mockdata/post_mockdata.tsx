import { Post } from "@/types/post.type";

const mockPosts: Post[] = [
  {
    id: '1',
    username: 'CarEnthusiast',
    content: 'Just got back from a track day with my AMG GT. The handling is absolutely incredible - feels like the car is connected to your thoughts. Anyone else been to Circuit de Monaco recently?',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    likes: 24,
    comments: 8,
    shares: 3,
    groupId: 'tuning',
  },
  {
    id: '2',
    username: 'ElectricDriver',
    content: 'Finally made the switch to electric with a Model S Plaid. The instant torque is addictive and the autopilot features are getting better every update. Still missing the engine sound though...',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    likes: 17,
    comments: 12,
    shares: 5,
    groupId: 'electric',
  },
  {
    id: '3',
    username: 'OffRoadAddict',
    content: 'Took the Jeep through some serious mud trails this weekend. Nothing beats the freedom of exploring places most cars can\'t go. Who else is planning some off-road adventures?',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    likes: 31,
    comments: 15,
    shares: 7,
    groupId: 'off-road',
  },
  {
    id: '4',
    username: 'ClassicRestorer',
    content: 'After 3 years of restoration, my 1967 Mustang is finally roadworthy again. Original 289 V8, all matching numbers. There\'s something special about bringing these classics back to life.',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    likes: 45,
    comments: 22,
    shares: 9,
    groupId: 'beask',
  },
];