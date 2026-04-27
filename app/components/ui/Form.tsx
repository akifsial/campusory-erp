
export default function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-md"
    >
      {children}
    </form>
  );
}