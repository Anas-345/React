export default function Info({head, body, ...prop}) {
  return (
    <div className="flex text-sm w-full justify-between gap-1 px-10 py-1">
      <h3 className="font-bold">{head}</h3>
      <p>{body}</p>
    </div>
  );
}
