export interface FeaturedStory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const featuredStories: FeaturedStory[] = [
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    description: "The divine discourse between Krishna and Arjuna on the battlefield of Kurukshetra.",
    image: "/images/krishna-arjuna.jpg"
  },
  {
    id: "dice-game",
    title: "The Game of Dice",
    description: "The fateful game that led to the exile of the Pandavas and the events of the great war.",
    image: "/images/dice-game.jpg"
  },
  {
    id: "kurukshetra-war",
    title: "The Great War",
    description: "The 18-day battle that changed the course of dharma and history.",
    image: "/images/kurukshetra.jpg"
  }
];