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
            image:"./assets/images/team/Alok_mishra.png",
            name:"Alok Mishra",
            role:"Co-Founder"
        },
        {
            image:"./assets/images/team/Abhi_kishore.png",
            name:"Abhi Kishore",
            role:"Co-Founder"
        },
        {
            image:"./assets/images/team/Sonali_sharma.png",
            name:"Sonali Sharma",
            role:"3d Artist"
        },
        {
            image:"./assets/images/team/kamaljeet.png",
            name:"Kamaljeet",
            role:"Graphics Artist"
        },
        {
            image:"./assets/images/team/Tanishq.png",
            name:"Tanishq Kumar",
            role:"Graphics Artist"
        },
        {
            image:"./assets/images/team/Pankaj_kumar.png",
            name:"Pankaj Chauhan",
            role:"Web Developer"
        },
        {
            image:"./assets/images/team/Kanhaiya.png",
            name:"Kanhaiya",
            role:"Web Developer"
        },
        {
            image:"./assets/images/team/Vicky.png",
            name:"Nimesh Kumar",
            role:"Web Developer"
        },
        {
            image:"./assets/images/team/Vineet.png",
            name:"Vineet Karotiya",
            role:"Social Media Executive"
        },  
        {
            image:"./assets/images/team/Pooja.png",
            name:"Pooja Chauhan",
            role:"Content Writer"
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