import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import QuizStart from "./QuizStart";
import Results from "./Results";
import Timer from "./Timer";
import { useEffect } from "react";
import { setQuestions } from "../store/quizSlice";
import { SampleQuestions as quizQuestions } from "../data/questions";

const Quiz = () => {
  const dispatch = useDispatch();

  // load the question

  useEffect(() => {
    dispatch(setQuestions(quizQuestions));
  }, [dispatch]);

  const {
    questions,
    currentQuestionIndex,
    isQuizComplete,
    isTimeActive,
    answers,
  } = useSelector((state) => state.quiz);

  // loading quiz

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading..</p>
        </div>
      </div>
    );
  }

  // is completed quiz

  if (isQuizComplete) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white py-8 px-4 flex items-center justify-center">
        <Results />
      </div>
    );
  }

  // quiz start
  if (!isTimeActive && answers.length === 0) {
    console.log(questions);
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white py-8 px-4 ">
        <QuizStart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <ProgressBar />
            </div>
            <div className="md:ml-6">
              <Timer />
            </div>
          </div>
        </div>
      </div>

      <Question />
    </div>
  );
};

export default Quiz;
