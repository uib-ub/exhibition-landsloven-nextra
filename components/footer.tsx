import HVLen from 'components/logos/hvl-en';
import Bymuseet from 'components/logos/logo-bymuseet';
import HVL from 'components/logos/logo-hvl';
import UiBen from 'components/logos/logo-uib-en';
import UiB from 'components/logos/logo-uib-no';
import { useRouter } from 'next/router';
//import Vestland from 'components/logos/logo-vestland';

const Footer = () => {
  const { locale } = useRouter();
  return (
    <div className='flex flex-col justify-center sm:flex-row gap-5 w-full items-center space-x-2'>
      {locale === 'no' ?
        <>
          <UiB className='flex-0 w-1/3 px-10' />
          <HVL className='w-1/5' />
          <Bymuseet className='flex-0 w-1/3 max-h-20' />
          {/* <Vestland className='' /> */}
        </>
        :
        <>
          <UiBen className='flex-0 w-1/3 px-10' />
          <HVLen className='flex-0 flex-shrink-0 w-1/5' />
          <Bymuseet className='flex-0 w-1/3 max-h-20' />
          {/* <Vestland className='' /> */}
        </>
      }
    </div>
  );
};

export default Footer;
