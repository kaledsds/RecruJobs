import type { CrewMember, Resume, User } from "@prisma/client";
import Image from "next/image";
import type { FC } from "react";

interface CrewProps {
  crewMember: CrewMember & {
    employee: User & {
      resume: Resume | null;
    };
  };
}

const CrewRow: FC<CrewProps> = ({ crewMember }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <Image
                src={crewMember.employee.image || ""}
                alt={crewMember.employee.name || ""}
                width={50}
                height={50}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{crewMember.employee.name}</div>
            <div className="text-sm opacity-50">
              {crewMember.employee?.email}
            </div>
          </div>
        </div>
      </td>
      <td>{crewMember.expertise}</td>
      <td>{crewMember.salary}</td>
      <th>
        <a
          href={crewMember.employee.resume?.url}
          target="_blank"
          className="p-0 font-semibold hover:bg-transparent hover:text-primary-focus"
        >
          Open
        </a>
      </th>
      <th>
        <button className="btn-primary btn">recrute</button>
      </th>
    </tr>
  );
};

export default CrewRow;
