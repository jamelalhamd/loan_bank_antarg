import "./App.css";

export default function Modal({ show = false, message = null }) {
  if (!show) {
    return null;
  }

  return (
    <div id='modal'>
      <div id="modal-content">
        <h1 style={{ color: message == null ? "green" : "red" }}>
          {message == null ? "You have been successfully registered!" : message}
        </h1>
      </div>
    </div>
  );
}
