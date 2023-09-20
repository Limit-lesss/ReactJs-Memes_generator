import React, { useState } from "react";
import Draggable from "react-draggable";

export const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to Edit");
  return (
    <div>
      <Draggable>
        {editMode ? (
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onDoubleClick={() => setEditMode(false)}
          />
        ) : (
          <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
        )}
      </Draggable>
    </div>
  );
};
