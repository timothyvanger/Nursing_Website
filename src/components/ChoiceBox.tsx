import style from "./ChoiceBox.module.css";

const ChoiceBox = () => {
  return (
    <>
      <div id={style.choiceBoxContainer}>
        <button className={style.choice}>Population</button>
        <button className={style.choice}>Precipitating</button>
        <button className={style.choice}>asdfsdf</button>
        <button className={style.choice}>asdfasdfs</button>
      </div>
    </>
  );
};

export default ChoiceBox;
