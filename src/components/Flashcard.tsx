import style from "./Flashcard.module.css";

const Flashcard = () => {
  return (
    <>
      <div className={style.flashCard}>
        <div className={style.flashCardContent}>
          <p>PQRST</p>
        </div>
        <div className={style.flashCardQuestion}>
          <p>What is the P in PQRST?</p>
        </div>
      </div>
    </>
  );
};

export default Flashcard;
