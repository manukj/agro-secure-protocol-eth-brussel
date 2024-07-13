"use client";

const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <figure>
        <img src="/farm.png" width={200} height={200} />
      </figure>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">Agro Chain Protocol</h1>
      </div>
      <p>Get your crop Insured</p>
      <div className="card-actions justify-end">
        <div className="btn btn-primary">Get Insured</div>
        <div className="btn btn-primary">Claim</div>
      </div>
    </div>
  );
};
export default LoginScreen;
