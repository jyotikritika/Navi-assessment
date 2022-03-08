export default function List(props) {
  console.log({ props });
  return <div className="listItem">{props.data.name}</div>;
}
