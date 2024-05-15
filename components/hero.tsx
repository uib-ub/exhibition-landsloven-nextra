import Image from 'next/image';

const Hero = ({ title, description, image }: { title: string, description: string, image?: string }) => {
  return (
    <section className='w-full my-10 grid [grid-template-area: "main"] items-center justify-center gap-4 bg-slate-800'>
      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className='w-full [grid-area:main] object-contain'
      />
      <div className='flex flex-col gap-3 align-middle justify-center [grid-area:main]'>
        <h1 className='text-4xl font-bold text-center'>{title}</h1>
        <p className='text-lg text-center'>{description}</p>
      </div>
    </section>
  );
}

export default Hero;