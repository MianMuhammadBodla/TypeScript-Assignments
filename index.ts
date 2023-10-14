//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let GuestList:Array<string>=[
    "Sultan Muhammad Ali",
    "Sultan Ahmad Ali",
    "Sultan Bhudhar Aziz",
    "Mian Sarwar Bodla"
    ];
    

    let guesthowcannotcoming:string="Mian Sarwar Bodla"
    console.log(`${guesthowcannotcoming} not coming`);

    let newguest:string="Allama-e-Iqbal"
    let indexofguesthowcannotcoming:number=GuestList.indexOf(guesthowcannotcoming)

    if (indexofguesthowcannotcoming !== -1){

        GuestList[indexofguesthowcannotcoming] = newguest
    }

    GuestList.forEach((guestname:string) =>{
    
        console.log(`Dear ${guestname} you are invited in dinner, please join us`)
        
        });