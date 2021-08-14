
import StoryCard from "./StoryCard"

const stories=[
    {
        name:"Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name:"Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(stoty => {
                <StoryCard name={story.name} src={story.src} profile={story.profile}/>
            })}
            
        </div>
    )
}

export default Stories
