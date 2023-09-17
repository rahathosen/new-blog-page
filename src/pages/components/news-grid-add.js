import Image from "next/image";

export default function NewsGridAdd() {
  return (
    <div className="bg-white">
      <div class="bg-white">
        {/* <!-- block news --> */}
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            {/* <!-- Left --> */}
            <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
              <div class="w-full py-3">
                <h2 class="text-black lg:text-3xl text-xl font-bold">
                  <span class="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                  Europe
                </h2>
              </div>
              <div class="flex flex-row flex-wrap -mx-3">
                <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div class="flex flex-row sm:block hover-img">
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
                      {/* <img class="max-w-full w-full mx-auto" src="src/img/dummy/img6.jpg" alt="alt title"/> */}
                    </a>
                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 class="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p class="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a class="text-gray-500" href="#">
                        <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div class="flex flex-row sm:block hover-img">
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
                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 class="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p class="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a class="text-gray-500" href="#">
                        <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div class="flex flex-row sm:block hover-img">
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
                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 class="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p class="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a class="text-gray-500" href="#">
                        <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div class="flex flex-row sm:block hover-img">
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
                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 class="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p class="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a class="text-gray-500" href="#">
                        <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div class="flex flex-row sm:block hover-img">
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
                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 class="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p class="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a class="text-gray-500" href="#">
                        <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div class="flex flex-row sm:block hover-img">
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
                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 class="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p class="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a class="text-gray-500" href="#">
                        <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div class="w-full bg-gray-50 h-full">
                <div class="text-sm py-6 sticky">
                  <div class="w-full text-center">
                    <a class="uppercase" href="#">
                      Advertisement
                    </a>
                    <a href="#">
                      <h3>Add</h3>
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                        }
                        alt="advertisement area"
                        width={640}
                        height={427}
                        className="mx-auto"
                      />
                      {/* <img class="mx-auto" src="src/img/ads/250.jpg" alt="advertisement area"/> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
