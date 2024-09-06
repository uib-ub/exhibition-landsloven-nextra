import Bymuseet from 'components/logos/logo-bymuseet';
import UiBen from 'components/logos/logo-uib-en';
import UiB from 'components/logos/logo-uib-no';
import Vestland from 'components/logos/logo-vestland';
import { useRouter } from 'next/router';
// import HVLen from 'components/logos/hvl-en';
// import Hvl from 'components/logos/logo-hvl';

const Footer = () => {
  const { locale } = useRouter();
  return (
    <div className='w-full'>
      <div className='flex-grow mb-5 w-full'>
        <p className='font-medium text-center'>Utstillingen er skapt av:</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-20 w-full'>
        {locale === 'no' ?
          <>
            <div className='w-1/3'>
              <UiB />
            </div>
            <div className='w-1/3'>
              <Bymuseet className='px-10' />
            </div>
            <div className='w-1/3'>
              <Vestland className='px-10' />
            </div>
            {/* <Hvl className='w-1/5' /> */}
          </>
          :
          <>
            <div className='w-1/3'>
              <UiBen />
            </div>
            <div className='w-1/3'>
              <Bymuseet className='px-10' />
            </div>
            <div className='w-1/3'>
              <Vestland className='px-10' />
            </div>
            {/* <HVLen className='flex-0 flex-shrink-0 w-1/5' /> */}
          </>
        }
      </div>
    </div>
  );
};

export default Footer;
