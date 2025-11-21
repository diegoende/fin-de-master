import im_react from '../assets/react.svg';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* <h3 className="text-xl font-bold">Unir</h3> */}
      <div className="flex items-center gap-4">
        <img
          src={im_react}
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
        <span className="text-gray-600">Diego Alfredo Enderica Ortega</span>
      </div>
    </header>
  );
}
