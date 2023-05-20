import React, { useEffect, useState } from "react";
import "../css/styleSubInfo.css";
import "../javascript/fetchcomp";

function FetchComp() {
  const [dataArr, setDataArr] = useState([]);
  const [typesub, setTypesub] = useState(null);
  const [NumSub, setNumSub] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/data")
      .then((response) => response.json())
      .then((data) => {
        setDataArr(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (dataArr.length > 0) {
      setTypesub(dataArr[dataArr.length - 1].premium);
      setNumSub(dataArr[dataArr.length - 1].numero_de_sub);
    }
  }, [dataArr]);

  return (
    <div>
      <div className="subinfo">
        <div id="typeSub">{typesub ? "Premium" : "plus"}</div>
        <div id="numSub">{NumSub}</div>
      </div>
    </div>
  );
}

export default FetchComp;
