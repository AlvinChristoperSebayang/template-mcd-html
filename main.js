const mobile_navbar = document.getElementById("mobile_navbar");
const navbar_btn = document.getElementById("navbar_btn")
const close_btn = document.getElementById("close_btn")

const bar_chart = document.getElementsByClassName("bar");

let flying_card = document.createElement('div');
flying_card.innerHTML = `<div class="flying-card flex flex-col laptop:gap-y-[12px] mobile:gap-y-[8px] absolute  bg-white shadow-2xl w-fit rounded-3xl laptop:px-[15px] laptop:py-[18px] mobile:px-[11px] mobile:py-[13px] -translate-y-[350px]">
                          <figure>
                            <img src="/assets/Frame 66.svg" alt="">
                          </figure>
                          <p>Total Saving</p>
                          <span class="text-[20px] leading-[27.5px] font-semibold text-black">$ 150.000</span>
                          <p>2 of 10 goals complate</p>
                        </div>`;

let fig = '';
for (let [key, value] of Object.entries(bar_chart)) {
  value.addEventListener("mouseover", () => {
    const ea = value.appendChild(flying_card);
    fig = ea;
  })
}

for (let [key, value] of Object.entries(bar_chart)) {
  value.addEventListener("mouseout", () => {
    value.removeChild(fig);
  })
}


navbar_btn.addEventListener("click", () => {
  mobile_navbar.classList.toggle("hidden");
});

close_btn.addEventListener("click", () => {
  mobile_navbar.classList.toggle("hidden");
});

