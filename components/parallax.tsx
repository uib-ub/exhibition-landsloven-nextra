const Parallax = ({ title, ingress, image }: { title?: string, ingress?: string, image?: string }) => {
return ( 
  <div> 
  <div
    className="mx-auto h-20 max-w xoverflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
    style={{
      backgroundImage: `url(${image})`,
      height: "666px",
    }} 
    >

      <div className="my-4">
        <div className="bg-white p-4 sm:p-8">
          # { title } 
          {ingress}
        </div>
       </div>
    </div>


    <section className="pt-40 pb-32 relative mx-auto h-20 max-w xoverflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg mt-40">
      <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-50 bg-fixed" 
      style={{
        backgroundImage: `url(${image})`,
        }} > 
      </div>
       <div className="text-black text-3xl text-center relative p-8">
          # {  title} 
          {ingress}
        </div>
      </section>
      <section className="h-[500px]" />
    </div>
  );
};

export default Parallax;
  
  
 