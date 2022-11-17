    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode"); 
    }

    function opennav() {
            document.getElementById("section").style.display = "block";
        }
        function closenav() {
            document.getElementById("section").style.display = "none";
            
        }
        function opennav2() {
            document.getElementById("section2").style.display = "block";
        }
        function closenav2() {
            document.getElementById("section2").style.display = "none";
            
        }
        function opennav3() {
            document.getElementById("section3").style.display = "block";
        }
        function closenav3() {
            document.getElementById("section3").style.display = "none";
            
        }

        function nav1(){
            document.getElementById("demo1").classList.toggle("skills-show");
            var x = document.getElementById("demo3");
            if (x.innerHTML === "{} Frontend Developer ⇩") {
                x.innerHTML = "{}Frontend Developer ⇧";
            } else {
                x.innerHTML = "{} Frontend Developer ⇩";
            }
        }

        function nav2(){
            document.getElementById("demo2").classList.toggle("skills-show");
            var x = document.getElementById("demo4");
            if (x.innerHTML === "! Backend Developer ⇩") {
                x.innerHTML = "! Backend Developer ⇧";
            } else {
                x.innerHTML = "! Backend Developer ⇩";
            }
        }

        function bar() {
            document.getElementById("hel").classList.toggle("top");
            var x = document.getElementById("demo5");
            if (x.innerHTML === "☰") {
                x.innerHTML = "✕";
            } else {
                x.innerHTML = "☰";
            }
        }