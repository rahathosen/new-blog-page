import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 2,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 3,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 4,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 5,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 6,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 7,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 8,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
];

export default function NewsFlex() {
  return (
    <div className="bg-white">
      <div className="bg-white py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full overflow-hidden">
              <div className="w-full py-3">
                <h2 class="text-black lg:text-3xl text-xl font-bold">
                  <span class="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                  Asian
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
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
                          <a href="#">{post.title}</a>
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
          </div>
        </div>
      </div>
    </div>
  );
}
