let SelectorA,SelectorB,zoneONE,zoneTWO
          
          SelectorA = document.getElementById("SelectorA")
          SelectorB = document.getElementById("SelectorB")
          zoneONE = document.querySelector(".about-us")
          zoneTWO = document.querySelector(".projects")

          SelectorA.addEventListener("click", ()=>
          {
                zoneONE.style.display = "block"
                zoneTWO.style.display = "none"    
                SelectorA.style.borderBottom = "1px solid grey"
                SelectorA.style.color = "black"
                SelectorB.style.borderBottom = "none"
                SelectorB.style.color = "grey"
          })

          SelectorB.addEventListener("click", ()=>
          {
                    zoneONE.style.display = "none"
                    zoneTWO.style.display = "block" 
                    SelectorB.style.borderBottom = "1px solid grey"
                    SelectorB.style.color = "black"   
                    SelectorA.style.borderBottom = "none"
                    SelectorA.style.color = "grey"
          })

          
let msgUser,btnCloseMSG,closed 
      
           
      msgUser = document.querySelector(".msg-pop")
      btnCloseMSG = document.querySelector(".close-msg")

      btnCloseMSG.addEventListener("click", ()=>
      {
                  msgUser.style.display = "none"
      })



      


  
