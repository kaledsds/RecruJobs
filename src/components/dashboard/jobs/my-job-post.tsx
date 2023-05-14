import type { Job } from "@prisma/client";
import type { FC } from "react";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

interface JobProps {
  job: Job;
}

const MyjobPost: FC<JobProps> = ({ job }) => {
  const { data: session } = useSession();

  return (
    <>
      <div className="card w-full bg-base-200 shadow-md">
        <div className="card-body gap-5">
          <div className="flex items-center justify-start gap-3">
            <Image
              className="rounded-full"
              src={session?.user.image || ""}
              alt="user"
              width={50}
              height={50}
            />
            <p>
              <h2 className="card-title">{session?.user.name}</h2>
              is looking for
            </p>
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
        </div>
      </div>
    </>
  );
};

export default MyjobPost;
