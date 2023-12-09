const Loading = () => {
  const items = [1, 2, 3, 4];

  return (
    <div>
      <div className="grid grid-cols-4 m-5 place-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white rounded-lg shadow dark:bg-gray-700 my-5 h-96 animate-pulse"
            style={{
              animationDelay: `${index * 0.05}s`,
              animationDuration: "0.5s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
