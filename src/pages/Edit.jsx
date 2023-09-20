import { useSearchParams } from "react-router-dom";
import React, { createRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Text } from "../components/Text";
import {exportComponentAsJPEG} from 'react-component-export-image';


export const EditPage = () => {
  const memeRef = createRef();
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div ref={memeRef} style={{width:"800px", border: "2px solid "}} className="m-3">
        <img src={params.get("url")} width="300px" height="400px" />
        {Array(count)
          .fill(0)
          .map(() => (
            <Text />
          ))}
      </div>
      <Button onClick={addText} className="mx-3">
        Add text
      </Button>
      <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>
        Save
      </Button>
    </div>
  );
};
