interface MemberCardProps {
  name: string
  gender: string
}

const MemberCard: React.FC<MemberCardProps> = ({ name, gender }) => {
  const backgroundColor: string =
    gender === 'female' ? 'lightpink' : 'lightblue'

  return (
    <div className="member-card" style={{ backgroundColor }}>
      {name}
    </div>
  )
}

export default MemberCard
