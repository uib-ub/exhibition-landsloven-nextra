import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)

interface CardProps {
  title: string;
  ingress?: string;
  image?: string;
  alt?: string;
  path: string;
  shadow?: string;
}

// TO DO: Deafault image or 'check if it exists)

const Card = (props: CardProps) => {
  const {
    path = '',
    title = '',
    ingress = '',
    alt = '',
    image = '/images/dummy_lands_b.jpg',
    shadow = 'shadow-md'
  } = props;

  const { locale = 'no' } = useRouter();
  const aria = locale === 'no' ? 'Les mer om ' + title : 'Read more about ' + title;
  const lenkeText = locale === 'no' ? 'Les mer' : 'Read more';

  return (
    <article key={path} className={`rounded type-card overflow-hidden mb-1 sm:my-0 bg-white ${shadow} hover:shadow dark:pb-0 dark:bg-ll-blue-950`}>
      <Link
        href={path}
      >
        <Image
          src={image}
          alt={alt ?? title}
          width={0}
          height={0}
          sizes="50vw"
          className="w-full object-cover aspect-[4/3] min-h-[120px] max-h-[250px]"
        />
      </Link>

      <div className="px-4 pt-2 pb-4 dark:px-4">
        <Link href={path} >
          <h2 className="mt-2 mb-1 font-serif text-[1.3em] font-medium leading-tight text-ll-blue-800 dark:dark:text-sky-300 hover:underline">{title}</h2>
        </Link>
        <p className="text-xl dark:text-whiten leading-tight">{ingress}</p>
        <p className=" text-right">
          <Link className="pt-1 xunderline text-sky-800 dark:text-sky-300 font-small text-base" aria-label={aria} href={path} >
            {lenkeText}
            <svg fill="none" viewBox="0 0 30 30" stroke="currentColor"
              className="nx-inline nx-h-5 nx-shrink-0 rtl:nx-rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Card;



