import { useFormik } from "formik";
import { useState, useContext } from "react";
import { FirebaseContext, AuthContext } from "../../context/context";
const AddProduct = () => {
  //  Todo: upload image array into firebase
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [img, setImg] = useState(null);
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      images: [],
    },
    onSubmit: ({ title, price, description, images }) => {
      firebase
        .storage()
        .ref(`/image/${img.name}`)
        .put(img)
        .then(({ ref }) => {
          ref.getDownloadURL().then((url) => {
            firebase
              .firestore()
              .collection("products")
              .add({
                title: title,
                price: price,
                description: description,
                imageUrl: url,
                userId: user.uid,
              })
              .then(() => console.log(" collection updated"));
          });
        });
    },
  });
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#eff1f3] ">
      <form
        className="w-[50%] h-[70vh]  flex flex-col justify-center items-center rounded-lg bg-white gap-5"
        encType="multipart/form-data"
        onSubmit={formik.handleSubmit}
      >
        <input
          className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          type="text"
          name="title"
          placeholder="Name"
        />

        <input
          className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          type="number"
          name="price"
          placeholder="Price"
        />

        <textarea
          className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          type="file"
          className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          name="images"
          onChange={(e) => {
            const files = e.target.files;
            let myFiles = Array.from(files);
            formik.setFieldValue("images", myFiles);
            setImg(files[0]);
          }}
          multiple
        />
        {/* preview for the first image
        <img
          src={img ? URL.createObjectURL(img) : ""}
          alt=""
          width={"200px"}
          height={"200px"}
        /> */}
        <button
          className="bg-[#002f34] w-[90%] p-3 rounded-lg capitalize border-4
            border-transparent hover:border-[#002f34] hover:bg-white
            hover:text-[#002f34] text-white relative "
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
