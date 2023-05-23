import type { Job, JobRequest, Resume, User } from "@prisma/client";
import Image from "next/image";
import { type FC } from "react";
import { api } from "~/utils/api";

interface RequestProps {
  request: JobRequest & {
    job: Job;
    user: User & {
      resume: Resume | null;
    };
  };
}

const RequestRow: FC<RequestProps> = ({ request }) => {
  const ctx = api.useContext();
  const setStatus = api.jobRequests.editJobRequest.useMutation({
    onSuccess: async () => {
      await ctx.jobRequests.invalidate();
    },
  });

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <Image
                src={request.user.image || ""}
                alt={request.user.name || ""}
                width={50}
                height={50}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{request.user.name}</div>
            <div className="text-sm opacity-50">{request.user?.email}</div>
          </div>
        </div>
      </td>
      <td>{request.job.title}</td>
      <td>{request.status}</td>
      <th>
        <a
          href={request.user.resume?.url}
          target="_blank"
          className="p-0 font-semibold hover:bg-transparent hover:text-primary-focus"
        >
          Open
        </a>
      </th>
      <th>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn">
            <div className="rounded-full">action</div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact bg-base-300 p-1 shadow-md"
          >
            <li>
              <button
                onClick={() => {
                  setStatus.mutate({ id: request.id, status: "accepted" });
                }}
              >
                accepted
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setStatus.mutate({ id: request.id, status: "declined" });
                }}
              >
                declined
              </button>
            </li>
          </ul>
        </div>
      </th>
    </tr>
  );
};

export default RequestRow;
