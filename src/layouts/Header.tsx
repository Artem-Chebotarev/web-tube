import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/Logo.png';
import { Button } from '../components/Button';
import { useState } from 'react';
import { Input } from '../components/Input';
import { useSidebarContext } from '../context/SidebarContext';

interface HeaderFirstSectionProps {
  hidden?: boolean;
}

export const HeaderFirstSection = (props: HeaderFirstSectionProps) => {
  const { hidden = false } = props;

  const { toggle } = useSidebarContext();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? 'hidden' : 'flex'
      }`}
    >
      <Button variant='ghost' size='icon' onClick={toggle}>
        <Menu />
      </Button>
      <a href='/'>
        <img src={logo} className='h-6'></img>
      </a>
    </div>
  );
};

export const Header = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      <HeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center items-center ${
          showFullWidthSearch ? 'flex' : 'hidden md:flex'
        }`}
      >
        {showFullWidthSearch && (
          <Button
            type='button'
            size='icon'
            variant='ghost'
            className='flex-shrink-0'
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className='flex flex-grow max-w-[600px]'>
          <Input />
          <Button className='py-2 px-4 rounded-r-full border border-l-0 border-secondary-border flex-shrink-0'>
            <Search />
          </Button>
        </div>
        <Button type='button' size='icon' className='flex-shrink-0'>
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? 'hidden' : 'flex'
        }`}
      >
        <Button
          size='icon'
          variant='ghost'
          className='md:hidden'
          onClick={() => setShowFullWidthSearch(true)}
        >
          <Search />
        </Button>
        <Button size='icon' variant='ghost' className='md:hidden'>
          <Mic />
        </Button>
        <Button size='icon' variant='ghost'>
          <Upload />
        </Button>
        <Button size='icon' variant='ghost'>
          <Bell />
        </Button>
        <Button size='icon' variant='ghost'>
          <User />
        </Button>
      </div>
    </div>
  );
};
