import React from "react";
import questionImg from "../../../assets/Community/question.png";
import style from "./style.module.css";

const Survey = ({ question, answerOne, answerTwo, totalVotes }) => {
  return (
    <>
      <div className={style.question_wrapper}>
        <h4>{question}</h4>
        <div className={style.input_wrapper}>
          <div className={style.option}>
            <input type="radio" id="sim" name="resposta" value="sim" />
            <label for="sim">Sim</label>
          </div>
          <div className={style.option}>
            <input type="radio" id="nao" name="resposta" value="nao" />
            <label for="nao">Não</label>
          </div>
        </div>
        <p>{totalVotes} votes</p>
      </div>
    </>
  );
};

export default Survey;
