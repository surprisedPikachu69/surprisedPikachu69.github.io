var data = {
    "answer": "butterfly",
    "hint1": "It is a living thing",
    "hint2" : "It flies",
    "hint3" : "It is an insect",
    "hint4" : "It is colorful"
}

var count = 0
    var answer = data.answer
    var msg = document.getElementById("msg")
    var hint1 = data.hint1
    var hint2 = data.hint2
    var hint3 = data.hint3
    var hint4 = data.hint4
    var winmsg = "You've won!"
    var lostmsg = "Butterfly is the answer"
    var exhaustmsg = "You've exhausted all your attempts"

    function guess(){
        var str = document.getElementById("ans").value.toUpperCase()
        document.getElementById("ans").value = ''
        count++

        switch(count){
            case 1:
                if(str == answer){
                    msg.innerHTML = winmsg
                }
                else{
                    msg.innerHTML = hint1
                }
                break
            case 2:
                if(str == answer){
                    msg.innerHTML = winmsg
                }
                else{
                    msg.innerHTML = hint2
                }
                break
            case 3:
                if(str == answer){
                    msg.innerHTML = winmsg
                }
                else{
                    msg.innerHTML = hint3
                }
                break
            case 4:
                if(str == answer){
                    msg.innerHTML = winmsg
                }
                else{
                    msg.innerHTML = hint4
                }
                break
            case 5:
                if(str == answer){
                    msg.innerHTML = winmsg
                }
                else{
                    msg.innerHTML = lostmsg
                }
                break    
            default:
                msg.innerHTML = exhaustmsg
                break
        }
    }