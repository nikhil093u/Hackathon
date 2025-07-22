import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ResourceCard from '../components/ResourceCard';

const resources = {
  'Getting Started': [
    {
      title: 'What is a Hackathon?',
      description: 'Learn what hackathons are and how they work.',
      link: 'https://devpost.com/resources/hackathons',
    },
    {
      title: 'How to Participate',
      description: 'Step-by-step guide to joining your first hackathon.',
      link: 'https://www.freecodecamp.org/news/how-to-join-a-hackathon/',
    },
  ],
  'Frontend': [
    {
      title: 'React Basics',
      description: 'Intro to React.js for beginners.',
      link: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      title: 'Tailwind CSS Guide',
      description: 'Build beautiful UIs with Tailwind.',
      link: 'https://tailwindcss.com/docs',
    },
  ],
  'Backend': [
    {
      title: 'Node.js Crash Course',
      description: 'Learn how to build APIs using Node.js.',
      link: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
    },
  ],
  'APIs & Tools': [
    {
      title: 'REST API Concepts',
      description: 'Understand RESTful API design and usage.',
      link: 'https://restfulapi.net/',
    },
    {
      title: 'Using Postman',
      description: 'API testing with Postman made easy.',
      link: 'https://learning.postman.com/',
    },
  ],
};

export default function Learn() {
  const categories = Object.keys(resources);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <main className="flex-1">
        <h2 className="text-2xl font-bold mb-4">{activeCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources[activeCategory].map((resource, idx) => (
            <ResourceCard key={idx} {...resource} />
          ))}
        </div>
      </main>
    </div>
  );
}
