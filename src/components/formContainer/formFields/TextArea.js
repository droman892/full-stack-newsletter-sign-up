import React, {Component} from "react";
import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#comments");
  M.CharacterCounter.init(textNeedCount);
});

export class TextArea extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {

    const textAreaLabel = this.props.textAreaLabel;

    return (
        <div class="row">
          <div class="input-field col s12">
            <label class="active" for="comments">{textAreaLabel}</label>  
            <textarea id="comments" class="materialize-textarea" data-length="170"></textarea>        
          </div>
        </div>
        )
    }
}
export default TextArea;