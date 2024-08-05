import Image from "next/image";
import Link from "next/link";
import { categories } from "../data/data";

function Categories() {
  return (
    <div className="my-20">
      <h1 className="text-2xl font-semibold ml-[10%] mb-10">categories</h1>
      <div className=" px-4 overflow-x-scroll scrollbarHidden">
        <div className="flex gap-5 w-max">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/list/${category.id}?cat=${category.name}`}
            >
              <div className="flex flex-col items-start gap-3">
                <Image
                  src={category.image}
                  alt="d"
                  width={400}
                  height={400}
                  className="w-[250px] h-[280px] rounded-md object-cover"
                />
                <p>{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
