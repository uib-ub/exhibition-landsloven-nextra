import React from 'react';
import Image from 'next/image';

const Blockquote = ({
  quote,
  image,
  alt,
  footer,
  full
}: {
  quote: React.ReactNode;
  footer: React.ReactNode;
  image?: string;
  alt?: string;
  full?: boolean;
}) => {
  const bgColor = 'bg-ll-sandy-100 dark:bg-ll-blue-950 border border-solid dark:border-ll-blue-900 py-8 px-12 mt-4';
  const bgColorImage = 'bg-white';
  const figureSize = full ? 'w-full' : 'w-1/3';
  const textColor = 'text-black dark:text-blue-200';
  const footerColor = 'text-ll-red-700';

  return (
    <div className="mb-8">
      {image ? (
        <blockquote className={`flex flex-wrap w-full border dark:border-none rounded type-blockquote ${bgColorImage} dark:bg-gray-900 shadow-md`}>
          <figure className={`w-full sm:${figureSize}`}>
            <Image
              src={image}
              alt={alt}
              width={768}
              height={468}
              className="w-full h-full sm:h-48 sm:min-sm:h-48 max-h-96 xmd:w-48 md:h-auto object-cover"
            />
          </figure>
          <div className="grow w-full sm:w-2/3 p-6 text-center md:text-left space-y-4">
            <p className="font-serif text-2xl font-medium dark:text-ll-blue-200">{quote}</p>
            <div className="text-center md:text-right text-red-700 dark:text-sky-300">
              {footer}
            </div>
          </div>
        </blockquote>
      ) : (
        <blockquote className={`w-full rounded type-blockquote overflow-hidden border shadow-md grow p-6 text-left xmd:text-left space-y-4 ${bgColor} ${textColor} dark:bg-gray-900`}>
          <p className={`text-2xl ${textColor}`}>{quote}</p>
          <div className={`text-right ${footerColor} dark:text-sky-400`}>{footer}</div>
        </blockquote>
      )}
    </div>
  );
};

export default Blockquote;


