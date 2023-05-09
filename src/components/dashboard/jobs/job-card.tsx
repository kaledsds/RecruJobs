import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
  id: string;
  title: string;
  hoursofwork: string;
  location: string;
  salary: string;
  image: string;
  user: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  image,
  user,
  hoursofwork,
  location,
  salary,
}) => {
  return (
    <>
      <div className="card w-full bg-base-200 shadow-md">
        <div className="card-body gap-5">
          <div className="flex items-center justify-start gap-3">
            <Image
              className="rounded-full"
              src={image}
              alt="user"
              width={50}
              height={50}
            />
            <p>
              <h2 className="card-title">{user}</h2>
              is looking for
            </p>
          </div>
          <h2 className="card-title font-bold text-primary">{title}</h2>
          <p>
            <span className="rounded-full border-2 border-primary px-2 py-1">
              Location: {location}
            </span>
            <span className="mx-3 rounded-full border-2 border-primary px-2 py-1">
              Hours of work: {hoursofwork}
            </span>
            <span className="rounded-full border-2 border-primary px-2 py-1">
              Salary: {salary}
            </span>
          </p>
          <div className="card-actions justify-end">
            <Link href={`/jobs/${id}`} className="btn-primary btn">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
