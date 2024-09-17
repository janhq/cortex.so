import React from "react";

const Announcement = () => {
  return (
    <div className="inline-flex items-center justify-center alert p-4 rounded-xl mx-auto bg-yellow-50">
      {/* Please change this when cortex stable we can use from latest release endpoint */}
      <div className="flex items-center gap-2">
        <span>🚧</span>
        <p className="mb-0 text-neutral-800">
          Cortex.cpp v1.0 is comming soon.
          <a href="/docs" className="no-underline hover:no-underline">
            {" "}
            Read more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Announcement;
