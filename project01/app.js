const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

    buttons.forEach(function(button){
        console.log(button)
        button.addEventListener('click', function(e){
            document.body.style.background = e.target.id;
            // console.log(e)
            // console.log(e.target)
            // console.log(e.target.id)
            // switch (e.target.id) {
            //     case 'grey':
            //         body.style.background = e.target.id
            //         break;
            //     case 'white':
            //         body.style.background = e.target.id
            //         break;
            //     case 'blue':
            //         body.style.background = e.target.id
            //         break;
            //     case 'yellow':
            //         body.style.background = e.target.id
            //         break;
            
            //     default:
            //         break;
            // }
        })
    })