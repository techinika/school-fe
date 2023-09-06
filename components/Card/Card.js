import Image from "next/image";

export const Card = ({ card }) => {
  const { image, title, description, author, price, featured } = card;
  return (
    <>
      <div
        className={`shadow-xl rounded-md text-white bg-outer-space-hex hover:-translate-y-2 hover:-rotate-2 cursor-pointer ${
          featured ? "border-4 border-ucla-blue-hex" : "border-4 border-outer-space-hex"
        }`}
      >
        <div className="relative h-60 overflow-hidden rounded-t-md">
          <Image
            src={image}
            fill={true}
            className="object-cover absolute"
            alt={title}
          />
        </div>
        <div className="p-5">
          <div>
            <h1 className="text-xl font-bold py-3">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="flex justify-between items-center pt-5 flex-wrap gap-5">
            <p className="text-xs font-bold">{author}</p>
            <p className="p-1 text-ucla-blue-hex text-xs border-ucla-blue-hex rounded-md border">
              {!price ? "Free" : "Subscription Required"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
