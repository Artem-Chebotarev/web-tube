import {
  Clapperboard,
  Clock,
  Home,
  Library,
  PlaySquare,
  Repeat,
  History,
  ListVideo,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from 'lucide-react';
import { playlists, subscriptions } from '../../data/sidebar';
import { useSidebarContext } from '../../context/SidebarContext';
import { HeaderFirstSection } from '../Header/Header';
import { SmallSidebarItem } from './SmallSidebarItem';
import { LargeSidebarItem } from './LargeSidebarItem';
import { LargeSidebarSection } from './LargeSidebarSection';

export const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? 'lg:hidden' : 'lg:flex'
        }`}
      >
        <SmallSidebarItem Icon={Home} title='Home' url='/' />
        <SmallSidebarItem Icon={Repeat} title='Shorts' url='/shorts' />
        <SmallSidebarItem
          Icon={Clapperboard}
          title='Subscriptions'
          url='/subscriptions'
        />
        <SmallSidebarItem Icon={Library} title='Library' url='/library' />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className='lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50'
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? 'lg:flex' : 'lg:hidden'
        } ${isSmallOpen ? 'flex z-[999] bg-white max-h-screen' : 'hidden'}`}
      >
        <div className='lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white'>
          <HeaderFirstSection />
        </div>

        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title='Home' url='/' />
          <LargeSidebarItem
            IconOrImgUrl={Clapperboard}
            title='Subscriptions'
            url='/subscriptions'
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImgUrl={Library}
            title='Library'
            url='/library'
          />
          <LargeSidebarItem
            IconOrImgUrl={History}
            title='History'
            url='/history'
          />
          <LargeSidebarItem
            IconOrImgUrl={PlaySquare}
            title='Your Videos'
            url='/your-videos'
          />
          <LargeSidebarItem
            IconOrImgUrl={Clock}
            title='Watch Later'
            url='/playlist?list=WL'
          />
          {playlists.map((el) => (
            <LargeSidebarItem
              key={el.id}
              IconOrImgUrl={ListVideo}
              title={el.name}
              url={`/playlist?list=${el.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title='Subscriptions'>
          {subscriptions.map((el) => (
            <LargeSidebarItem
              key={el.id}
              IconOrImgUrl={el.imgUrl}
              title={el.channelName}
              url={`/@${el.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title='Explore'>
          <LargeSidebarItem
            IconOrImgUrl={Flame}
            title='Trending'
            url='/trending'
          />
          <LargeSidebarItem
            IconOrImgUrl={ShoppingBag}
            title='Shopping'
            url='/shopping'
          />
          <LargeSidebarItem IconOrImgUrl={Music2} title='Music' url='/music' />
          <LargeSidebarItem
            IconOrImgUrl={Film}
            title='Movies & TV'
            url='/movies-tv'
          />
          <LargeSidebarItem IconOrImgUrl={Radio} title='Live' url='/live' />
          <LargeSidebarItem
            IconOrImgUrl={Gamepad2}
            title='Gaming'
            url='/gaming'
          />
          <LargeSidebarItem IconOrImgUrl={Newspaper} title='News' url='/news' />
          <LargeSidebarItem
            IconOrImgUrl={Trophy}
            title='Sports'
            url='/sports'
          />
          <LargeSidebarItem
            IconOrImgUrl={Lightbulb}
            title='Learning'
            url='/learning'
          />
          <LargeSidebarItem
            IconOrImgUrl={Shirt}
            title='Fashion & Beauty'
            url='/fashion-beauty'
          />
          <LargeSidebarItem
            IconOrImgUrl={Podcast}
            title='Podcasts'
            url='/podcasts'
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
};
