import Button from "./button";
import Step from "./step";
export default function Steps(props) {
  return (
    <div>
      {props.steps.map((step, index) => (
        <Step
          key={step.id}
          rank={index}
          updateStepTextInput={props.updateStepTextInput}
          updateStepUrl={props.updateStepUrl}
          addDirection={props.addDirection}
          updateDirections={props.updateDirections}
          addNewDirection={props.addNewDirection}
          removeDirection={props.removeDirection}
          updateDirection={props.updateDirection}
          removeDirection={props.removeDirection}
          step={step}
          removeStep={props.removeStep}
        />
      ))}
      <Button mod="positive" clickHandler={props.addStep}>
        Add Step
      </Button>
    </div>
  );
}
