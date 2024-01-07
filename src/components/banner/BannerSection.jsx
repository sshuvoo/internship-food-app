import bannerImg from "./../../assets/banner.png";

export default function BannerSection() {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 space-y-4 lg:hidden">
          <h1 className="text-center text-4xl font-semibold text-[#031931]">
            Deliver Food To Your Door Step
          </h1>
          <p className="text-center text-lg font-medium text-[#485869]">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="relative md:h-72 h-52 rounded-3xl bg-[#F99F1C] lg:h-96 lg:px-4 lg:pl-16 xl:px-16">
          <img src={bannerImg} className="h-[140%] left-1/2 -translate-x-1/2 absolute bottom-0 lg:hidden"/>
          <div className="hidden h-full flex-col justify-center space-y-10 bg-hero-texture bg-contain bg-right bg-no-repeat lg:flex">
            <h1 className="text-5xl font-semibold leading-tight text-[#FFEFE7] lg:w-[400px] xl:w-[500px]">
              Deliver Food To Your Door Step
            </h1>
            <p className="text-2xl font-medium text-[#ffdbaf]">
              Authentic Food, Quick Service, Fast Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
