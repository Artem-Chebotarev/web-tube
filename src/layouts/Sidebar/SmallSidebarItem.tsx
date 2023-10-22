import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonStyles } from '../../components/Button/Button';

interface SmallSidebarItemProps {
  // We are passing the name of element, not hte actual component
  Icon: ElementType;
  title: string;
  url: string;
}

export const SmallSidebarItem = (props: SmallSidebarItemProps) => {
  const { Icon, title, url } = props;

  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        'py-4 px-1 flex flex-col items-center rounded-lg gap-1',
      )}
    >
      <Icon className='w-6 h-6' />
      <div className='text-sm'>{title}</div>
    </a>
  );
};
