import { TPage } from 'config/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SubMenuCards = ({ items }: { items: TPage[] }) => {
  if (!items) {
    return null;
  }
  // Get the current locale so we can display the correct language
  const { locale } = useRouter();

  const subPages = Object.entries(items).map(([key, value], i) => {
    const title = value.title[locale]
    const path = value.href

    // Can use "generic" Card component here
    return (
      <div
        key={path}
        className='flex flex-row gap-3 p-3 bg-ll-blue'
      >
        {value.image ? <Image src={value.image} alt={value.alt[locale]} width={200} height={200} className='object-cover' />
          : <Image src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yMDB4MjAwPC90ZXh0PiAgIAo8L3N2Zz4='} alt='' width={200} height={200} />}
        <div className='flex flex-col gap-3 p-3'>
          <Link
            className='text-ll-gold md:text-2xl'
            href={path}
          >
            {title}
          </Link>
          {value.ingress ? <p className='text-white'>{value.ingress[locale]}</p> : null}
        </div>
      </div>
    )
  })

  return (
    <section className='w-full py-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default SubMenuCards;
