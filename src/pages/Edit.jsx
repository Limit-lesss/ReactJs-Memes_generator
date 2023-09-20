import { useSearchParams } from "react-router-dom";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Text } from "../components/Text";

export const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <div className="m-3">
        <img src={params.get("url")} width="250px" />
        {
            Array(count).fill(0).map(() => <Text/>)
        }
      </div>
      <Button onClick={addText} className="mx-3">Add text</Button>
    </div>
  );
};
