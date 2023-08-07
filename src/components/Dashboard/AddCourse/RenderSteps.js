import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course);

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
  ];

  return (
    <>
      <div className="relative mb-2 flex w-full justify-center">
        {steps.map((item) => (
          <>
            <div className="flex flex-col items-center " key={item.id}>
              <button
                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                  step === item.id
                    ? "border-darkblue  border-[2px] bg-white text-[#140342]"
                    : "border-darkblue border-[1px] bg-white text-richblack-300 "
                } ${step > item.id && "bg-white text-yellow-50"}} `}
              >
                {step > item.id ? (
                  <FaCheck className="font-bold text-caribbeangreen-300 " />
                ) : (
                  item.id
                )}
              </button>
            </div>
            {item.id !== steps.length && (
              <>
                <div
                  className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                    step > item.id
                      ? "border-caribbeangreen-400 "
                      : "border-richblack-500"
                  } `}
                ></div>
              </>
            )}
          </>
        ))}
      </div>

      <div className="relative mb-16 flex w-full select-none justify-around">
        {steps.map((item) => (
          <>
            <div
              className="flex min-w-[130px]  items-center gap-y-2"
              key={item.id}
            >
              <p
                className={`text-sm ${
                  step >= item.id
                    ? "text-[#140342] font-walsheim"
                    : "text-[#140342] font-walsheimMed"
                }`}
              >
                {item.title}
              </p>
            </div>
          </>
        ))}
      </div>
      {/* Render specific component based on current step */}
      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
    </>
  );
}
