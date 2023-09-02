import { Card } from "./Card";

export const CardGrid = ({ data, type }) => {
  return (
    <>
      <div className={`grid grid-cols-4 gap-5`}>
        {data ? (
          data.map((item) => (
            <div key={item.id}>
              <Card card={item} />
            </div>
          ))
        ) : (
          <p>No {type || "courses"} to show!</p>
        )}
      </div>
    </>
  );
};
