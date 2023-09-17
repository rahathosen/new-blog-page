import Image from "next/image";
export default function NewsFlexThird() {
  return (
    <div className="bg-white">
    
    {/* <!-- block news --> */}
    <div className="bg-gray-50 py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          {/* <!-- post --> */}
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3">
              
            <h2 class="text-black lg:text-3xl text-xl font-bold">
                <span class="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>Latest news
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="flex-shrink max-w-full w-full px-3 pb-5">
                <div className="relative hover-img max-h-98 overflow-hidden">
                  {/* <!--thumbnail--> */}
                  <a href="#">
                  <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto h-auto rounded-md"
                      />

                  </a>
                  <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                    {/* <!--title--> */}
                    <a href="#">
                      <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                    </a>
                    <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>                                                  
                    {/* <!-- author and date --> */}
                    <div className="pt-2">
                      <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                  <a href="">
                  <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                    
                  </a>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                  <a href="">
                  <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                  </a>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                  <a href="">
                  <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                  </a>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                  <a href="">
                  <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                  </a>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                  <a href="">
                  <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                  </a>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                  <a href="">
                  <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                  </a>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sidebar --> */}
          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
            <div className="w-full bg-white">
              <div className="mb-6">
                <div className="p-4 bg-gray-100">
                  <h2 className="text-lg font-bold">Most Popular</h2>
                </div>
                <ul className="post-number">
                  <li className="border-b border-gray-100 hover:bg-gray-50">
                    <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Why the world would end without political polls</a>
                  </li>
                  <li className="border-b border-gray-100 hover:bg-gray-50">
                    <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Meet The Man Who Designed The Ducati Monster</a>
                  </li>
                  <li className="border-b border-gray-100 hover:bg-gray-50">
                    <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">2020 Audi R8 Spyder spy shots release</a>
                  </li>
                  <li className="border-b border-gray-100 hover:bg-gray-50">
                    <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lamborghini makes Huracán GT3 racer faster for 2019</a>
                  </li>
                  <li className="border-b border-gray-100 hover:bg-gray-50">
                    <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">ZF plans $14 billion autonomous vehicle push, concept van</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-sm py-6 sticky">
              <div className="w-full text-center">
                <a className="uppercase" href="#">Advertisement</a>
                <a href="#">
                <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt="advertisement area"
                        width={640}
                        height={427}
                        className="mx-auto"
                      />
              
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
