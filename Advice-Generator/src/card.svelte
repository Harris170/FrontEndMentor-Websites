<script>
  let advice_number = 0;
  let quote = "Click the dice, get an advice";

  const advice = async () => {
    const response = fetch("https://api.adviceslip.com/advice");
    await response
      .then((res) => res.json())
      .then((data) => {
        advice_number = data.slip.id;
        quote = data.slip.advice;
      });
  };
</script>

<div>
  <div class="card">
    <span>Advice #{advice_number}</span>
    <p>
        <span class="marks">"</span>{quote}<span class="marks">"</span>
    </p>
    <img class="img-desktop" src="/src/images/pattern-divider-desktop.svg" alt="pattern-divider"/>
    <img class="img-mobile" src="/src/images/pattern-divider-mobile.svg" alt="pattern-divider"/>
  </div>
  <button class="dice-btn" on:click={advice}>
    <img src="/src/images/icon-dice.svg" alt="dice-icon" />
  </button>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap");
  :root {
    --Light-Cyan: hsl(193, 38%, 86%);
    --Neon-Green: hsl(150, 100%, 66%);

    --Grayish-Blue: hsl(217, 19%, 38%);
    --Dark-Grayish-Blue: hsl(217, 19%, 24%);
    --Dark-Blue: hsl(218, 23%, 16%);

    --fs-quote: 28px;
    --ff: "Manrope", sans-serif;
  }

  span::selection,
  p::selection {
    background-color: var(--Neon-Green);
    color: var(--Dark-Blue);
  }

  img {
    user-select: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--ff);
    background-color: var(--Dark-Grayish-Blue);
    border-radius: 1rem;
    padding: 3rem;
    padding-bottom: 4.25rem;
    width: min-content;
    box-shadow: 0.5rem 0.5rem 3.125rem hsl(215, 23%, 14%);
  }

  span {
    color: var(--Neon-Green);
    font-size: 0.75rem;
    letter-spacing: 0.375rem;
    text-transform: uppercase;
    text-align: center;
  }

  p,.marks {
    font-size: var(--fs-quote);
    font-weight: 800;
    color: var(--Light-Cyan);
    text-align: center;
  }

  .marks{
    color: var(--Neon-Green);
  }

  .dice-btn {
    margin-top: -1.875rem;
    border: none;
    border-radius: 50%;
    background: var(--Neon-Green);
    width: 3.75rem;
    height: 3.75rem;
    transition: 0.15s ease;
  }

  .dice-btn:hover {
    cursor: pointer;
    box-shadow: 0 2px 16px 2px var(--Neon-Green);
  }

  .img-mobile{
    display: none;
  }

  @media (max-width: 768px) {
    .img-desktop{
      display: none;
    }

    .img-mobile{
      display: block;
    }
  }
</style>
