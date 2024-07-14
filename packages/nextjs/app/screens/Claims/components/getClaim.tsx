const GetClaim = () => {
  return (
    <div>
      <div className="modal-box">
        <div className="flex flex-col place-content-center place-items-center place-self-center">
          <img src="/requestSent.png" className="justify-center" />
          <p className="text-lg mb-8 text-center">Your claim request has been successfully submitted.</p>
        </div>
        <div className="modal-action">
          <form method="modal-box" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetClaim;
