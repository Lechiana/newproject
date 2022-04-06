import { useGetBooksByIDQuery } from "./Books";

function App() {
  const { data, error, isLoading } = useGetBooksByIDQuery();

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="mt-32"></div>
          <ul>
            {data.map((books) => (
              <div className="">
                <div className="card w-2/5 bg-base-content text-black drop-shadow-xl my-5 container mx-auto ">
                  <figure className="mt-5">
                    <img
                      className="h-48"
                      src={books.thumbnailUrl}
                      alt="Image Books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{books.title}</h2>
                    <p>ชื่อผู้แต่ง: {books.authors}</p>
                    <p>รหัส ISBN: {books.isbn}</p>
                    <p>{books.shortDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default App;
