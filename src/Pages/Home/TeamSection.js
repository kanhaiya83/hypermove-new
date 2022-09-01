const TeamMemberCard=({data})=>{
return (<div className="d-flex flex-column align-items-start team-member-card">
    <img src={data.image} alt="Avatar" />
    <h4 className="member-name">{data.name}</h4>
    <h6 className="member-role">{data.role}</h6>
</div>)
}
const TeamSection= ()=>{
    const TeamData=[
        {
            image:"./assets/images/team/Alfred.png",
            name:"Alfred",
            role:"CEO"
        },
        {
            image:"./assets/images/team/John.png",
            name:"John",
            role:"CTO"
        },
        {
            image:"./assets/images/team/Alina.png",
            name:"Alina",
            role:"CFO"
        },
        {
            image:"./assets/images/team/Kim.png",
            name:"Kim",
            role:"Analyst"
        },
        {
            image:"./assets/images/team/Ronn.png",
            name:"Ronn",
            role:"Blockchain Dev"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Alfred",
            role:"CEO"
        },
        {
            image:"./assets/images/team/Sebestian.png",
            name:"Sebestian",
            role:"CMO"
        },
        {
            image:"./assets/images/team/Tina.png",
            name:"Tina",
            role:"Web Dev"
        },
        {
            image:"./assets/images/team/Denny.png",
            name:"Denny",
            role:"Marketing"
        },
        {
            image:"./assets/images/team/Selly.png",
            name:"Selly",
            role:"Investor"
        },
        {
            image:"./assets/images/team/Jake.png",
            name:"Jake",
            role:"Investor"
        },
        {
            image:"./assets/images/team/Laura.png",
            name:"Laura",
            role:"Influencer"
        },
    ]
    const _TeamData=[
        {
            image:"./assets/images/team/Alfred.png",
            name:"Alfred",
            role:"CEO"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"John",
            role:"CTO"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Alina",
            role:"CFO"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Kim",
            role:"Analyst"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Ronn",
            role:"Blockchain Dev"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Alfred",
            role:"CEO"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Sebestian",
            role:"CMO"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Tina",
            role:"Web Dev"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Denny",
            role:"Marketing"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Selly",
            role:"Investor"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Jake",
            role:"Investor"
        },
        {
            image:"./assets/images/team/Alfred.png",
            name:"Laura",
            role:"Influencer"
        },
    ]
return(<>
<h2 className="nevan section-heading py-2 py-md-3">THE TEAM</h2>
<ul className="team-list">
    {TeamData.map((member,i)=>{
        return <li key={i}><TeamMemberCard data={member}/></li>
    })}
</ul>
</>)
}
export default TeamSection