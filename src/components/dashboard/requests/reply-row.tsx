import type { FC } from "react";
import type { Job, JobRequest, User } from "@prisma/client";
import Image from "next/image";
import { api } from "~/utils/api";
import { Check, Clock, Trash2, X } from "lucide-react";

interface RequestProps {
  request: JobRequest & {
    job: Job & {
      user: User;
    };
  };
}

const ReplyRow: FC<RequestProps> = ({ request }) => {
  const ctx = api.useContext();
  const DeleteRequest = api.jobRequests.deletJobRequest.useMutation({
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
                src={request.job.user.image || ""}
                alt={request.job.user.name || "job owner"}
                width={50}
                height={50}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{request.job.user.name}</div>
            {request.status === "accepted" && (
              <div className="text-sm opacity-50">{request.job.user.email}</div>
            )}
          </div>
        </div>
      </td>
      <td>{request.job.title}</td>
      {request.status === "pending" && (
        <td>
          <div className="flex items-center gap-1.5 text-primary ">
            <span className="font-semibold capitalize">{request.status}</span>
            <Clock className="-mb-1.5 h-5 w-5" />
          </div>
        </td>
      )}
      {request.status === "accepted" && (
        <td>
          <div className="flex items-center gap-1.5 text-green-500 ">
            <span className="font-semibold capitalize ">{request.status}</span>
            <Check />
          </div>
        </td>
      )}
      {request.status === "declined" && (
        <td>
          <div className="flex items-center gap-1.5 text-red-500 ">
            <span className="font-semibold capitalize ">{request.status}</span>
            <X />
          </div>
        </td>
      )}
      <th>
        <div className="flex items-center justify-center text-red-600">
          <button
            onClick={() => {
              DeleteRequest.mutate({ id: request.id });
            }}
          >
            <Trash2 />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default ReplyRow;
