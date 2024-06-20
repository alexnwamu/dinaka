import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full z-0 max-w-full relative overflow-hidden pb-[100px] py-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="text-[24px]">Technologies I Use</div>
      <div className="sm:flex flex-row justify-around grid grid-cols-3  flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            name={image.skill_name}
            index={index}
          />
        ))}
      </div>

      <div className="sm:flex flex-row justify-around grid grid-cols-3 flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            name={image.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="sm:flex flex-row justify-around grid grid-cols-3 flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            name={image.skill_name}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
