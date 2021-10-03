export default function EstimatedCost(props) {
  return (
    <div className="field">
      <label>Estimated Cost</label>
      <input
        type="text"
        name="estimated-cost"
        placeholder="Estimated Cost"
        onChange={(e) => {
          props.updateHandler(e.target.value);
        }}
        value={props.value}
      />
    </div>
  );
}
