import { useState } from "react";
import { Hourglass } from "react-loader-spinner";
function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <>
      <div className="flex  justify-center h-screen mt-10">
        <Hourglass
          visible={true}
          height="100"
          width="100"
          loading={loading}
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    </>
  );
}

export default Loader;
