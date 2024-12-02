import "./App.css"; // Assuming you will create a separate CSS file for styles

const App = () => {
  return (
    <div className="m-4 bg-white rounded-3xl overflow-hidden h-screen">
      <div className="navbar !p-8">
        <div className="logo">
          <img
            alt="Logo"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/4fdyJhA1EZQ4C6MTFFkcewSg9VMm1lRz5eC3pgIfOiPV2JaPB.jpg"
            width="40"
          />
        </div>
        <div className="links">
          <a href="#">Overview</a>
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
          <a href="#">Reviews</a>
          <a href="#">Insights</a>
        </div>
        <a className="cta" href="#">
          See pricing
        </a>
      </div>
      <div className="bg-gradient-to-tr from-[#0a0f1e] to-[#081f2e] min-h-screen flex justify-start py-16 items-center flex-col w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center slide-in-bottom-delay-100 slide-in-bottom">
            <p className="px-5 py-2 border rounded-full">
              BETA 2.0 AVAILABLE NOW
            </p>
          </div>
          <div className="max-w-50 slide-in-bottom-delay-200 slide-in-bottom pt-8">
            <h1 className="text-center !text-[5rem] font-bold leading-tight">
              Build websites
              <br />
              <span className="bg-[#f1e2de] !text-[#12715b] inline-flex px-1 rounded-2xl -rotate-2">
                effortlessly
              </span>
              <br />
              now or never!
            </h1>
          </div>
          <p className="slide-in-bottom-delay-300 slide-in-bottom pt-4">
            Easy-to-use and powerful page builder, your gateway to intuitive
            tools and expansive customization options that transform how you
            build websites.
          </p>
          <a
            className="cta slide-in-bottom-delay-400 slide-in-bottom my-8"
            href="#"
          >
            Get started <i className="fas fa-arrow-right"></i>
          </a>
          <p className="slide-in-bottom-delay-500 slide-in-bottom">
            No credit cards required - 14 days free trial.
          </p>
          <div className="avatars flex slide-in-bottom-delay-600 slide-in-bottom">
            <img
              alt="Avatar 1"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/Umk6a9tp1LKQFNsRUWBPZWc2fbLBJGcM1wJkW2Q2O7MzOR7JA.jpg"
              width="50"
            />
            <img
              alt="Avatar 2"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/U5QZy2030a5KHBhmwpfA6XqJj8ErGfLXBsLRsiVvUN5odi2TA.jpg"
              width="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
