import Image from "next/image";

export const Card = ({ card }) => {
  const { image, title, description, author, price } = card;
  return (
    <>
      <div className="shadow-lg border-2 border-white rounded-xl">
        <div className="relative">
          <Image src={image} width={300} height={200} />
        </div>
        <div className="p-5">
          <div>
            <h1 className="text-xl font-bold py-3">{title}</h1>
            <p>{description}</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p>{author}</p>
              <p>RWF {price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
