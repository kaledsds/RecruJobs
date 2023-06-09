import { api } from "~/utils/api";

interface JobApplyProps {
  jobId: string;
}

const JobApply: React.FC<JobApplyProps> = ({ jobId }) => {
  const ctx = api.useContext();
  const { data: checkRequest } = api.jobRequests.checkRequest.useQuery({
    id: jobId,
  });
  const sendJobRequest = api.jobRequests.createJobRequest.useMutation({
    onSuccess: async () => {
      await ctx.jobRequests.invalidate();
    },
  });

  if (checkRequest === true) {
    return (
      <button
        onClick={() => {
          sendJobRequest.mutate({
            id: jobId,
          });
        }}
        className="btn-primary btn"
      >
        Apply
      </button>
    );
  }
  return (
    <span className="flex items-center justify-center rounded-lg border border-success p-2 pb-3 text-success">
      Applayed
    </span>
  );
};

export default JobApply;
