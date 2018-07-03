new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue ninja",
    name: "Lovely People",
    url: "https://www.youtube.com/channel/UC8XuH3ynwdYuV_HV5n0I26A/featured",
    classes: ["one", "two"],
    content:
      'I am a student on Udemy. Yesterday I enrolled in a course called "Build Web Apps with Vue JS 2 & Firebase" by Shaun Pelling a.k.a "Net Ninja" on YouTube. So far, so good! I really appreciate his tone and inflection and the way he teaches in general.',
    content2:
      "So yeah, as you can maybe see, I've also learned some about Materialize CSS. I really like it and was introduced to it by Brad Traversy of Traversy Media on YouTube - he's another awesome instructor everywhere on YouTube and Udemy. Anywho, that's all I've got for now everyone, have a great morning, afternoon, night...where ever you are!"
  },
  methods: {
    greet(time) {
      return `Hello there and good ${time} ${this.name}!`;
    }
  }
});
