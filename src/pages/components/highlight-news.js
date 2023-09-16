import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const posts = [
  {
    id: 1,
    title: "Amazon Shoppers Are Ditching Designer Belts For This Best-Selling",
    href: "#",
    tag:"Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    tag:"Europe",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    tag:"Europe",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    tag:"Europe",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    
  },
 
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HighlightNews() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="">
          <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
            {/* <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="category-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Shop by Category
              </h2>
              <a
                href="#"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div> */}

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-4">
             
            {posts.slice(0,1).map((post)=>(
              <div key={post.id} className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover object-center group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-70"
                />
                <div className="flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0 lg:text-3xl" />
                      {post.title}
                      </a>
                    </h3>
                    <p
                      aria-hidden="true"
                      className="mt-1 text-sm text-white hidden sm:inline-block                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         "
                    >
                      {post.description}
                    </p>
                    <div className="pt-2">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                        {post.tag}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
))}


              {/*  */}
              {posts.slice(1,3).map((post)=>(
              <div key={post.id} className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-md sm:aspect-none sm:relative sm:h-full">
                <img
                  src={post.imageUrl}
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                    {post.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            
              {/* <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Workspace
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mt-6 sm:hidden">
              <a
                href="#"
                className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
