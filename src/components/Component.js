import React, { useEffect, useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);

    useEffect(() => {
      if(props.change) {
        setError(true);
      }
    }, [props])

    return (
      <>
      {    
          error && <div>{somethingNotDefined}</div>
      }
      </>
    );
};

export default Component;
