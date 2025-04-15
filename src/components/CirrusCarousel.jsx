import Carousel from 'react-multi-carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const CustomArrow = ({ onClick, direction }) => {
  return (
    <button 
      onClick={onClick} 
      className={`absolute z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition-all duration-200 focus:outline-none ${
        direction === 'left' ? 'left-2' : 'right-2'
      } top-1/2 transform -translate-y-1/2`}
      aria-label={`${direction} arrow`}
    >
      {direction === 'left' ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
    </button>
  );
};

const carouselItems = [
  {
    id: 1,
    title: "Digital Innovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec magna venenatis aliquet. Proin quis magna vel odio efficitur finibus in vel nisl. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    buttonText: "EXPLORE NOW"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    buttonText: "LEARN MORE"
  },
  {
    id: 3,
    title: "Smart Technology",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    buttonText: "GET STARTED"
  },
  {
    id: 4,
    title: "Future Trends",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    buttonText: "DISCOVER"
  }
];

const CarouselCard = ({ title, description, buttonText }) => {
  return (
    <div className="h-full mx-2 bg-black">
      <div className="flex flex-col h-full p-6 text-white">
        <h2 className="text-3xl font-bold h-16">{title}</h2>
        <div className="flex-grow mt-4">
          <p className="text-sm leading-relaxed mb-6">{description}</p>
        </div>
        <div className="h-12">
          <button className="border-2 border-white text-white py-2 px-6 hover:bg-white hover:text-black transition-colors duration-300 text-sm">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const CirrusCarousel = () => {
  return (
    <div className="bg-black w-full flex items-center py-12">
      <div className="w-full">
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomArrow direction="left" />}
          customRightArrow={<CustomArrow direction="right" />}
          containerClass="carousel-container"
          itemClass="carousel-item h-96"
          dotListClass="custom-dot-list-style"
          showDots={true}
          ssr={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          swipeable={true}
          draggable={true}
          partialVisible={false}
        >
          {carouselItems.map((item) => (
            <CarouselCard 
              key={item.id}
              title={item.title} 
              description={item.description} 
              buttonText={item.buttonText}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CirrusCarousel;