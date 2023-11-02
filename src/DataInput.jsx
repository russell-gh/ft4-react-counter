const DataInput = ({ item, onInputCallBack }) => {
  switch (item.type) {
    case "text":
      return (
        <>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type="text"
            id={item.name}
            name={item.name}
            onInput={onInputCallBack}
          />
        </>
      );

    case "number":
      return (
        <>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type="number"
            id={item.name}
            name={item.name}
            onInput={onInputCallBack}
          />
        </>
      );

    default:
      console.log("No case exists for: ", item.type);
      break;
  }
};

export default DataInput;
