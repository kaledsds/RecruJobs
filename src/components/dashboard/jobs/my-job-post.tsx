import type { Job } from "@prisma/client";
import type { FC } from "react";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { api } from "~/utils/api";

interface JobProps {
  job: Job;
}

const MyjobPost: FC<JobProps> = ({ job }) => {
  const { data: session } = useSession();
  const apiCtx = api.useContext();
  const deleteJob = api.jobs.deleteJob.useMutation({
    onSuccess: () => apiCtx.jobs.getUserJobs.invalidate(),
  });

  return (
    <>
      <div className="card w-full bg-base-300 shadow-md">
        <div className="card-body gap-5">
          <div className="flex items-center justify-start gap-3">
            <Image
              className="rounded-full"
              src={session?.user.image || ""}
              alt="user"
              width={50}
              height={50}
            />
            <div>
              <h2 className="card-title">{session?.user.name}</h2>
              <p>is looking for</p>
            </div>
          </div>
          <h2 className="card-title font-bold text-primary">{job.title}</h2>
          <p>
            <span className="rounded-full border-2 border-primary px-2 py-1">
              Location: {job.location}
            </span>
            <span className="mx-3 rounded-full border-2 border-primary px-2 py-1">
              Hours of work: {job.hoursofwork}
            </span>
            <span className="rounded-full border-2 border-primary px-2 py-1">
              Salary: {job.salary}
            </span>
          </p>
          <label htmlFor={"my-modal" && job.id} className="btn-primary btn">
            Delete!
          </label>
          <input
            type="checkbox"
            id={"my-modal" && job.id}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">
                Are you sure that you wanna delete this Post!
              </h3>
              <p className="py-4">
                Once you do you can not retrieve any info from it!
              </p>
              <div className="modal-action">
                <button
                  onClick={() => {
                    deleteJob.mutate({ id: job.id });
                  }}
                  className="btn-primary btn"
                >
                  Delete!
                </button>
                <label htmlFor={"my-modal" && job.id} className="btn">
                  cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyjobPost;
