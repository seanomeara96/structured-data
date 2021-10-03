import { Component } from "react";
import NecessaryItems from "./necessaryItems";
import EstimatedCost from "./estimatedCost";
import EstimatedTime from "./estimatedTime";
import Button from "./button";
import Steps from "./steps";
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
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.props.fields.title}
              onChange={(e) => this.props.updateTitle(e.target.value)}
            />
          </div>
          <div className="three fields">
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
          </div>
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
