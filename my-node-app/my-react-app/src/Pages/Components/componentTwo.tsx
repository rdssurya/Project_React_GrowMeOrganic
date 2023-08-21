import React, { useState } from "react";

interface ComponentTwoProps {
  name: string;
  ind: string;
  subDept: string[];
}

export default function ComponentTwo(props: ComponentTwoProps) {
  const [checked, setChecked] = useState(false);
  const [childCheckboxes, setChildCheckboxes] = useState<boolean[]>(
    new Array(props.subDept.length).fill(false)
  );
  const [showChildren, setShowChildren] = useState(true);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    setChildCheckboxes(childCheckboxes.map(() => newValue));
  };

  const handleInputChangeChild = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    const updatedChildCheckboxes = [...childCheckboxes];
    updatedChildCheckboxes[index] = newValue;
    setChildCheckboxes(updatedChildCheckboxes);
    
    setChecked(updatedChildCheckboxes.every((isChecked) => isChecked));
  };

  interface ChildrenProps {
    forClass: string;
    forId: number;
    name: string;
  }

  function Children(props: ChildrenProps) {
    return (
      <div>
        <input
          type="checkbox"
          className={props.forClass}
          id={props.forClass + "" + (props.forId + 1)}
          onChange={handleInputChangeChild(props.forId)}
          checked={childCheckboxes[props.forId]}
        />
        {props.name}
      </div>
    );
  }

  return (
    <>
      <div>
        <button onClick={handleClick} className={props.ind}>
          {showChildren ? "-" : "+"}
        </button>
        <input
          id={props.ind}
          type="checkbox"
          onChange={handleInputChange}
          checked={checked}
        />
        {props.name}
      </div>
      {showChildren && (
        <div
          id={"children" + props.ind}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "40px",
          }}
        >
          {props.subDept.map((ele, index) => (
            <Children key={ele} name={ele} forClass={props.ind} forId={index} />
          ))}
        </div>
      )}
      <br />
    </>
  );
}



