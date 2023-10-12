import Image from "next/image";
import logo from "@/public/Screenshot 2023-07-10 133502_auto_x2.jpg";
import Link from "next/link";
import { Suspense } from "react";
import MealsFilters from "@/components/filtersGategory/filters";
import SearchInput from "@/components/seacrhInput";
import MealsSearch from "../components/mealsSection";
import AnimatedCircles from "@/components/loading";

export interface props {
  searchParams:
    | {
        category: string;
      }
    | undefined;
}

export default function Home({ searchParams }: props) {
  return (
    <main className="marginContent  flex flex-col gap-10">
      <div className="bg-Theme rounded-3xl px-7 grid lg:grid-cols-2  ">
        <div className="flex flex-col gap-4 max-lg:mt-2  my-auto ml-5 max-lg:text-center lg:ml-10">
          <h1 className="xl:text-6xl text-4xl font-medium">
            Meal <br />
            Recipes
          </h1>
          <h1>
            Meal Recipes are like our big,
            <br /> constantly-in-progress dinner <br /> party-and you&lsquo;re
            invited
          </h1>
          <Link
            href={"/search"}
            className="font-medium hover:text-selectedGategory duration-200"
          >
            Explor meals {"  "}--{">"}
          </Link>
        </div>
        <Image
          src={logo}
          width={1000}
          height={900}
          priority
          alt="chef"
          className="w-[600px] h-[200px] md:h-[400px] m-auto"
        />
      </div>
      {/* meals seaction filters and view  */}
      <div className="lg:grid grid-cols-4 gap-20">
        <MealsFilters/>
        <div className=" col-span-3 max-md:text-sm  ">
          <SearchInput />
          <Suspense fallback={<AnimatedCircles/>} key={searchParams?.category}>
            <MealsSearch searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
