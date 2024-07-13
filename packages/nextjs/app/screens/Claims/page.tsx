const Claims = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-100 shadow-xl rounded-md">
        <h1 className="text-2xl font-bold text-center mt-3">Claim Form</h1>
        <div className="card-body">
          <div className="flex flex-col">
            <p>Claim Amount: </p>
            <input type="text" placeholder="Enter Claim Amount" className="input input-bordered" />
            <p>Claim Reason: </p>
            <select className="select select-bordered rounded-box shadow mt-2">
              <option>Weather Damage</option>
              <option>Animal Damage</option>
              <option>Fire Damage</option>
              <option>Other</option>
            </select>
            <p>Claim Description: </p>
            <textarea className="textarea h-24 textarea-bordered" placeholder="Enter Claim Description"></textarea>
          </div>
        </div>
        <button className="btn btn-active btn-primary">Submit</button>
      </div>
    </div>
  );
};
export default Claims;
