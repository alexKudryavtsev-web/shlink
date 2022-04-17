import React from "react";
import { Link } from "react-router-dom";
function LinksList({ links }) {
  if (!links.length) {
    return <p className="center">Ссылок пока нет</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Оригинальная</th>
          <th>Сокращенная</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>открыть</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LinksList;
