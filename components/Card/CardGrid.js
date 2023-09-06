import { Card } from "./Card";

export const CardGrid = ({ data, type }) => {
  return (
    <>
      <div className={`grid grid-cols-3 gap-10`}>
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
