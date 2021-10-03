import Button from "./button";
export default function Step(props) {
  const { id, name, rank, url, directions, imgSrc, imgAlt } = props.step;
  return (
    <div>
      <h3>{`Step ${rank + 1}`}</h3>
      <div className="two fields">
        <div className="field">
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
        </div>
        <div className="field">
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
        </div>
      </div>
      <div className="two fields">
        <div className="field">
          <label>Image Src</label>
          <input
            type="text"
            name="imgSrc"
            value={imgSrc}
            onChange={({ target }) =>
              props.updateStepTextInput(id, target.name, target.value)
            }
          />
        </div>
        <div className="field">
          <label>Img Alt</label>
          <input
            type="text"
            name="imgAlt"
            value={imgAlt}
            onChange={({ target }) =>
              props.updateStepTextInput(id, target.name, target.value)
            }
          />
        </div>
      </div>
      <div className="field">
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
            <div style={{ margin: "1rem 0" }}>
              <Button
                mod="negative"
                clickHandler={() => props.removeDirection(id, direction.id)}
              >
                Remove Direction
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: "1rem 0" }}>
        <Button mod="positive" clickHandler={() => props.addNewDirection(id)}>
          Add Direction
        </Button>
      </div>
    </div>
  );
}
