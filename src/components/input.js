import { Component } from "react";
import NecessaryItems from "./necessaryItems";
import EstimatedCost from "./estimatedCost";
import EstimatedTime from "./estimatedTime";
import Button from "./button";
export default class Input extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <form className="ui form">
          <EstimatedCost
            updateHandler={this.props.updateEstimatedCost}
            value={this.props.fields.estimatedCost}
          />
          <EstimatedTime
            intervalUpdateHandler={this.props.updateEstimatedTimeInterval}
            durationUpdateHandler={this.props.updateEstimatedTimeDuration}
            intervalValue={this.props.fields.estimatedTimeInterval}
            durationValue={this.props.fields.estimatedTimeDuration}
          />
          <div>
            <h2>Necessary Items:</h2>
            {this.props.fields.includesNecessaryItems ? (
              <NecessaryItems
                addItem={this.props.addNecessity}
                removeItem={this.props.removeNecessity}
                updateItem={this.props.updateNecessity}
                itemList={this.props.fields.necessities}
                changeHandler={this.props.updateNecessities}
              />
            ) : (
              <Button clickHandler={this.props.includeNecessaryItems}>
                Include Tools &amp; Materials
              </Button>
            )}
          </div>
          <div>
            <h2>Steps</h2>
            {this.props.fields.includesSteps ? (
              <Steps
                steps={this.props.fields.steps}
                addStep={this.props.addStep}
                updateStepTextInput={this.props.updateStepTextInput}
                addNewDirection={this.props.addNewDirection}
                updateDirection={this.props.updateDirection}
                removeDirection={this.props.removeDirection}
              />
            ) : (
              <Button clickHandler={this.props.includeSteps}>
                Include Steps
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

function Steps(props) {
  return (
    <div>
      {props.steps.map((step) => (
        <Step
          key={step.id}
          updateStepTextInput={props.updateStepTextInput}
          updateStepUrl={props.updateStepUrl}
          addDirection={props.addDirection}
          updateDirections={props.updateDirections}
          addNewDirection={props.addNewDirection}
          removeDirection={props.removeDirection}
          updateDirection={props.updateDirection}
          removeDirection={props.removeDirection}
          step={step}
        />
      ))}
      <Button clickHandler={props.addStep}>Add Step</Button>
    </div>
  );
}

function Step(props) {
  const { id, name, rank, url, directions, imgSrc, imgAlt } = props.step;
  return (
    <div className="field">
      <h3>{`Step ${rank + 1}`}</h3>
      <label>Step Title</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={({ target }) =>
          props.updateStepTextInput(id, target.name, target.value)
        }
        placeholder="Step Title"
      />
      <label>Step URL</label>
      <input
        type="text"
        name="url"
        onChange={({ target }) =>
          props.updateStepTextInput(id, target.name, target.value)
        }
        placeholder="Step URL"
        value={url}
      />
      <label>Image Src</label>
      <input
        type="text"
        name="imgSrc"
        value={imgSrc}
        onChange={({ target }) =>
          props.updateStepTextInput(id, target.name, target.value)
        }
      />
      <label>Img Alt</label>
      <input
        type="text"
        name="imgAlt"
        value={imgAlt}
        onChange={({ target }) =>
          props.updateStepTextInput(id, target.name, target.value)
        }
      />
      <label>Directions</label>
      {directions.map((direction) => (
        <div>
          <textarea
            id={direction.id}
            value={direction.contemt}
            onChange={(e) => {
              props.updateDirection(id, direction.id, e.target.value);
            }}
          ></textarea>
          <Button clickHandler={() => props.removeDirection(id, direction.id)}>
            Remove Direction
          </Button>
        </div>
      ))}
      <Button clickHandler={() => props.addNewDirection(id)}>
        Add Direction
      </Button>
    </div>
  );
}
