import React from "react";
import { api } from "~/utils/api";
import RequestRow from "./request-row";

const JobRequests = () => {
  const { data: JobRequest } = api.jobRequests.getRequestsByJob.useQuery();
  return (
    <>
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
            {JobRequest?.requests.map(
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
    </>
  );
};

export default JobRequests;
