import { useSession } from "next-auth/react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type RouterInputs } from "~/utils/api";
import { useForm } from "react-hook-form";
import { createJobInputSchema } from "~/validations/createJobInput.schema";

const Recruite = () => {
  type FormData = RouterInputs["jobs"]["createJob"];
  const [errorMsg, SetErrorMsg] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<boolean>(false);
  const { data: Session } = useSession();
  const ctx = api.useContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(createJobInputSchema),
  });
  const createJobMutation = api.jobs.createJob.useMutation({
    onSuccess: async () => {
      reset();
      await ctx.jobs.getJobs.invalidate();
      setSuccessMsg(true);
    },
    onError: () => {
      SetErrorMsg(true);
    },
  });

  const onabort = () => {
    setSuccessMsg(false);
    SetErrorMsg(true);
    reset();
  };
  const onSubmit = (data: FormData) => {
    createJobMutation.mutate(data);
  };

  if (!Session) {
    return null;
  }

  return (
    <>
      <div className="rounded-box flex items-center justify-between bg-base-200 p-4 shadow-md">
        <h1 className="flex-1 text-2xl">Add new job post</h1>
        <label htmlFor="my-modal-3" className="btn flex-none bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
          </svg>
        </label>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-screen-lg ">
          <button
            onClick={handleSubmit(onabort)}
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            <label htmlFor="my-modal-3">✕</label>
          </button>
          <form
            className="rounded-box flex w-full flex-col bg-base-100 p-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="label">
              {successMsg ? (
                <div className="alert alert-success shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 flex-shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Your job has been added successfully!</span>
                  </div>
                </div>
              ) : (
                <p className="p-4">not yet</p>
              )}
            </label>

            <div className="flex flex-row gap-10">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("title")}
                />
                <label className="label">
                  {errors.title?.message ? (
                    <p className="p-1">{errors.title?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("jobposition")}
                />
                <label className="label">
                  {errors.jobposition?.message ? (
                    <p className="p-1">{errors.jobposition?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("companyname")}
                />
                <label className="label">
                  {errors.companyname?.message ? (
                    <p className="p-1">{errors.companyname?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("type")}
                />
                <label className="label">
                  {errors.type?.message ? (
                    <p className="p-1">{errors.type?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("salary")}
                />
                <label className="label">
                  {errors.salary?.message ? (
                    <p className="p-1">{errors.salary?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("location")}
                />
                <label className="label">
                  {errors.location?.message ? (
                    <p className="p-1">{errors.location?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("hoursofwork")}
                />
                <label className="label">
                  {errors.hoursofwork?.message ? (
                    <p className="p-1">{errors.hoursofwork?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input "
                  {...register("lastdate")}
                />
                <label className="label">
                  {errors.lastdate?.message ? (
                    <p className="p-1">{errors.lastdate?.message}</p>
                  ) : !errorMsg ? (
                    <p className="p-4"></p>
                  ) : (
                    <p className="p-1">
                      Failed to post! Please try again later.
                    </p>
                  )}
                </label>
              </div>
            </div>
            {/* <div className="form-control w-full">
              <label className="label">
                <span className="label-text">What is your name?</span>
                <span className="label-text-alt">Top Right label</span>
              </label>
              <textarea
                placeholder="Bio"
                className="textarea-bordered textarea textarea-lg w-full"
                {...register("title")}
              ></textarea>
              <label className="label">
                <span className="label-text-alt">Bottom Left label</span>
                <span className="label-text-alt">Bottom Right label</span>
              </label>
            </div> */}
            <div className="flex justify-end">
              <button type="submit" className="btn-primary btn">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Recruite;
