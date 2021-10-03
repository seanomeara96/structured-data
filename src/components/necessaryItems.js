import { Component } from "react";

export default class NecessaryItems extends Component {
  render() {
    return (
      <div>
        {this.props.itemList.length ? (
          <div className="ui cards">
            {this.props.itemList.map(
              ({ id, type, name, itemUrl, imgUrl, imgAlt }) => (
                <ListItem
                  key={id}
                  id={id}
                  type={type}
                  name={name}
                  itemUrl={itemUrl}
                  imgUrl={imgUrl}
                  imgAlt={imgAlt}
                  removeItem={this.props.removeItem}
                  updateItem={this.props.updateItem}
                />
              )
            )}
          </div>
        ) : (
          ""
        )}
        <div style={{ margin: "1rem 0" }}>
          <i className="positive ui button" onClick={this.props.addItem}>
            Add Item
          </i>
        </div>
      </div>
    );
  }
}

function ListItem(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="field">
          <label>Item Type</label>
          <select
            id="type"
            onChange={(e) =>
              props.updateItem(props.id, { type: e.target.value })
            }
            value={props.type}
            name="item-type"
          >
            <option value="tool">Tool</option>
            <option value="supply">Supply</option>
          </select>
        </div>
        <div className="field">
          <label>Item Name</label>
          <input
            id="name"
            name="name"
            onChange={(e) =>
              props.updateItem(props.id, { name: e.target.value })
            }
            value={props.name}
            type="text"
            required
            placeholder="Item Name"
          />
        </div>
        <div className="field">
          <label>Item Url</label>
          <input
            id="itemUrl"
            placeholder="Link to item where possible"
            name="item-url"
            value={props.itemUrl}
            onChange={(e) =>
              props.updateItem(props.id, { itemUrl: e.target.value })
            }
            type="text"
          />
        </div>
        <div className="field">
          <label>Item Img Url</label>
          <input
            id="imgUrl"
            name="image-url"
            value={props.imgUrl}
            onChange={(e) =>
              props.updateItem(props.id, { imgUrl: e.target.value })
            }
            type="text"
          />
        </div>
        <div className="field">
          <label>Item Img Alt text</label>
          <input
            id="image-alt"
            name="image-alt"
            value={props.imgAlt}
            onChange={(e) =>
              props.updateItem(props.id, { imgAlt: e.target.value })
            }
            type="text"
          />
        </div>
        <i
          className="negative ui button"
          onClick={() => {
            props.removeItem(props.id);
          }}
        >
          Remove This Item
        </i>
      </div>
    </div>
  );
}
