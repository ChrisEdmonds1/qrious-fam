import familyTreeData from '../data'
import { includesNumber } from '../utils'
import CardContainer from './CardContainer'

import type FamilyMember from '../interfaces/FamilyMember'

const findChildren = (personA: FamilyMember) => {
  return familyTreeData.filter((personB) => {
    if (includesNumber(personA.children, personB.id)) {
      return personB
    }
  })
}

const findPartner = (personA: FamilyMember) => {
  return familyTreeData.find((personB) => {
    if (
      personA.id !== personB.id &&
      includesNumber(personB.children, personA.children[0])
    ) {
      return personB
    }
  })
}

const hasUnknownParents = (person: FamilyMember) => person.parents.length === 0

const isTopLevelParent = (person: FamilyMember) => {
  if (hasUnknownParents(person)) {
    const partner = findPartner(person)
    return partner && hasUnknownParents(partner)
  }
}

const topLevelParents = familyTreeData.filter((member) =>
  isTopLevelParent(member)
)

const FamilyTree: React.FC = () => {
  return (
    <main>
      <CardContainer
        member={topLevelParents[0]}
        findPartner={findPartner}
        findChildren={findChildren}
      />
    </main>
  )
}

export default FamilyTree
