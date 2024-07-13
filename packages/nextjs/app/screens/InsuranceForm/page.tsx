const InsuranceForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-xl">
        <h1 className="text-2xl font-bold text-center">Insurance details</h1>
        <div className="card-body">
          <div className="flex flex-col">
            <p>Farm Size: </p>
            <input type="range" min="100" max="2000" className="range" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InsuranceForm;
