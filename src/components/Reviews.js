import React, { useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "./firebase/firebase";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";

export default function Reviews({ id, prevRating, userRated }) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");

  const sendReview = async () => {
    setLoading(true);
    try {
      // Add a new review document to the 'reviews' collection
      await addDoc(reviewsRef, {
        movieid: id, // Use the 'id' prop as the movie ID
        name: "Anshu Rai", // You may replace this with the actual user's name
        rating: rating,
        thought: form,
        timestamps: new Date().getTime(),
      });

      // Update the movie's rating and rated count in the 'movies' collection
      const dataref = doc(db, "movies", id);
      await updateDoc(dataref, {
        rating: prevRating + rating,
        rated: userRated + 1,
      });

      // Reset rating and form fields and show a success message
      setRating(0);
      setForm("");

      swal({
        title: "Review Sent",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
    } catch (error) {
      // Handle errors and show an error message
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
      console.log(error);
    }
    setLoading(false); // Set loading state back to false after the operation
  };

  return (
    <div className="w-full mt-2 py-2 border-t-2 border-gray-700">
      {/* Star rating input */}
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      {/* Review text input */}
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share Your thoughts..."
        className="w-full p-2 outline-none header"
      />
      {/* Submit button */}
      <button
        onClick={sendReview}
        className="bg-green-600 w-full p-2 flex justify-center"
      >
        {/* Show loading spinner while loading */}
        {loading ? <TailSpin height={20} color="white" /> : "Share"}
      </button>
    </div>
  );
}
