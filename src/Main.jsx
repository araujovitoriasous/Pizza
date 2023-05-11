import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import emoji from "./assets/emoji.png";
import health from "./assets/health.png";

export default function Main() {
  const { id } = useParams();

  const [phrase, setPhrase] = useState("");
  const [question, setQuestion] = useState("");

  var noButtonTranslate = 0
  const noButton = useRef()
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const answers = [
    "Larrisa Neves, você está disposta a responder algumas perguntas?",
    "Você responderá com total sinceridade?",
    !question ? "Você quer comer uma pizza e tomar uma cerveja comigo no final de semana?" : question,
  ]

  const handleYesAnswerButton = () => {
    setCurrentAnswer(currentAnswer + 1)
  }
  const handleNoAnswerButton = () => {
    if (noButtonTranslate === 0) {
      noButton.current.style.transform = "translateX(100px)"
      noButtonTranslate = 1
    } else {
      noButton.current.style.transform = "translateX(0px)"
      noButtonTranslate = 0
    }
  }


  return (
    <div className="flex flex-col w-full min-h-screen items-center pt-14">
      <img src={emoji} alt="" width={200} />

      <div className="flex flex-col mt-10 min-w-full items-center">
        <p className="text-sms font-semibold break-words" align="center">{answers[currentAnswer]}</p>

        <div className="flex mt-10 gap-4">
          {currentAnswer < answers.length ? (
            <>
              <button
                onClick={handleYesAnswerButton}
                className="bg-tertiary text-secondary font-bold px-6 py-2 rounded border-primary border-r-2 border-b-2 active:bg-secondary active:color-tertiary transition-colors duration-300"
              >
                Sim
              </button>

              {currentAnswer === answers.length - 1 && (
                <button
                  ref={noButton}
                  onClick={handleNoAnswerButton}
                  className="bg-tertiary text-secondary font-bold px-6 py-2 rounded border-primary border-r-2 border-b-2 active:bg-secondary active:text-tertiary transition-colors duration-300"
                >
                  Não
                </button>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {!id ? (
                <>
                  <p className="font-semibold" align="center">"
                    <b>Te prometo a melhor pizza e a melhor companhia do Rio de Janeiro"</b> - Vitoria
                  </p>

                  <p align="center">Obs: é a melhor pizza que o sodexo pode pagar.</p>

                  <img src={health} alt="" width={200} />
                </>
              ) : (
                <>
                  <p className="font-semibold max-w-md" align="center">
                    <b>{phrase}</b>
                  </p>
                  <img src={health} alt="" width={200} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div >
  );
}
