import Marquee from "react-fast-marquee";

export const Skills = () => {
    const skills = [
        {
            image: "/javascript.png",
            alt: "JavaScript",
        },
        {
            image: "typescript.png",
            alt: "TypeScript",
        },
        {
            image: "/react.webp",
            alt: "React",
        },
        {
            image: "/python.webp",
            alt: "Python",
        },
        {
            image: "/mysql.png",
            alt: "MySQL",
        },
        {
            image: "/tailwind.svg",
            alt: "Tailwind CSS",
        },
    ];

    return (
        <section id="skills" className="w-full">
            <h1 className="text-[#516264] text-xl text-center mb-5">Main Skills</h1>
            <Marquee autoFill pauseOnClick>
                <div className="flex flex-wrap mb-10">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-row m-2 justify-center items-center"
                        style={{
                            borderRadius: "10px",
                            background: "#d3d3d3",
                        }}
                    >
                    <div className="flex flex-col justify-center items-center text-center rounded-lg p-4 w-48 h-36 sm:w-48 sm:h-36 md:w-48 md:h-36 lg:w-48 lg:h-36 xl:w-48 xl:h-36">
                        <img
                            src={skill.image}
                            alt={skill.alt}
                            className="mb-4 w-20 h-20 object-contain"
                        />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-600">{skill.alt}</h3>
                    </div>
                    </div>
                ))}
                </div>
            </Marquee>
        </section>
    );
};

export default Skills;
