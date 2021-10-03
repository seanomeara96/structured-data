import { Component } from "react";

export default class NecessaryItems extends Component {
  render() {
    return (
      <div>
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
        <i className="ui button" onClick={this.props.addItem}>
          Add Item
        </i>
      </div>
    );
  }
}

function ListItem(props) {
  return (
    <div className="field">
      <label>Item Type</label>
      <select
        id="type"
        onChange={(e) => props.updateItem(props.id, { type: e.target.value })}
        value={props.type}
        name="item-type"
      >
        <option value="tool">Tool</option>
        <option value="supply">Supply</option>
      </select>
      <label>Item Name</label>
      <input
        id="name"
        name="name"
        onChange={(e) => props.updateItem(props.id, { name: e.target.value })}
        value={props.name}
        type="text"
        required
        placeholder="Item Name"
      />
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
      <label>Item Img Url</label>
      <input
        id="imgUrl"
        name="image-url"
        value={props.imgUrl}
        onChange={(e) => props.updateItem(props.id, { imgUrl: e.target.value })}
        type="text"
      />
      <label>Item Img Alt text</label>
      <input
        id="image-alt"
        name="image-alt"
        value={props.imgAlt}
        onChange={(e) => props.updateItem(props.id, { imgAlt: e.target.value })}
        type="text"
      />
      <i
        className="ui button"
        onClick={() => {
          props.removeItem(props.id);
        }}
      >
        Remove This Item
      </i>
    </div>
  );
}
