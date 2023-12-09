import React, { useEffect } from "react";

const Filter = ({ setPageNumber, characters, setFiltered, status, setStatus }) => {
  //filter logic (if there is empty string, status is any, others are evaluated with filter method)
  function handleChangeStatus(charStatus) {
    setStatus(charStatus);
    setPageNumber(1);

    if (charStatus === "") {
      return setFiltered(characters);
    }

    return setFiltered((prevFiltered) =>
      prevFiltered.filter((c) => c.status === charStatus)
    );
  }

  return (
    <div className="filter-btns">
      <button className={status === "" ? "btn-active" : ""} onClick={() => handleChangeStatus("")}>
        Any
      </button>
      <button className={status === "Alive" ? "btn-active" : ""} onClick={() => handleChangeStatus("Alive")}>
        Alive
      </button>
      <button className={status === "Dead" ? "btn-active" : ""} onClick={() => handleChangeStatus("Dead")}>
        Dead
      </button>
      <button className={status === "unknown" ? "btn-active" : ""} onClick={() => handleChangeStatus("unknown")}>
        Unknown
      </button>
    </div>
  );
};

export default Filter;
