const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] text-center px-4">
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <p className="text-2xl text-slate-600">
        <span className="text-[#597F30] font-bold">Not Found,</span> You may have lost your path.
      </p>
    </div>
  );
};

export default NotFound;