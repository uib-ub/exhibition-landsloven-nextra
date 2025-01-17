import Bymuseet from 'components/logos/logo-bymuseet';
import UiBen from 'components/logos/logo-uib-en';
import UiB from 'components/logos/logo-uib-no';
import Vestland from 'components/logos/logo-vestland';
import { useRouter } from 'next/router';

const Footer = () => {
  const { locale } = useRouter();

  const messages = {
    no: {
      title: 'Utstillingen er skapt av:',
      accessibility: 'Tilgjengelighetserklæring',
    },
    en: {
      title: 'The exhibition is created by:',
      accessibility: 'Accessibility statement',
    },
  };

  return (
    <div className='w-full'>
      <div className='flex-grow mb-5 w-full'>
        <p className='font-medium text-center'>{messages[locale].title}</p>
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
          </>
        }
      </div>
      <div className='flex-grow mb-5 mt-10 w-full'>
        <p className='font-medium text-center'>
          <a href='https://uustatus.no/nb/erklaringer/publisert/07443f33-cb98-43fd-9d04-41545215e34f1'>{messages[locale].accessibility}</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
