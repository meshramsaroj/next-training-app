const Rating = ({ rating }: any) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "text-yellow-500" : "text-gray-300"}
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.918 5.766 1.396 8.125L12 18.896l-7.346 3.874 1.396-8.125L.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            </button>
          );
        })}
      </div>
    );
  };

  export default Rating