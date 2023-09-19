import Image from "next/image";
import Divider from "./divider";

const posts = [
  {
    id: 1,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 4,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 5,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 6,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
];

export default function NewsGridAdd() {
  return (
    <div className="bg-white dark:bg-[#040D12] mt-4 rounded-t-lg pt-4 mb-4 pb-4">
      <Divider />
      <div>
        {/* <!-- block news --> */}
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* <!-- Left --> */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
              <div className="flex flex-row flex-wrap -mx-3">
                {posts.slice(0,6).map((post) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                  >
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <Image
                          src={post.imageUrl}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto rounded-md"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            {post.title}
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                         {post.description}
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                         {post.tag}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="w-full bg-gray-50 h-full">
                <div className="text-sm py-6 sticky">
                  <div className="w-full text-center">
                    <a className="uppercase" href="#">
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
                      {/* <img className="mx-auto" src="src/img/ads/250.jpg" alt="advertisement area"/> */}
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
