
import Image from "next/image";

const OurProducts2 = () => {
  return (
    <div>
      {/* Filter Section */}
      <div
        className="w-full max-w-[1440px] h-[100px] mx-auto bg-peach flex items-center px-4 opacity-100"
      >
        <span className="text-black font-bold">Filter</span>
        <span className="text-black mx-2">⬆️⬇️⬅️➡️</span>
        <div className="flex mx-2 space-x-1">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="w-2 h-2 bg-black rounded-full"></span>
        </div>
        <div className="text-right">
        <span className="mx-4 text-black">|</span>
        <span className="text-black">Showing 1-16 of 32 results</span>
        <span className="ml-12 text-black">16</span>
        <span className="ml-2 text-black">Filter by</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative w-full max-w-5xl mx-auto p-4 md:p-10">
        <h1 className="text-center text-4xl md:text-5xl font-bold">
          Our Products
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-8 m-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative card group w-full md:w-[220px] h-96 md:h-[400px] overflow-hidden rounded-md"
            >
              <Image
                src={card.image}
                alt={card.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute top-2 right-2 rounded-full bg-red-600 text-white text-xs font-bold px-2 py-1">
                {card.discount}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gray-200 p-2 rounded-b-md">
                <h1 className="text-black font-bold">{card.title}</h1>
                <p className="text-gray-600">{card.description}</p>
                <div className="flex justify-between text-black mt-1">
                  <span>${card.currentPrice}</span>
                  <span className="line-through">${card.previousPrice}</span>
                </div>
              </div>
              <button className="group-hover:bg-red-600 group-hover:text-white bg-white text-black px-6 py-3 rounded-md absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity  scale-105">
                Add to Cart
              </button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white">Share</span>
                <span className="text-white">|</span>
                <span className="text-white">Compare</span>
                <span className="text-white">|</span>
                <span className="text-white">Like</span>
              </div>
              <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:opacity-70 transition-opacity"></div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button className="text-yellow-600 font-bold mt-10 border border-yellow-600 bg-white py-2 px-6 rounded-lg">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    image: "/whitetable.png",
    alt: "Dining Table",
    discount: "20%",
    title: "Dining Table",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "499.99",
    previousPrice: "599.99",
  },
  {
    image: "/whitechair.png",
    alt: "Sofa Set",
    discount: "15%",
    title: "Sofa Set",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "799.99",
    previousPrice: "999.99",
  },
  {
    image: "/sofa2.png",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/livingroom.jpg",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
  {
    image: "/lamp1.png",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/sofa3.png",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
  {
    image: "/livingroom2.jpg",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/couch.jpg",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
  {
    image: "/sofa2.png",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/livingroom.jpg",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
  {
    image: "/lamp1.png",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/sofa3.png",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
];

export default OurProducts2;
