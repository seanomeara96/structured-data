import { Component } from "react";
import "./App.css";
import Input from "./components/input";
import Output from "./components/output";
class App extends Component {
  state = {
    title: "",
    estimatedTimeInterval: "minutes",
    estimatedTimeDuration: "",
    estimatedCost: "",
    necessities: [],
    steps: [],
    includesNecessaryItems: false,
    includesSteps: false,
  };
  updateTitle = (title) => this.setState({ title });
  updateEstimatedCost = (cost) => this.setState({ estimatedCost: cost });
  updateEstimatedTimeDuration = (duration) =>
    this.setState({ estimatedTimeDuration: duration });
  updateEstimatedTimeInterval = (interval) =>
    this.setState({ estimatedTimeInterval: interval });
  updateNecessities = (necessaryItems) =>
    this.setState({ necessities: necessaryItems });
  includeNecessaryItems = () => this.setState({ includesNecessaryItems: true });
  includeSteps = () => this.setState({ includesSteps: true });
  updateNecessity = (id, update) => {
    let itemsList = [...this.state.necessities];
    let index = itemsList.findIndex((i) => i.id === id);
    itemsList[index] = { ...itemsList[index], ...update };
    this.setState({ necessities: itemsList });
  };
  removeNecessity = (id) => {
    this.setState({
      necessities: this.state.necessities.filter((item) => item.id !== id),
    });
  };
  addNecessity = () => {
    this.setState({
      necessities: [
        ...this.state.necessities,
        {
          id: "tool-supply" + parseInt(Math.random() * 1000),
          type: "tool",
          name: "",
          itemUrl: "",
          imgUrl: "",
          imgAlt: "",
        },
      ],
    });
  };
  newDirection = () => {
    return { id: "direction-id" + parseInt(Math.random() * 1000), content: "" };
  };
  addNewDirection = (stepId) => {
    let steps = [...this.state.steps];
    let step = steps.find((i) => i.id === stepId);
    step.directions.push(this.newDirection());
    this.setState({ steps });
  };
  addStep = () => {
    const newStep = {
      id: "step-id" + parseInt(Math.random() * 1000),
      name: "",
      url: "",
      imgSrc: "",
      imgAlt: "",
      directions: [this.newDirection()],
    };
    this.setState({ steps: [...this.state.steps, newStep] });
  };
  removeStep = (stepId) => {
    console.log("remove step", stepId);
    let steps = [...this.state.steps];
    steps = steps.filter((i) => i.id !== stepId);
    this.setState({ steps });
  };
  updateStepTextInput = (id, inputName, text) => {
    let stepsList = [...this.state.steps];
    let index = stepsList.findIndex((i) => i.id === id);
    stepsList[index][inputName] = text;
    this.setState({ steps: stepsList });
  };
  updateDirection = (stepId, directionId, content) => {
    let steps = [...this.state.steps];
    let step = steps.find((i) => i.id === stepId);
    let direction = step.directions.find((i) => i.id === directionId);
    direction.content = content;
    this.setState({ steps });
  };
  removeDirection = (stepId, directionId) => {
    let steps = [...this.state.steps];
    let step = steps.find((i) => i.id === stepId);
    let updatedDirections = step.directions.filter((i) => i.id !== directionId);
    step.directions = updatedDirections;
    this.setState({ steps });
  };
  render() {
    console.log("app state", this.state);
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ width: "80%", height: "100%", overflowX: "scroll" }}>
          <Input
            fields={this.state}
            updateTitle={this.updateTitle}
            updateEstimatedCost={this.updateEstimatedCost}
            updateEstimatedTimeDuration={this.updateEstimatedTimeDuration}
            updateEstimatedTimeInterval={this.updateEstimatedTimeInterval}
            updateNecessities={this.updateNecessities}
            includeNecessaryItems={this.includeNecessaryItems}
            addNecessity={this.addNecessity}
            updateNecessity={this.updateNecessity}
            removeNecessity={this.removeNecessity}
            includeSteps={this.includeSteps}
            addStep={this.addStep}
            removeStep={this.removeStep}
            addNewDirection={this.addNewDirection}
            updateStepTextInput={this.updateStepTextInput}
            updateDirection={this.updateDirection}
            removeDirection={this.removeDirection}
          />
        </div>
        <div style={{ width: "20%", height: "100%" }}>
          <Output fields={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
