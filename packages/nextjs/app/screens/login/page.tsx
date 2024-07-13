const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">Agro Chain Protocol</h1>
      </div>
      <div>
        <p className="mt-2">Get your crop Insured</p>
        <div className="mt-4 flex space-x-4 text-center">
          <div className="btn btn-primary">Get Insured</div>
          <div className="btn btn-primary">Claim</div>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;
