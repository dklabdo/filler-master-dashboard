"use client";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { FunctionSquareIcon, Tally1, Tally1Icon } from "lucide-react";
import React, { use, useState } from "react";

function AddRecomondation() {
  const [step, setStep] = useState(1);
  const [form, setform] = useState({
    faceForm: "",
    Volume: "",
    relachement: false,
  });
  const [recommandations, setRecommandations] = useState([]);
  const [localVolumes, setLocalVolumes] = useState(
    Array(recommandations.length).fill("")
  );
  const [securite, setsecurite] = useState([]);
  const [ZoneEviter, setZoneEviter] = useState([]);
  const [object, setobject] = useState([]);
  console.log(localVolumes);

  function next() {
    setStep(step + 1);
  }
  function prev() {
    setStep(step - 1);
  }

  async function submitForm() {
    // submit all data to the server
    try {
      const data = {
        form: { ...form , relachement: form.relachement === 'true' || form.relachement === true ? true : false },
        RecommandationsTitle: recommandations,
        Volume: localVolumes,
        securite,
        ZoneEviter,
        objective: object,
      };
      console.log(data);

      const res = await axios.post(
        "https://filermaster.onrender.com/api/recommendations",
        data
      );
      if(res.status === 201) {
        alert("Recomondation added successfully!");
        window.location.reload();
      }
      console.log(res);
      
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
    }
  }

  return (
    <DialogHeader>
      <DialogTitle>Add a recomondation</DialogTitle>
      {step === 1 && (
        <StepOne
          form={form}
          setform={setform}
          step={step}
          prev={prev}
          next={next}
        />
      )}
      {step === 2 && (
        <StepTwo
          setRecommandations={setRecommandations}
          recommandations={recommandations}
          step={step}
          prev={prev}
          next={next}
        />
      )}
      {step === 3 && (
        <StepThree
          localVolumes={localVolumes}
          setLocalVolumes={setLocalVolumes}
          data={recommandations}
          setData={setRecommandations}
          step={step}
          prev={prev}
          next={next}
        />
      )}
      {step === 4 && (
        <StepFour
          securite={securite}
          setsecurite={setsecurite}
          step={step}
          prev={prev}
          next={next}
        />
      )}
      {step === 5 && (
        <StepFive
          ZoneEviter={ZoneEviter}
          setZoneEviter={setZoneEviter}
          step={step}
          prev={prev}
          next={next}
        />
      )}
      {step === 6 && (
        <StepSex
          object={object}
          submitForm={submitForm}
          setobject={setobject}
          step={step}
          prev={prev}
          next={next}
        />
      )}
    </DialogHeader>
  );
}

