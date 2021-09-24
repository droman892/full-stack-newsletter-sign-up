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
    return (
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <label class="active" for="comments"> Additional Comments (Optional)</label>  
            <textarea id="comments" class="materialize-textarea" data-length="170"></textarea>        
          </div>
        </div>
        )
    }
}
export default TextArea;