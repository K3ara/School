console.log("We are starting our animation now");

const hidden = document.querySelectorAll(".hidden");

const callback = (entries) => {

     entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
            console.log('hiiiiii');
        }else{
            entry.target.classList.add("hidden");
         }
        });
}

const options = {
    root:null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  const observer = new IntersectionObserver(callback, options);

  hidden.forEach((el)=> observer.observe(el));