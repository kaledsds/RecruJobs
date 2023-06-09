import { api } from "~/utils/api";
import CrewRow from "./crew-row";

const crew = () => {
  const { data: CrewMembers } = api.crew.getCrewMembers.useQuery();

  if (!CrewMembers) {
    return null;
  }

  return (
    <div className="w-full overflow-x-visible">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Field of expertise</th>
            <th>Salary per hour</th>
            <th>resume</th>
            <th>
              <span className="px-4">action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {CrewMembers.crewMembers.map((crewMember) => (
            <CrewRow key={crewMember.id} crewMember={crewMember} />
          ))}
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

export default crew;
