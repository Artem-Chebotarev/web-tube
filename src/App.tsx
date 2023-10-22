import { useState } from 'react';
import { CategoryPills } from './components/CategoryPills/CategoryPills';
import { categories, videos } from './data/home';
import { Header } from './layouts/Header/Header';
import { VideoGridItem } from './components/VideoGridItem/VideoGridItem';
import { Sidebar } from './layouts/Sidebar/Sidebar';

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className='max-h-screen flex flex-col'>
      {/* Header */}
      <Header />

      <div className='grid grid-cols-[auto,1fr] flex-grow overflow-auto'>
        {/* Sidebar */}
        <Sidebar />

        <div className='overflow-x-hidden px-8 pb-4'>
          {/* Category Section */}
          <div className='sticky top-0 bg-white z-10 pb-4'>
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          {/* Main Content Section */}
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map((el) => (
              <VideoGridItem key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
