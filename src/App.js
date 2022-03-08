import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./List";
import { addList } from "./dashboardSlice";

export default function App() {
  const listCount = useSelector((state) => state.dashboard.listCount);
  const list = useSelector((state) => state.dashboard.list);
  const dispatch = useDispatch();

  const [listTitle, setListTitle] = useState("");

  function addToList() {
    let temp = { id: listCount + 1, name: listTitle, cards: [] };
    setListTitle("");
    dispatch(addList(temp));
  }
  return (
    <div className="App">
      <h1 className="heading">Dashboard</h1>
      <div className="listContainer">
        {list.length ? (
          list.map((item, idx) => {
            console.log({ item });
            return <List key={idx} data={item} />;
          })
        ) : (
          <div></div>
        )}
        <div className="addListContainer">
          <input
            type="text"
            placeholder="Enter list title..."
            value={listTitle}
            onInput={(e) => setListTitle(e.target.value)}
          />
          <button className="addList" onClick={addToList}>
            add list
          </button>
        </div>
      </div>
    </div>
  );
}
