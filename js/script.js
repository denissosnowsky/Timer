window.addEventListener('DOMContentLoaded', ()=>{
    function counter(deadline){
        const gen = Date.parse(deadline) - Date.parse(new Date()),
              days = Math.floor(gen/(1000*60*60*24)),
              hours = Math.floor(gen/(1000*60*60)%24),
              minutes = Math.floor((gen/(1000*60))%60),
              seconds = Math.floor((gen/(1000))%60),
              miliseconds = Math.floor((1000-(new Date().getMilliseconds()))/10);

        return {
            'total': gen,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'miliseconds': miliseconds
        };
    }

    
        function vaults(selector1, selector2, data){
            const slctr1 = document.querySelector(selector1),
                g1 = slctr1.querySelector('.g1'),
                g2 = slctr1.querySelector('.g2'),
                g3 = slctr1.querySelector('.g3'),
                g4 = slctr1.querySelector('.g4'),
                g5 = slctr1.querySelector('.g5'),
                g6 = slctr1.querySelector('.g6'),
                g7 = slctr1.querySelector('.g7'),
                g8 = slctr1.querySelector('.g8'),
                g9 = slctr1.querySelector('.g9'),
                g10 = slctr1.querySelector('.g10'),
                g11 = slctr1.querySelector('.g11'),
                g12 = slctr1.querySelector('.g12'),
                g13 = slctr1.querySelector('.g13'),
                g14 = slctr1.querySelector('.g14'),
                g15 = slctr1.querySelector('.g15'),
                g16 = slctr1.querySelector('.g16'),
                g17 = slctr1.querySelector('.g17'),
                g18 = slctr1.querySelector('.g18'),
                g19 = slctr1.querySelector('.g19'),
                g20 = slctr1.querySelector('.g20'),
                g21 = slctr1.querySelector('.g21'),
                g22 = slctr1.querySelector('.g22'),
                g23 = slctr1.querySelector('.g23'),
                g24 = slctr1.querySelector('.g24'),
                g25 = slctr1.querySelector('.g25'),
                g26 = slctr1.querySelector('.g26'),
                g27 = slctr1.querySelector('.g27'),
                g28 = slctr1.querySelector('.g28'),
                g29 = slctr1.querySelector('.g29'),
                g30 = slctr1.querySelector('.g30'),
                g31 = slctr1.querySelector('.g31'),
                g32 = slctr1.querySelector('.g32'),
                g33 = slctr1.querySelector('.g33'),
                g34 = slctr1.querySelector('.g34'),
                g35 = slctr1.querySelector('.g35'),
                slctr2 = document.querySelector(selector2),
                gg1 = slctr2.querySelector('.g1'),
                gg2 = slctr2.querySelector('.g2'),
                gg3 = slctr2.querySelector('.g3'),
                gg4 = slctr2.querySelector('.g4'),
                gg5 = slctr2.querySelector('.g5'),
                gg6 = slctr2.querySelector('.g6'),
                gg7 = slctr2.querySelector('.g7'),
                gg8 = slctr2.querySelector('.g8'),
                gg9 = slctr2.querySelector('.g9'),
                gg10 = slctr2.querySelector('.g10'),
                gg11 = slctr2.querySelector('.g11'),
                gg12 = slctr2.querySelector('.g12'),
                gg13 = slctr2.querySelector('.g13'),
                gg14 = slctr2.querySelector('.g14'),
                gg15 = slctr2.querySelector('.g15'),
                gg16 = slctr2.querySelector('.g16'),
                gg17 = slctr2.querySelector('.g17'),
                gg18 = slctr2.querySelector('.g18'),
                gg19 = slctr2.querySelector('.g19'),
                gg20 = slctr2.querySelector('.g20'),
                gg21 = slctr2.querySelector('.g21'),
                gg22 = slctr2.querySelector('.g22'),
                gg23 = slctr2.querySelector('.g23'),
                gg24 = slctr2.querySelector('.g24'),
                gg25 = slctr2.querySelector('.g25'),
                gg26 = slctr2.querySelector('.g26'),
                gg27 = slctr2.querySelector('.g27'),
                gg28 = slctr2.querySelector('.g28'),
                gg29 = slctr2.querySelector('.g29'),
                gg30 = slctr2.querySelector('.g30'),
                gg31 = slctr2.querySelector('.g31'),
                gg32 = slctr2.querySelector('.g32'),
                gg33 = slctr2.querySelector('.g33'),
                gg34 = slctr2.querySelector('.g34'),
                gg35 = slctr2.querySelector('.g35');

            //color_function
            function setColor(...items){
                this.items = items;
                this.items.forEach(item=>{
                    item.style.backgroundColor = "#48d9ab";
                })
            }

            //switch_function_first
            function switchStartFirst(numberOrder){
                switch(numberOrder){
                    case 0:
                        setColor(g2,g3,g4,g6,g10,g11,g15,g16,g20,g21,g25,g26,g30,g32,g33,g34);
                    break;
                    case 1:
                        setColor(g3,g7,g8,g11,g13,g18,g23,g28,g31,g32,g33,g34,g35);
                    break;
                    case 2:
                        setColor(g2,g3,g4,g6,g10,g15,g19,g23,g27,g31,g32,g33,g34,g35);
                    break;
                    case 3:
                        setColor(g2,g3,g4,g6,g10,g15,g19,g25,g26,g30,g32,g33,g34);
                    break;
                    case 4:
                        setColor(g1,g5,g6,g10,g11,g15,g16,g17,g18,g19,g20,g25,g30,g35);
                    break;
                    case 5:
                        setColor(g1,g2,g3,g4,g5,g6,g11,g17,g18,g19,g25,g26,g30,g32,g33,g34);
                    break;
                    case 6:
                        setColor(g2,g3,g4,g6,g10,g11,g16,g17,g18,g19,g21,g25,g26,g30,g32,g33,g34);
                    break;
                    case 7:
                        setColor(g1,g2,g3,g4,g5,g10,g15,g19,g23,g27,g31);
                    break;
                    case 8:
                        setColor(g2,g3,g4,g6,g10,g11,g15,g17,g18,g19,g21,g25,g26,g30,g32,g33,g34);
                    break;
                    case 9:
                        setColor(g2,g3,g4,g6,g10,g11,g15,g17,g18,g19,g20,g25,g26,g30,g32,g33,g34);
                    break;
                }
            }
            //switch_function_second
            function switchStartSecond(numberOrder){
                switch(numberOrder){
                    case 0:
                        setColor(gg2,gg3,gg4,gg6,gg10,gg11,gg15,gg16,gg20,gg21,gg25,gg26,gg30,gg32,gg33,gg34);
                    break;
                    case 1:
                        setColor(gg3,gg7,gg8,gg11,gg13,gg18,gg23,gg28,gg31,gg32,gg33,gg34,gg35);
                    break;
                    case 2:
                        setColor(gg2,gg3,gg4,gg6,gg10,gg15,gg19,gg23,gg27,gg31,gg32,gg33,gg34,gg35);
                    break;
                    case 3:
                        setColor(gg2,gg3,gg4,gg6,gg10,gg15,gg19,gg25,gg26,gg30,gg32,gg33,gg34);
                    break;
                    case 4:
                        setColor(gg1,gg5,gg6,gg10,gg11,gg15,gg16,gg17,gg18,gg19,gg20,gg25,gg30,gg35);
                    break;
                    case 5:
                        setColor(gg1,gg2,gg3,gg4,gg5,gg6,gg11,gg17,gg18,gg19,gg25,gg26,gg30,gg32,gg33,gg34);
                    break;
                    case 6:
                        setColor(gg2,gg3,gg4,gg6,gg10,gg11,gg16,gg17,gg18,gg19,gg21,gg25,gg26,gg30,gg32,gg33,gg34);
                    break;
                    case 7:
                        setColor(gg1,gg2,gg3,gg4,gg5,gg10,gg15,gg19,gg23,gg27,gg31);
                    break;
                    case 8:
                        setColor(gg2,gg3,gg4,gg6,gg10,gg11,gg15,gg17,gg18,gg19,gg21,gg25,gg26,gg30,gg32,gg33,gg34);
                    break;
                    case 9:
                        setColor(gg2,gg3,gg4,gg6,gg10,gg11,gg15,gg17,gg18,gg19,gg20,gg25,gg26,gg30,gg32,gg33,gg34);
                    break;
                }
            }

            //reset_function
            function resetAll(...items){
                this.items = items;
                this.items.forEach(item=>{
                    item.style.cssText = "background-color:rgba(256, 256, 256, 0.03)";
                })
            }
            

            //If-task
            if(data>=10){
                const numberOne = Number(String(data)[0]),
                        numberTwo = Number(String(data)[1]);

                        resetAll(g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21,g22,g23,g24,g25,g26,g27,g28,g29,g30,g31,g32,g33,g34,g35,gg1,gg2,gg3,gg4,gg5,gg6,gg7,gg8,gg9,gg10,gg11,gg12,gg13,gg14,gg15,gg16,gg17,gg18,gg19,gg20,gg21,gg22,gg23,gg24,gg25,gg26,gg27,gg28,gg29,gg30,gg31,gg32,gg33,gg34,gg35);
                        switchStartFirst(numberOne);
                        switchStartSecond(numberTwo);
                        
            } else {
                        resetAll(g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21,g22,g23,g24,g25,g26,g27,g28,g29,g30,g31,g32,g33,g34,g35,gg1,gg2,gg3,gg4,gg5,gg6,gg7,gg8,gg9,gg10,gg11,gg12,gg13,gg14,gg15,gg16,gg17,gg18,gg19,gg20,gg21,gg22,gg23,gg24,gg25,gg26,gg27,gg28,gg29,gg30,gg31,gg32,gg33,gg34,gg35);
                        switchStartFirst(0);
                        switchStartSecond(data);
            }
}


function launcher(){
    vaults('.day-1', '.day-2', counter('2021-04-20T12:00:00').days);
    vaults('.hour-1', '.hour-2', counter('2021-04-20T12:00:00').hours);
    vaults('.minute-1', '.minute-2', counter('2021-04-20T12:00:00').minutes);
    vaults('.second-1', '.second-2', counter('2021-04-20T12:00:00').seconds);
    vaults('.milisecond-1', '.milisecond-2', counter('2021-04-20T12:00:00').miliseconds);
}

setInterval(launcher, 10);


});



