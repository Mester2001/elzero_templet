//toggle spain class on icon
document.querySelector(".toggle-settings .fa-gear").onclick=function(){
    // toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");

    //toggle class open on main settings box
    document.querySelector(".settings-box").classList.toggle("open");
};




//select landing peage Element

let landingpage = document.querySelector(".landing-page");
// Get Array Of Image 
let imagesArray =["1.png","2.png","3.jpg","4.jpg","5.jpg"];
//chang bg images url
setInterval(() => {
    let randomNumber= Math.floor(Math.random() * imagesArray.length);
    //chang bg img url
    landingpage.style.backgroundImage='url("images/' + imagesArray[randomNumber]+'")';
}, 1000);


let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    //skills Offset Top

    let skillsOffsetTop = ourSkills.OffsetTop;
   //this.console.log(skillsOuterHeight);
    let skillsOuterHeight = ourSkills.offsetHeight;

   let windowHeight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
    let allSKills = document.querySelectorAll(".skill-box .skill-progress span");
    allSKills.forEach(skill =>{
    skill.style.width = skill.dataset.progress;
    });

}

};
