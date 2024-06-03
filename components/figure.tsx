import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const Figure = (
  {
    children, title, href, image, alt, className
  }: {
    children: ReactNode, title: string, href: string, image: string, alt: string, className?: string
  }
) => {
  const { locale } = useRouter()
  const buttonText = locale === 'no' ? 'Se mer' : 'Read more'

  return (
    <figure className={`${className ?? ''} w-full my-5 flex flex-col bg-ll-blue-950 lg:flex-row`}>
      <div>
        <Image src={image} alt={alt} width={1200} height={400} className='object-contain' />
      </div>
      <figcaption className='text-white p-5 flex flex-col justify-between w-full lg:max-w-sm'>
        <div>
          <h2 className='font-antiqua text-white text-3xl pt-3 -mb-2'>{title}</h2>
          {children}
        </div>
        {/* Make into Button component */}
        <a href={href} className='flex flex-row gap-3 items-center rounded-full self-end px-5 py-2 m-5 bg-red-700 dark:bg-red-900' target='_blank'>{buttonText} <ExternalLinkIcon /></a>
      </figcaption>
    </figure>
  )
}

export default Figure