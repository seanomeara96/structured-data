export default function EstimatedTime(props) {
  return (
    <div className="field">
      <label>Estimated Time</label>
      <select
        onChange={(e) => {
          props.intervalUpdateHandler(e.target.value);
        }}
        value={props.intervalValue}
        id="estimated-time-interval"
        name="estimated-time-interval"
      >
        <option value="minutes">Minutes</option>
        <option value="hours">Hours</option>
      </select>
      <input
        placeholder="Estimated Time"
        type="text"
        name="estimated-time-duration"
        id="estimated-time-duration"
        onChange={(e) => props.durationUpdateHandler(e.target.value)}
        value={props.durationValue}
      />
    </div>
  );
}
