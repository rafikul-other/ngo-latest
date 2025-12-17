import React from "react";

type ModalProps = {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
};

const DonateModal = ({ setOpenModal, openModal }: ModalProps) => {
  if (!openModal) return null;

  return (
    <div
      id="glass-modal"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpenModal(false)}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg shadow-2xl rounded-2xl border border-white/20 dark:border-gray-700/40 overflow-hidden animate-fadeInUp">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20 dark:border-gray-600/30">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            Scan Here to pay
          </h3>
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="text-gray-500 hover:text-red-500 transition rounded-full p-2 hover:bg-white/40 dark:hover:bg-gray-700 cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 text-gray-700 dark:text-gray-300">
          <p className="text-base leading-relaxed">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <div className="flex justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_y0wzCmmegQFFH3P71_qfRrKf8dcT0CpxA&s" alt="Scanner"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
