import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore"
import { collection } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase";
import './CategoriesPage.css'

const CategoriesPage = () => {
  const [getdata, setgetdata] = useState("")

  const query = collection(db, "products-SMARTPHONES")
  const [docs, loading] = useCollectionData(query);

  setgetdata(docs)
  console.log(docs)

  return (
    <div className="Accordion">
      <div>{
        docs.map((doc, i) => {
          <div key={Math.round()}>
            {console.log((doc.price))}
            {console.log((i))}
            <li key={i}>
              {doc.price}
            </li>
          </div>
        })
      }
      </div>
    </div >
  );
}


export default CategoriesPage;
