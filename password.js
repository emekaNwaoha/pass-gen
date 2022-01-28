window.addEventListener("load", function () {


    let gen = document.getElementById("generate")
    gen.addEventListener("click", function () {
        let password = ""
        let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
            "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","@", "!", "#", "%", "&", "*", "+"]
        
        if (check.checked === true)
        
        {
            let index = Math.floor(Math.random() * num.length)
            password = password + num[index];
        }
        if(check2.checked===true)

            {let index=Math.floor(Math.random()*sym.length)
            password=password+sym[index]
            }
        for (let step = 0;
            step < 6;
            step++
        ) {
            let index = Math.floor(Math.random() * char.length)
            password = password + char[index];
        }
       
        document.getElementById("display").value = password

    })
    

});


