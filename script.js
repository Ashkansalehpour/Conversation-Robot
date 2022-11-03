/* 
  Title: Conversation Robot

  Version:1.0 v

  Developer: Ashkan Salehpour

  Date:11/03/2022

  Description: JavaScript code of conversation robot which work with (function) , (if,else) and (else if)
*/


// You can write ('Hello','Hi','How are you?','Where are you from?','Do you want to be my friend?',''How old are you?','What is robot years old?','Good Bye')
let MyConversation = function(talk){
    //Conversation 1
    if(talk=='Hello'){
        alert('Hello')
    }
    // Conversation 2
    else if(talk=='Hi'){
        alert('Hi')
    }
    // Conversation 3
    else if(talk=='How are you?'){
        alert('I am fine and i wish you are fine too.')
    }
    // Conversation 4
    else if(talk=='Where are you from?'){
        alert('Robot land which we love humans')
    }
    // Conversation 5
    else if(talk=='Do you want to be my friend?'){
        alert('Yes, I do :)')
    }
    // Conversation 6
    else if(talk=='How old are you?'){
        alert('I am 3 years robot old')
    }
    // Conversation 7
    else if(talk=='What is robot years old?'){
        alert('It is the age which robots created')
    }
    //Conversation 8
    else if(talk=='Good Bye'){
        alert('Good bye my friend, have nice day.')
    }
    // IF you don't say anything
    else if(talk==''){
        alert('Come on , talk to me!!')
    }
    //If conversation is not available say this
    else{
        alert('Sorry i do not understand')
    }
 }
//  where your write your script to talk with robot in ''
 MyConversation('')