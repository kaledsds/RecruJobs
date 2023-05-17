import React from "react";
import { useState, type FormEvent } from "react";
import { uploadPDFService } from "~/services/uploadPDF";
import { api } from "~/utils/api";

const AddResume = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const createResume = api.resume.createResume.useMutation({
    onSuccess: () => {
      setIsLoading(false);
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent Defaults
    e.preventDefault();
    // If File Not Selected
    if (!selectedFile) {
      return;
    }
    // Start Loading
    setIsLoading(true);
    // Upload The File
    const url = await uploadPDFService(selectedFile);
    if (url) {
      // Create Resume
      createResume.mutate({ url });
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => void onSubmit(e)}
        className="rounded-box flex flex-col gap-4 bg-base-100 p-6"
      >
        <h1 className="text-2xl font-bold text-base-content">
          Please Upload Your PDF...
        </h1>

        {/* File Input */}
        <input
          type="file"
          className="file-input-bordered file-input-primary file-input w-full max-w-xs"
          onChange={(e) => {
            if (e.target.files) {
              setSelectedFile(e.target.files[0]);
            }
          }}
        />
        {/* Submit btn */}
        <button className="rounded-lg bg-primary px-4 py-2 hover:bg-primary-focus">
          Upload
        </button>
      </form>
      {isLoading && <p className="text-base-content">Loading ...</p>}
    </>
  );
};

export default AddResume;
