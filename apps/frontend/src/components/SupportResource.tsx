interface SupportResourceProps {
  name: string;
  providerName: string;
  tags: string[];
  onClick?: () => void;
}

const SupportResource = ({
  name,
  providerName,
  tags,
  onClick,
}: SupportResourceProps) => (
  <div
    onClick={onClick}
    className="p-3 flex w-11/12 mt-2 border border-gray-400 rounded-md justify-between"
  >
    <div>
      <p className="text-xl">Name: {name}</p>
      <p className="text-gray-500 font-light">Provider name: {providerName}</p>
      <p>
        Tags:{" "}
        {tags.map((tag) => (
          <span className="bg-purple-500 m-1 rounded-2xl px-2">{tag}</span>
        ))}
      </p>
    </div>
  </div>
);

export default SupportResource;
