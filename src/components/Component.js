import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);

  return (
    <>
    {    
        error && <div>{somethingNotDefined}</div>
    }
    </>
  );
};

export default Component;
