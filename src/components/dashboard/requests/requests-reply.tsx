import React from "react";
import { api } from "~/utils/api";
import ReplyRow from "./reply-row";

const RequestsReply = () => {
  const { data: JobRequests } = api.jobRequests.getRequestByUser.useQuery();

  if (!JobRequests) {
    return null;
  }

  return (
    <div className="w-full overflow-x-visible">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Recruter Name</th>
            <th>Your Request on</th>
            <th>request status</th>
            <th>
              <span className="flex items-center justify-center ">action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {JobRequests.requests.map((request) => (
            <ReplyRow key={request.id} request={request} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>nav</th>
            <th></th>
            <th></th>
            <th>
              <span className="flex justify-end px-4">page</span>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RequestsReply;
