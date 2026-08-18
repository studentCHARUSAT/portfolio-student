function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <p>Error: {message}</p>

      <button onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;