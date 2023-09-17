import Link from "next/link";
// export default function Divider() {
//     return (
//       <div className="relative py-8 bg-white">
//         <div className="absolute inset-0 flex items-center" aria-hidden="true">
//           <div className="w-full lg:border-t-2 border-gray-300" />
//         </div>
//         <div className="relative flex justify-center">
//           <span className="bg-white px-2 lg:text-3xl text-xl font-semibold text-gray-500">
//           <div class="relative overflow-hidden group"><span class="invisible">International</span><span class="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">International</span><span class="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">International</span></div>
//           </span>
//         </div>
//       </div>
//     )
//   }

import { PlusIcon } from "@heroicons/react/20/solid";

export default function Divider() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full  border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
          <h2 class="text-black lg:text-3xl text-xl font-bold">
            <span class="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
            Asian
          </h2>
        <Link
          href={"#"}
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 text-sm lg:text-base font-semibold text-gray-900 "
        >
          <div class="group text-gray-800 hover:text-rose-950 transition ease-in-out duration-200">
            See more{" "}
            <span
              aria-hidden="true"
              class="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
