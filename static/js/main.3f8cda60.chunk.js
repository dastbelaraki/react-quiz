(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,t,n){e.exports={results:"Result__results___2G_ac",resultTitle:"Result__resultTitle___1JpQB",resultDescription:"Result__resultDescription___mD1U7",shoeTitle:"Result__shoeTitle___960zb",shoeDescription:"Result__shoeDescription___3zW9f",shoePrice:"Result__shoePrice___BrLY8"}},20:function(e,t,n){e.exports=n(51)},25:function(e,t,n){},3:function(e,t,n){e.exports={quiz:"Quiz__quiz___tRtRJ",question:"Quiz__question___qw0n8",quizButton:"Quiz__quizButton___3At6R"}},49:function(e,t,n){e.exports=n.p+"static/media/first-choice.a33960f8.png"},5:function(e,t,n){e.exports={App:"App__App___1Ez4i",startButton:"App__startButton___1Mnt_"}},50:function(e,t,n){e.exports=n.p+"static/media/second-choice.63f5d214.png"},51:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(12),i=n.n(o),r=(n(25),n(17)),c=n(13),u=n(14),l=n(18),h=n(15),m=n(19),_=n(16),p=n.n(_),d=n(5),f=n.n(d),w=n(3),E=n.n(w),g=function(e){return a.a.createElement("div",{className:E.a.quiz},a.a.createElement("h3",{className:E.a.question},e.question),a.a.createElement("div",null,a.a.createElement("button",{className:E.a.quizButton,onClick:function(){return e.selectedAnswer(0)}},e.answers[0].copy),a.a.createElement("button",{className:E.a.quizButton,onClick:function(){return e.selectedAnswer(1)}},e.answers[1].copy)))},z=n(2),q=n.n(z),v=function(e){return a.a.createElement("div",{className:q.a.results},a.a.createElement("h4",{className:q.a.resultTitle},"Congratulations!"),a.a.createElement("p",{className:q.a.resultDescription},"Based on your selection we've decided on the ",e.firstShoe," and ",e.secondShoe,"! Enjoy the 30 day trial!"),a.a.createElement("img",{src:n(49),alt:"first offer"}),a.a.createElement("h4",{className:q.a.shoeTitle},e.firstShoe),a.a.createElement("p",{className:q.a.shoeDescription},"Ultimate lightweight running shoe."),a.a.createElement("h5",{className:q.a.shoePrice},"CHF 230.00"),a.a.createElement("img",{src:n(50),alt:"second offer"}),a.a.createElement("h4",{className:q.a.shoeTitle},e.secondShoe),a.a.createElement("p",{className:q.a.shoeDescription},"Ultimate lightweight running shoe."),a.a.createElement("h5",{className:q.a.shoePrice},"CHF 220.00"))},Q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showQuiz:!1,showResult:!1},n.showQuizHandler=function(){n.setState({showQuiz:!0})},n.selectedAnswerHandler=function(e){var t=n.state.questions[n.state.nextQuestionID].answers[e],s=t.ratingIncrease,a=Object(r.a)(n.state.shoes),o=function(e){var t=a.find(function(t){return t.name===e});t.rating=t.rating+s[e]};for(var i in s)o(i);if(""!==t.nextQuestion)n.setState({nextQuestionID:t.nextQuestion,shoes:a});else{for(var c in n.state.shoes.sort(n.compare),a)a[c].name.includes("_")&&(a[c].name=a[c].name.replace("_"," "));n.setState({showResult:!0,showQuiz:!1})}},n.compare=function(e,t){return e.rating<t.rating?1:e.rating>t.rating?-1:0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("data.json").then(function(t){e.setState({shoes:t.data.shoes,questions:t.data.questions,nextQuestionID:0})})}},{key:"render",value:function(){return a.a.createElement("div",{className:f.a.App},this.state.showQuiz&&!this.state.showResult?a.a.createElement(g,{question:this.state.questions[this.state.nextQuestionID].copy,answers:this.state.questions[this.state.nextQuestionID].answers,selectedAnswer:this.selectedAnswerHandler}):!this.state.showQuiz&&this.state.showResult?a.a.createElement(v,{firstShoe:this.state.shoes[0].name,secondShoe:this.state.shoes[1].name}):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Take the quiz and try your first pair!"),a.a.createElement("button",{className:f.a.startButton,onClick:this.showQuizHandler},"Try On Trial")))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.3f8cda60.chunk.js.map