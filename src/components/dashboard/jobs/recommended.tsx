import { api } from "~/utils/api";
import JobCard from "./job-card";

const Recommended = () => {
  const jobsData = api.jobs.getJobs.useQuery();

  return (
    <>
      <div className="card rounded-box grid h-full space-x-1 space-y-7  bg-base-100 px-4 py-4">
        <h1>Recommanded for you</h1>
        {jobsData.data?.jobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            hoursofwork={job.hoursofwork}
            location={job.location}
            salary={job.salary}
            title={job.title}
            image={job.user.image as string}
            user={job.user.name as string}
          />
        ))}
      </div>
    </>
  );
};

export default Recommended;
