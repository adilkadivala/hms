import Button from "./Button";

const Modal = ({ onClose, title, children, footer }) => {
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center  bg-opacity-50"
      role="dialog"
      aria-labelledby="modal-title"
      tabIndex="-1"
    >
      <div className="bg-white dark:bg-secondry border dark:border-white text-white rounded-lg shadow-lg w-full sm:max-w-lg">
        <div className="flex justify-between items-center py-3 px-4 border-b">
          <h3
            id="modal-title"
            className="font-bold text-gray-800 dark:text-white"
          >
            {title}
          </h3>
          <Button
            className="p-2 rounded-full bg-gray-100 text-gray-800"
            aria-label="Close"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </Button>
        </div>
        <div className="p-4 overflow-y-auto">{children}</div>
        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
