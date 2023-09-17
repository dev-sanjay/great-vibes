import greateVibesImage from '@/assets/images/great-vibes.png';
import CreateJob from '../create-job';
import strings from '@/locales/en.json';

const Header: React.FC = () => (
  <header className='bg-platinum py-2 px-3 sm:px-20 flex justify-between items-center sticky top-0'>
    <div className='flex gap-1'>
      <img src={greateVibesImage.src} alt='logo' width={50} height={50} />
      <div>
        <h3 className='text-lg text-primary-100 font-medium'>Greate Vibes</h3>
        <p className='text-xs opacity-60'>{strings.jobPlatform}</p>
      </div>
    </div>
    <CreateJob />
  </header>
);

export default Header;
