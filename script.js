const qoute = document.querySelector(".qoute");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
let qoutText = [
  {
    author: "Maya Angelou",
    qoute: `" I’ve learned that people will forget what you said, people will
    forget what you did, but people will never forget how you made them
    feel "`,
  },
  {
    author: "Florence Nightingale",
    qoute: `"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."`,
  },
  {
    author: "Mark Twain",
    qoute: `"Whether you think you can or you think you can’t, you’re right."`,
  },
  {
    author: "Winston Churchill",
    qoute: `"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."`,
  },
  {
    author: "Walt Disney",
    qoute: `'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."`,
  },
  {
    author: "Jim Rohn",
    qoute: `Either you run the day, or the day runs you."',`,
  },
  {
    author: "Henry Ford",
    qoute: `'"Whether you think you can or you think you can’t, you’re right."'`,
  },
  {
    author: "Zig Ziglar",
    qoute: `"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."`,
  },
  {
    author: "Aristotle",
    qoute: `"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"`,
  },
  {
    author: "Booker T. Washington",
    qoute: `"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."`,
  },
];

btn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * qoutText.length);
  qoute.innerHTML = `${qoutText[index].qoute}`;
  author.innerHTML = `${qoutText[index].author}`;
});
