import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { doc, getDoc } from "firebase/firestore";
import { moviesRef } from "./firebase/firebase";
import { db } from "./firebase/firebase";
import ReactStars from "react-stars";
import Reviews from "./Reviews";

export default function Details() {
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated: 0,
  });

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());

      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-96">
          <ThreeCircles height={100} color="white" />
        </div>
      ) : (
        <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
          <img
            className="h-96 block md:sticky top-24"
            src={data.image}
            alt="imgUrlError"
          />
          <div className="md:ml-4 ml-0 w-full md:w-1/2">
            <h1 className="text-3xl font-bold to-gray-400">
              {data.title}
              <span className="text-xl">{data.year}</span>
            </h1>
            <ReactStars
              size={20}
              half={true}
              value={data.rating / data.rated}
              edit={false}
            />
            <p className="mt-2">{data.description}</p>
            <Reviews id={id} prevRating={data.rating} userRated={data.rated} />
          </div>
        </div>
      )}
    </div>
  );
}
