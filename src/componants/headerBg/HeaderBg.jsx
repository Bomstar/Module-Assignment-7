function HeaderBg() {
  return (
    <div className="flex items-center h-[500px] px-32 [background:linear-gradient(0deg,rgba(21,11,43,0.9)_5%,rgba(21,11,43,0)_100%),url('https://i.ibb.co/VcD25xR7/2b8ff4bed57b5fb5ad84c9f6a9b1eb9782e9b11b.jpg')_lightgray_0px_-18.896px_/_100%_123.31%_no-repeat] bg-no-repeat bg-center bg-contain rounded-2xl bg-amber-100">
      <div className="text-center space-y-10 text-white">
        <div className="space-y-7">
          <h1 className="text-5xl leading-16 font-black">
            Personalized Cooking Workshops for Every Skill Level
          </h1>
          <p>
            Where every dish is a masterpiece. Join our head chef in celebrating
            seasonal ingredients, time‑honored techniques, and bold new
            flavors—served with passion on every plate.
          </p>
        </div>
        <div className="space-x-8 [&_button]:cursor-pointer font-semibold">
          <button className="py-3 px-5 border-2 rounded-full border-amber-900 bg-amber-600">
            Explore Now
          </button>
          <button className="py-3 px-5 border-2 rounded-full border-amber-600">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBg;
