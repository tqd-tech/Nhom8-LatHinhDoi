const socket = io();

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    socket.emit("flip_card", { id });

    // Hiện tạm tại local
    card.textContent = "🃏";
  });
});

socket.on("card_flipped", (data) => {
  const card = document.querySelector(`.card[data-id="${data.id}"]`);
  if (card) {
    card.textContent = "🃏";
  }
});
