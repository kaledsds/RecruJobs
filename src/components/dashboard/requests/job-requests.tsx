import React from "react";
import { api } from "~/utils/api";
import RequestRow from "./request-row";

const JobPostRequests = () => {
  const { data: JobRequests } = api.jobRequests.getRequestsByJob.useQuery();

  if (!JobRequests) {
    return null;
  }

  return (
    <div className="w-full overflow-x-visible">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Requesting on</th>
            <th>request status</th>
            <th>resume</th>
            <th>
              <span className="px-4">action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {JobRequests.requests.map(
            (request) =>
              request.status !== "declined" && (
                <RequestRow key={request.id} request={request} />
              )
          )}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>nav</th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <span className="px-4">page</span>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default JobPostRequests;
