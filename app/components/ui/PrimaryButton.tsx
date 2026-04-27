// components/ui/Button.tsx


export default function PrimaryButton({ text }) {
  return (
    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
      {text}
    </button>
  );
}