import { useRouter } from 'next/router';
import Card from './card';

type MenuItems = {
  [key: string]: {
    [key: string]: {
      title: string;
      href: string;
      description?: string;
      image?: string;
      class?: string;
    };
  };
};

const SubTextsCards = ({ items, meta, shadow }: { items: MenuItems, meta: any, shadow?: string }) => {
  const router = useRouter();
  // Get the current locale so we can display the correct language
  const { locale } = router;
  if (!items || !meta) return null;

  // If we get these keys, we remove them from the object
  delete items.index;
  delete items.introduksjon;
  //delete items['750-ar'];
  delete items['X-designalternativer'];


  if (!Object.keys(meta).length) return null;

  const subPages = Object.keys(meta)
    .filter(k => !['---', 'introduksjon', '750-ar'].includes(k))
    .map((key) => {
      if (!items[key]) return null;

      const value = items[key].introduksjon?.[locale] ||
        items[key].epilog?.[locale] ||
        items[key]?.[locale];

      if (!value) return null;

      const title = value.title;
      const path = value.href;
      const alt = value.alt;
      const ingress = value.description; // Got renamed to description
      const image = value.image ? value.image : '/images/dummy_lands_b.jpg';

      return (
        <Card
          key={`${key}-${locale}`}
          image={image}
          alt={alt ?? ''}
          title={title}
          ingress={ingress}
          path={path}
          shadow={shadow}
        />
      );
    })
    .filter(Boolean);

  if (!subPages.length) return null;

  return (
    <section className="w-full py-5">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8`}>
        {subPages}
      </div>
    </section>
  );
};

export default SubTextsCards;
