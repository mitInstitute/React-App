const Gallery = () => {
  const images = [
    "https://c02.purpledshub.com/uploads/sites/40/2023/08/JI230816Cosmos220-6d9254f-edited-scaled.jpg?w=1029&webp=1",
    "https://hips.hearstapps.com/hmg-prod/images/spring-flowers-65de4a13478ee.jpg?crop=0.668xw:1.00xh;0.287xw,0&resize=1200:*",
    "https://www.gardenia.net/wp-content/uploads/2023/04/0HB9lmgH0x0ZR8RnwR06SgZe2GRFKY6G3KO19hjc-300x300.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFC8p_JOuRS8FbrXHX2GwB6A8jle0tCce70ZGu4Or9H_cmJ5k2yEyOPq4y3DJyxln0D7M&usqp=CAU",
    "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/discover-the-secret-language-of-flowers-2022-hero.jpeg"
  ];

  return (
    <section className="flex items-center justify-center text-center ">
      <div>
        <h1 className="heading">Gallery</h1>
        <p className="sub-heading mb-4 mt-1 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores iure
          maxime nisi voluptas suscipit, error voluptate!
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-fit mx-auto">
          {images.map((img, idx) => (
            <div className="w-[10rem] h-auto">
              <img
                key={idx}
                src={img}
                alt="Flower"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
