import { TeamMember as TeamMemberType } from 'client';



interface TeamMemberProps {
  teamMember: TeamMemberType;
}

export default function TeamMember({ teamMember }: TeamMemberProps) {
  return (
    <div>
      
      <h3>{teamMember?.fullName}</h3>
      <img 
        height = '200px'
        width = '300px'

        //GraphQL Introspection provides access to possible property types after npm run generate
        //Preview structured data in GraphiQL IDE

        src={teamMember?.profilePic.mediaItemUrl}
        alt={teamMember?.profilePic.altText}
      />
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: teamMember?.bio }}
      />
    </div>
  );
}