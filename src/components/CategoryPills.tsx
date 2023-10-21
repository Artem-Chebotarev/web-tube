import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { useEffect, useRef, useState } from 'react';

interface CategoryPill {
  name: string;
}

interface CategoryPillsProps {
  categories: CategoryPill[];
  selectedCategory: CategoryPill;
  onSelect: (category: CategoryPill) => void;
}

const TRANSLATE_AMOUNT = 200;

export const CategoryPills = (props: CategoryPillsProps) => {
  const { categories, selectedCategory, onSelect } = props;

  const [translate, setTranslate] = useState(0);

  const [isLeftVisible, setIsLeftVisible] = useState(false);

  const [isRightVisible, setIsRightVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      // const container = containerRef.current;
      // The same result with

      const container = entries[0]?.target;

      if (!container) {
        return;
      }

      setIsLeftVisible(translate > 0);

      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth,
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);

  return (
    <div ref={containerRef} className='overflow-x-hidden relative'>
      <div
        className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]'
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((el) => (
          <Button
            key={el.name}
            variant={selectedCategory.name === el.name ? 'dark' : 'default'}
            className='py-1 px-3 rounded-lg whitespace-nowrap'
            onClick={() => onSelect(el)}
          >
            {el.name}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div
          className='absolute top-1/2 left-0 -translate-y-1/2 
          bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'
        >
          <Button
            variant='ghost'
            size='icon'
            className='h-full aspect-square w-auto p-1.5'
            onClick={() =>
              setTranslate((prev) => {
                const newTranslate = prev - TRANSLATE_AMOUNT;

                // If we don't have the room for translation to the left - early return
                if (newTranslate <= 0) {
                  return 0;
                }

                return newTranslate;
              })
            }
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div
          className='absolute top-1/2 right-0 -translate-y-1/2 
          bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'
        >
          <Button
            variant='ghost'
            size='icon'
            className='h-full aspect-square w-auto p-1.5'
            onClick={() => {
              setTranslate((prev) => {
                if (!containerRef.current) {
                  return translate;
                }

                const newTranslate = prev + TRANSLATE_AMOUNT;

                // How wide the element (including hidden parts) if I scrolled off the whole element
                const edge = containerRef.current?.scrollWidth;

                // The visible width of the element
                const width = containerRef.current?.clientWidth;

                // If we don't have the room for translation to the right - early return
                if (width + newTranslate >= edge) {
                  return edge - width;
                }

                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};
