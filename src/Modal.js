import "./App.css";

export default function Modal({ show = false, message }) {
  if (!show ) {
    return null;
  } else if(show) {
    return (
      <div id='modal'>
        <div id="modal-content">
          <h1>You have been successfully registered!</h1>
        </div>
      </div>
    );
  }
}
