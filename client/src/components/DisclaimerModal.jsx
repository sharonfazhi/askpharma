export default function DisclaimerModal({ onAccept }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-teal-800/50 rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-white">Medical disclaimer</h2>
        </div>

        <div className="space-y-3 text-sm text-gray-300 leading-relaxed mb-6">
          <p>
            <strong className="text-white">AskPharma is not a doctor.</strong> This chatbot provides general health information only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            It will never prescribe specific medications. Always consult a licensed healthcare provider before starting, stopping, or changing any treatment.
          </p>
          <p className="text-teal-400 font-medium">
            In an emergency, call your local emergency number immediately.
          </p>
        </div>

        <button
          onClick={onAccept}
          className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-2.5 rounded-xl transition-colors duration-200"
        >
          I understand — continue
        </button>
      </div>
    </div>
  );
}