function StepOne({ form, setform, step, next, prev }) {
  const optOne = ["Pyramid", "Pyramid inversée", "carré"];
  const optTwo = ["Déficit", "Conservé"];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(value);

    setform({
      ...form,
      [name]: value,
    });
  }

  return (
    <div>
      <DialogDescription>
        1. This step you should filll the form with the caracteristics of the
        patient (face form , volume and relachement) .
      </DialogDescription>
      <form className=" w-full h-64 ">
        <select
          name="faceForm"
          onChange={(e) => handleChange(e)}
          value={form.faceForm}
          className=" w-full mt-4 p-2 rounded-md border border-gray-300 "
        >
          <option value="" disabled selected>
            Forme generale du visage
          </option>
          {optOne.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <select
          name="Volume"
          onChange={(e) => handleChange(e)}
          value={form.Volume}
          className=" w-full mt-4 p-2 rounded-md border border-gray-300 "
        >
          <option value="" disabled selected>
            Volume
          </option>
          {optTwo.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => handleChange(e)}
          name="relachement"
          value={form.relachement}
          className=" w-full mt-4 p-2 rounded-md border border-gray-300 "
        >
          <option value="" disabled selected>
            Relachement
          </option>
          <option value={true}>Vrai</option>
          <option value={false}>Faux</option>
        </select>
      </form>
      <div className=" w-full flex justify-between items-center ">
        {step > 1 && (
          <button
            className=" bg-gray-600 scale-95 text-white rounded-md py-2 px-4 "
            onClick={prev}
          >
            {" "}
            Previous{" "}
          </button>
        )}
        {step < 4 && step >= 1 && (
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={next}
          >
            {" "}
            Next{" "}
          </button>
        )}
        {step === 4 && (
          <button className=" bg-green-600 scale-95 text-white rounded-md py-2 px-4 ">
            {" "}
            Finish{" "}
          </button>
        )}
      </div>
    </div>
  );
}
function StepTwo({ step, next, prev, recommandations, setRecommandations }) {
  const [input, setInput] = useState("");

  const addEt = () => {
    if (!input.trim()) return;
    // si recommandations est vide → on initialise [["A"]]
    if (recommandations.length === 0) {
      setRecommandations([[input]]);
    } else {
      // on ajoute dans le dernier tableau
      const copy = [...recommandations];
      copy[copy.length - 1].push(input);
      setRecommandations(copy);
    }
    setInput("");
  };

  const addOu = () => {
    if (!input.trim()) return;
    // on ajoute un nouveau tableau [["A"], ["B"]]
    setRecommandations([...recommandations, [input]]);
    setInput("");
  };

  return (
    <div>
      <DialogDescription>
        2 you should add a recomondation using a logic of : and / or.
      </DialogDescription>
      <div className=" w-full mt-3 py-3 h-64 ">
        <div className=" flex   ">
          <input
            type="text"
            placeholder="Recomondation"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=" outline-none mr-2 px-3 rounded-md border-[1.2px] py-2 border-black  w-full "
          />
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={addEt}
          >
            {" "}
            ET{" "}
          </button>
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={addOu}
          >
            {" "}
            OU{" "}
          </button>
        </div>
        <div className="py-3 w-full flex flex-wrap  ">
          {recommandations.map((group, index) => (
            <div
              key={index}
              className=" flex items-center bg-gray-200 gap-2 mb-2 "
            >
              {group.map((rec, idx) => (
                <span key={idx} className="  px-3 py-1 rounded-full ">
                  {" "}
                  {rec}{" "}
                </span>
              ))}
              {index < recommandations.length - 1 && (
                <Tally1Icon className=" text-gray-500 " />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className=" w-full flex justify-between items-center ">
        {step > 1 && (
          <button
            className=" bg-gray-600 scale-95 text-white rounded-md py-2 px-4 "
            onClick={prev}
          >
            {" "}
            Previous{" "}
          </button>
        )}
        {step < 4 && step >= 1 && (
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={next}
          >
            {" "}
            Next{" "}
          </button>
        )}
        {step === 4 && (
          <button className=" bg-green-600 scale-95 text-white rounded-md py-2 px-4 ">
            {" "}
            Finish{" "}
          </button>
        )}
      </div>
    </div>
  );
}
function StepThree({
  localVolumes,
  setLocalVolumes,
  step,
  next,
  prev,
  data,
  setData,
}) {
  function handleChange(index, value) {
    const newVolumes = [...localVolumes];
    newVolumes[index] = value;
    setLocalVolumes(newVolumes);
  }

  function handleNext() {
    // inject volumes into global data
    setData({ ...data, Volume: localVolumes });
    next();
  }

  return (
    <div>
      <DialogDescription>
        3 for each recomondation you should add a volume .
      </DialogDescription>
      <div className=" w-full h-64 ">
        {data.length === 0 && (
          <p className="w-full text-center py-28 text-gray-500 ">
            Please add at least one recomondation in the previous step.
          </p>
        )}
        <div className="w-full py-3 h-64 space-y-4 overflow-y-auto">
          {data.map((group, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="font-medium">{group.join(" + ")} :</span>
              <input
                type="text"
                value={localVolumes[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Volume..."
                className="outline-none px-3 rounded-md border-[1.2px] py-2 border-black w-40"
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full flex justify-between items-center ">
        {step > 1 && (
          <button
            className=" bg-gray-600 scale-95 text-white rounded-md py-2 px-4 "
            onClick={prev}
          >
            {" "}
            Previous{" "}
          </button>
        )}
        {step < 4 && step >= 1 && (
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={next}
          >
            {" "}
            Next{" "}
          </button>
        )}
        {step === 4 && (
          <button className=" bg-green-600 scale-95 text-white rounded-md py-2 px-4 ">
            {" "}
            Finish{" "}
          </button>
        )}
      </div>
    </div>
  );
}
function StepFour({ securite, setsecurite, step, next, prev }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  function addSecurite() {
    if (!title.trim() || !description.trim()) return;
    setsecurite([...securite, { title, description }]);
    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <DialogDescription>
        4 add security measures to take into account when applying the
        recomondation.
      </DialogDescription>
      <div className=" w-full mt-3 h-64 ">
        <div className="gap-2 flex   ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="titre"
            className=" outline-none mr-2 px-3 rounded-md border-[1.2px] py-2 border-black  w-full "
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            className=" outline-none mr-2 px-3 rounded-md border-[1.2px] py-2 border-black  w-full "
          />
          <button
            onClick={() => addSecurite()}
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
          >
            {" "}
            Add{" "}
          </button>
        </div>
        <div className=" w-full flex flex-wrap ">
          {securite.map((sec, index) => (
            <div
              key={index}
              className=" bg-gray-200 flex gap-1 items-center p-3 rounded-md m-2 "
            >
              <p className="text-sm font-semibold "> {sec.title}: </p>
              <p className=" text-sm "> {sec.description} </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full flex justify-between items-center ">
        {step > 1 && (
          <button
            className=" bg-gray-600 scale-95 text-white rounded-md py-2 px-4 "
            onClick={prev}
          >
            {" "}
            Previous{" "}
          </button>
        )}
        {step < 6 && step >= 1 && (
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={next}
          >
            {" "}
            Next{" "}
          </button>
        )}
        {step === 6 && (
          <button className=" bg-green-600 scale-95 text-white rounded-md py-2 px-4 ">
            {" "}
            Finish{" "}
          </button>
        )}
      </div>
    </div>
  );
}
function StepFive({ ZoneEviter, setZoneEviter, step, next, prev }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  function addSecurite() {
    if (!title.trim() || !description.trim()) return;
    setZoneEviter([...ZoneEviter, { title, description }]);
    setTitle("");
    setDescription("");
  }
  return (
    <div>
      <DialogDescription>
        5 add the zones to avoid when applying the recomondation.
      </DialogDescription>
      <div className=" w-full mt-3 h-64 ">
        <div className="gap-2 flex   ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="titre"
            className=" outline-none mr-2 px-3 rounded-md border-[1.2px] py-2 border-black  w-full "
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            className=" outline-none mr-2 px-3 rounded-md border-[1.2px] py-2 border-black  w-full "
          />
          <button
            onClick={() => addSecurite()}
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
          >
            {" "}
            Add{" "}
          </button>
        </div>
        <div className=" w-full flex flex-wrap ">
          {ZoneEviter.map((sec, index) => (
            <div
              key={index}
              className=" bg-gray-200 flex gap-1 items-center p-3 rounded-md m-2 "
            >
              <p className="text-sm font-semibold "> {sec.title}: </p>
              <p className=" text-sm "> {sec.description} </p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className=" w-full flex justify-between items-center ">
        {step > 1 && (
          <button
            className=" bg-gray-600 scale-95 text-white rounded-md py-2 px-4 "
            onClick={prev}
          >
            {" "}
            Previous{" "}
          </button>
        )}
        {step < 6 && step >= 1 && (
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={next}
          >
            {" "}
            Next{" "}
          </button>
        )}
        {step === 6 && (
          <button className=" bg-green-600 scale-95 text-white rounded-md py-2 px-4 ">
            {" "}
            Finish{" "}
          </button>
        )}
      </div>
    </div>
  );
}
function StepSex({ submitForm, object, setobject, step, next, prev }) {
  const [input, setInput] = useState("");
  function addSecurite() {
    if (!input.trim()) return;
    setobject([...object, input]);
    setInput("");
  }
  return (
    <div>
      <DialogDescription>
        6 add a list of objectives to achieve with this recomondation.
      </DialogDescription>
      <div className=" w-full mt-3 h-64 ">
        <div className="gap-2 flex   ">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="objectif"
            className=" outline-none mr-2 px-3 rounded-md border-[1.2px] py-2 border-black  w-full "
          />
          <button
            onClick={() => addSecurite()}
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
          >
            {" "}
            Add{" "}
          </button>
        </div>
        <div className=" w-full flex flex-wrap ">
          {object.map((sec, index) => (
            <div
              key={index}
              className=" bg-gray-200 flex gap-1 items-center p-3 rounded-md m-2 "
            >
              <p className=" text-sm "> {sec} </p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className=" w-full flex justify-between items-center ">
        {step > 1 && (
          <button
            className=" bg-gray-600 scale-95 text-white rounded-md py-2 px-4 "
            onClick={prev}
          >
            {" "}
            Previous{" "}
          </button>
        )}
        {step < 6 && step >= 1 && (
          <button
            className=" bg-black scale-95 text-white rounded-md py-2 px-4 "
            onClick={next}
          >
            {" "}
            Next{" "}
          </button>
        )}
        {step === 6 && (
          <button
            onClick={() => submitForm()}
            className=" bg-green-600 scale-95 text-white rounded-md py-2 px-4 "
          >
            {" "}
            Finish{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default AddRecomondation;
