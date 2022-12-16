const AdvisorCard=({data})=>{
    return (<div className="d-flex flex-column align-items-center advisor-card">
        <div className="avatar-container">
            <img className="avatar-img" src={data.image} alt="Avatar" />
        </div>

        <h4 className="advisor-name">{data.name}</h4>
        <h6 className="advisor-role">{data.role}</h6>
        <h6 className="advisor-description">{data.description}</h6>
        <div className="links-container">
            <a href={data.linkedin} target="__blank">
                <img src="https://user-images.githubusercontent.com/76777058/208164235-f5e6529c-9282-4b0a-9258-1a296e625b6f.svg" alt="" />
            </a>
        </div>
    </div>)
    }
    const AdvisorSection= ()=>{
        const AdvisorData=[
            {
                image:"https://user-images.githubusercontent.com/76777058/208067438-60e68c1f-05ef-44e6-aa10-d8153614fb2e.jpeg",
                name:"Pedro",

                role:"Advisor & CMO,YAY Network",
                description:"Pedro Verdades is a leading marketing expert focused in blockchain and cryptocurrency awareness, adoption and succesful brand and community building.Pedro started his career in advertising 6 years ago in traditional marketing and later moved into web3 where he has successfully worked directly with over 20 defi projects.Pedro's experience and vision allow him to set the right strategies for each startup. In his free time he writes press releases and articles for major crypto news outlets.",
                linkedin:"https://www.linkedin.com/in/pedro-verdades-b1500b125/"
            },
            {
                image:"https://user-images.githubusercontent.com/76777058/208068776-52ea9e6a-ec1c-41a9-ab51-f3a2e1c646c1.jpeg",
                name:"Guilherme",
                role:"Founder & CEO,YAY Network",
                description:"Guilherme Jovanović is a Defi pioneer and the founder and CEO of YAY Network (Formerly known as YAY Games) , a dencetralised VC and incubator.He is also the former CEO of the striving 9-year-old fiat on-ramp - Indacoin.He has been deeply involved with over 200 blockchain startups and is a top consultant for several NASDAQ traded companies.He´s been a key advocate in growing cryptocurrency adoption worldwide through his various ventures, partnerhips and initiatives to facilitate the purchase of crypto and its global use.",
                linkedin:"https://www.linkedin.com/in/guilherme-jovanovi%C4%87"
            }]
    return(<>
    <h2 className="nevan section-heading py-2 py-md-3 mt-4">THE ADVISORS</h2>
    <ul className="advisor-list">
        {AdvisorData.map((data,i)=>{
            return <li key={i}><AdvisorCard data={data}/></li>
        })}
    </ul>
    </>)
    }
    export default AdvisorSection