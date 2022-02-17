import { LitElement, html, css } from "lit-element";
import "@stoxy/form";

export default class TodoAdder extends LitElement {
  render() {
    return html`
      <stoxy-form
        key="todos"
        action="add"
        @submit=${() => {
          this.shadowRoot.querySelector("input").value = "";
        }}
      >
        <input
          type="text"
          name="task"
          placeholder="Add your to-do here..."
        />
        <input type="submit" value="Submit" />
      </stoxy-form>
    `;
  }

  static get styles() {
    return css`
      input[type="text"] {
        background: transparent;
        font-size: 16px;
        color: black;
      }
      input[type="submit"] {
        font-size: 16px;
        color: black;
        background: white;
        cursor: pointer;
      }

      input::placeholder,
      input::-webkit-input-placeholder {
        color: #fff;
      }
    `;
  }
}

if (!customElements.get("todo-adder")) {
  customElements.define("todo-adder", TodoAdder);
}
