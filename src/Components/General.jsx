import React from "react";

const General = () => {
  return (
    <div className="space-y-7 mt-5" >
        <h1 className="text-4xl font-bold " >Let's Remove Your Coufusion !!</h1>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        Which languages do you offer?
        </div>
        <div className="collapse-content">
          <p> At Lingo Bingo, we currently offer Turkish, German, Japanese, and French courses.</p>
        </div>
      </div>
      <div className="collapse bg-blue-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
        What level of language proficiency do I need to enroll?
        </div>
        <div className="collapse-content">
          <p>Lingo Bingo offers courses for all levels, from complete beginners to advanced learners. We can help you determine the right course for your current skill level through a placement test or a conversation with our staff.</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
        What are the qualifications of your instructors?
        </div>
        <div className="collapse-content">
          <p> Lingo Bingo is proud to have a team of experienced and passionate language instructors who are native speakers or highly fluent in their respective languages.  They hold qualifications in language teaching and are dedicated to creating a fun and effective learning experience for our students.</p>
        </div>
      </div>
      <div className="collapse bg-blue-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
        How much do your courses cost?
        </div>
        <div className="collapse-content">
          <p> The cost of our courses varies depending on the level, format, and duration of the course.  We recommend checking our website or contacting us for a current price list.</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
        Do you offer any placement tests or assessments to determine my skill level?
        </div>
        <div className="collapse-content">
          <p>  Yes, we do!  We encourage you to take a free placement test to help us determine the most suitable course for your current language proficiency.</p>
        </div>
      </div>
    </div>
  );
};

export default General;
