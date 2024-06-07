export default function Custom404() {
  return (
    <main className="w-full h-[100vh] text-center flex flex-row align-center justify-center items-center  flex-col justify-center bg-ll-sandy-50 bg-no-repeat bg-top-left bg-contain sm:bg-[url('/images/landslov-ornament.png')]">
      <div className="w-full h-full text-center flex flex-row align-center justify-center items-center  flex-col justify-center">
        <h1 className="next-error-h1 font-sans text-5xl m-8 pt-1 pb-2 px-9 border-ll-gold text-ll-gold border-2 bg-white">
          404
        </h1>
        <div className="inline-block">
          <h2 className="font-gotic  text-3xl mt-4 mb-12">
            Sorry, This page could not be found.
          </h2>
        </div>
      </div>
    </main>
  )
}
