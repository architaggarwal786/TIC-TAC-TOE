    <script>
      let scores = document.querySelector(".score");
      let scoresX = document.querySelector(".scoreX");
      let scoresO = document.querySelector(".score0");

      let boxes = document.querySelectorAll(".box");
      let reset = document.querySelector(".reset");
      let turn0 = true;
      let msgs = document.querySelector(".msg");
      let news = document.querySelector(".new");
      let rests = document.querySelector(".reset");
      const winP = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
      ];
      const disb = () => {
        for (let box of boxes) {
          box.disabled = true;
        }
      };
      const enb = () => {
        for (let box of boxes) {
          box.disabled = false;
          box.innerText = " ";
        }
      };

      const restg = () => {
        turn0 = true;
        enb();
        msgs.innerText = "";
        //scores.innerText="";
      };
      const rest = () => {
        turn0 = true;
        enb();
        msgs.innerText = "";
        scoresX.innerText = "";
        scoresO.innerText = "";
        count = 0;
        count1 = 0;
      };

      boxes.forEach((box) => {
        box.addEventListener("click", () => {
          if (turn0) {
            box.innerText = "0";
            turn0 = false;
          } else {
            box.innerText = "X";
            turn0 = true;
          }
          box.disabled = true;
          checkWinner();
        });
      });
      const checkWinner = () => {
        for (let pattern of winP) {
          let ps1 = boxes[pattern[0]].innerText;
          let ps2 = boxes[pattern[1]].innerText;
          let ps3 = boxes[pattern[2]].innerText;

          if (ps1 != "" && ps2 != "" && ps3 != "") {
            if (ps1 === ps2 && ps2 === ps3) {
              disb();
              scor(ps1);

              win(ps1);
            }
          }
        }
      };
      let count = 0;
      let count1 = 0;
      const scor = (ps1) => {
        if (ps1 === "0") {
          count++;
        } else {
          count1++;
        }
        scoresO.innerText = count;
        scoresX.innerText = count1;
      };

      const win = (ps1) => {
        msgs.innerText = `Congrats!Winner is ${ps1} `;
      };

      news.addEventListener("click", rest);
      rests.addEventListener("click", restg);
    </script>
