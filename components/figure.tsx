import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const figureVariants = cva(
  'w-full my-5 flex rounded border border-solid dark:border-ll-blue-900',
  {
    variants: {
      layout: {
        vertical: 'flex-col lg:flex-row lg:items-start',
        horizontal: 'flex-col lg:items-center'
      },
      theme: {
        light: 'bg-ll-blue-900',
        dark: 'bg-ll-blue-950'
      }
    },
    defaultVariants: {
      layout: 'horizontal',
      theme: 'dark'
    }
  }
)

interface FigureProps extends VariantProps<typeof figureVariants> {
  children: ReactNode
  title: string
  href: string
  image: string
  alt: string
  className?: string
}

const Figure = ({
  children,
  title,
  href,
  image,
  alt,
  layout = 'horizontal',
  theme = 'dark',
  className
}: FigureProps) => {
  const { locale } = useRouter()
  const buttonText = locale === 'no' ? 'Mer...' : 'More...'
  const fontFamily = 'font-serif text-[2rem] text-ll-blue-200'

  return (
    <figure className={figureVariants({ layout, theme, className })}>
      <div className={layout === 'horizontal' ? 'w-full' : 'w-2/3'}>
        <Image src={image} alt={alt} width={1200} height={400} className={`object-contain ${layout === 'horizontal' ? 'rounded-t' : 'rounded-tl'}`} />
      </div>
      <figcaption className={`
        text-white p-5 flex flex-col
        ${layout === 'horizontal' ? 'lg:w-full' : 'w-1/3'}
      `}>
        <div>
          <h2 className={`leading-normal text-white text-3xl pt-3 -mb-2 
            ${layout === 'horizontal' ? 'lg:text-2xl' : 'lg:text-2xl'} 
            ${fontFamily}`}>{title}</h2>
          {children}
        </div>
        {href && (
          <a href={href} className='flex flex-row gap-3 items-center rounded-full self-end px-4 py-1 mt-5 bg-red-700 dark:bg-red-900' target='_blank'>{buttonText} <ExternalLinkIcon /></a>
        )}
      </figcaption>
    </figure>
  )
}

export default Figure