import MemberCard from './MemberCard'

import type FamilyMember from '../interfaces/FamilyMember'

interface MemberCardProps {
  member: FamilyMember
  findPartner: (member: FamilyMember) => FamilyMember | undefined
  findChildren: (parent: FamilyMember) => FamilyMember[]
}

const CardContainer: React.FC<MemberCardProps> = ({
  member,
  findPartner,
  findChildren,
}) => {
  const partner = findPartner(member)
  const members: FamilyMember[] = partner ? [member, partner] : [member]

  return (
    <div className="card-container">
      <div className="card-column">
        {members.map((member) => {
          const { name, gender } = member
          return <MemberCard name={name} gender={gender} />
        })}
      </div>

      {members.length > 1 && (
        <div className="card-row">
          {findChildren(members[1]).map((child) => (
            <CardContainer
              member={child}
              findPartner={findPartner}
              findChildren={findChildren}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CardContainer
