import Image from "next/image";

export const Card = ({ card }) => {
  const { image, title, description, author, price } = card;
  return (
    <>
      <div className="shadow-lg rounded-xl text-white bg-outer-space-rgb">
        <div className="relative">
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
          <div className="flex justify-between items-center py-2">
            <p className="text-sm font-bold">{author}</p>
            <p className="p-1 text-xs rounded-md border-gray border-2 bg-transparent">
              {price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
