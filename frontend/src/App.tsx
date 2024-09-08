"use client";

import "./App.css";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import SingleDataCard from "./components/SingleDataCard";

import { useEffect, useRef, useState } from "react";
// import { LOCAL_STORAGE_STATE_SAVE_KEY } from "./utils";
import { saveOrderingInformationInLocalStorage } from "./services";
import { Spinner } from "./components/Spinner";
import { arraysEqual } from "./utils";

function App() {
  const initialValues = useRef([] as string[]);

  const [parentRef, values, setValues] = useDragAndDrop([]);

  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdatedTimeStamp, setLastUpdatedTimeStamp] = useState("");

  // auto save that triegger after 5 secs of any changes made to the layout
  useEffect(() => {
    if (values.length > 0 && !arraysEqual(initialValues.current, values)) {
      const t = setTimeout(() => {
        setIsUpdating(true);
        saveOrderingInformationInLocalStorage(values)
          .then((res) => {
            // we can add an toast here that sais update done successfully
            setLastUpdatedTimeStamp(new Date().toString());
            setIsUpdating(false);
          })
          .catch((err) => console.error(err));
      }, 5000);

      return () => {
        clearTimeout(t);
      };
    }
  }, [values]);

  useEffect(() => {
    if (values.length === 0) {
      fetch(`http://localhost:3000/info`)
        .then((res) => res.json())
        .then((res) => {
          initialValues.current = res;
          setValues(res);
        })
        .catch((e) => {});
    }
  }, [setValues, values]);

  return (
    <div>
      <div className="w-full h-full">
        <div ref={parentRef as any} className="grid  grid-cols-3 gap-2 ">
          {values.length > 0 && (
            <>
              <SingleDataCard
                dataIndex={+values[0]}
                data-label={values[0]}
                key={values[0]}
              />

              <SingleDataCard
                dataIndex={+values[1]}
                data-label={values[1]}
                key={values[1]}
              />

              <SingleDataCard
                dataIndex={+values[2]}
                data-label={values[2]}
                key={values[2]}
              />
              <SingleDataCard
                dataIndex={+values[3]}
                data-label={values[3]}
                key={values[3]}
              />

              <SingleDataCard
                dataIndex={+values[4]}
                data-label={values[4]}
                key={values[4]}
              />
            </>
          )}
        </div>
      </div>

      {!arraysEqual(initialValues.current, values) && lastUpdatedTimeStamp && (
        <div>
          <div>Last updated</div>
          <div>{lastUpdatedTimeStamp}</div>
        </div>
      )}
      {isUpdating && (
        <div className="fixed inset-0 z-10 bg-slate-100/50 w-full h-full ">
          <div className="flex items-center justify-center w-full h-full">
            <Spinner size="xlarge" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
