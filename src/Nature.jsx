import { Link } from 'react-router'

function Nature() {
  return (
    <div className="bg-full text-white">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl mb-8">Nature Page</h1>
        <p className="max-w-xl text-center">
          <Link to="/" className="underline mt-2">Return to the crossroads...</Link>
        </p>
      </div>
    </div>
  );
}

export default Nature
