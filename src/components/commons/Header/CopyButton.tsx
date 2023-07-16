import { CopyIcon } from "@/components/icons/CopyIcon";

interface CopyByttonProps {
  textToCopy: string;
}
export const CopyButton = ({ textToCopy }: CopyByttonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex justify-center items-center"
    >
      <CopyIcon title="Clique aqui para copiar" className="fill-white" />
    </button>
  );
};
