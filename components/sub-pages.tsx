import { Meta } from 'nextra';
import SubBox from './subbox';
import Card from './card';

const componentsMap = {
  SubBox: SubBox,
  Card: Card,
};

const SubPages = ({ meta }: { meta: Meta }) => {
  const subPages = Object.entries(meta).map(([key, value], i) => {
    const title = typeof value === 'string' ? value : value.title;
    const path = key;
    const type = value?.type === 'separator';
    const imageurl = typeof value === 'string' ? value : value.image || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yMDB4MjAwPC90ZXh0PiAgIAo8L3N2Zz4=';
    const desc = typeof value === 'string' ? value : value.desc || '';
    const klass = typeof value === 'string' ? value : value.klass || '';
    const komponent = typeof value === 'string' ? value : value.komponent || 'SubBox';

    if (i < 2 || type) return null;

    const ComponentToRender = componentsMap[komponent];

    const baseClass = 'p-2';
    const combinedClass = `${klass} ${baseClass}`;

    return (
      <div key={key} className={combinedClass}>
        {ComponentToRender ? (
          <ComponentToRender
            title={title}
            path={path}
            desc={desc}
            imageurl={imageurl}
            alttext={title}
          />
        ) : (
          <div>Not found</div>
        )}
      </div>
    );
  });

  return (
    <section className="py-5 -m-2">
      <div className="flex flex-wrap">
        {subPages.map((subpage) => subpage)}
      </div>
    </section>
  );
};

export default SubPages;
