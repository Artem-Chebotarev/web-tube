import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../../components/Button/Button";

interface LargeSidebarItemProps {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
}

export const LargeSidebarItem = (props: LargeSidebarItemProps) => {
  const { isActive = false, IconOrImgUrl, title, url } = props;

  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? 'font-bold bg-neutral-100 hover:bg-secondary' : undefined
        }`,
      )}
    >
      {typeof IconOrImgUrl === 'string' ? (
        <img src={IconOrImgUrl} className='w-6 h-6 rounded-full' />
      ) : (
        <IconOrImgUrl className='w-6 h-6' />
      )}

      <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
        {title}
      </div>
    </a>
  );
};
