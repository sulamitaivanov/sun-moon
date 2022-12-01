let lightColor = 'on'

let lightBulb = document.getElementById('body')
let lightSwitch = document.getElementById('lightswitch')

console.log('Light Color', lightColor)

if (lightColor == 'on'){
    document.body.style.background = 'beige'
    
} else{
    document.body.style.background = 'black'
    
}



function updateBulb(){
    let image = document.getElementById('image');
    if(lightColor == 'on') {
        image.src = "moon.png";
        document.body.style.background = 'black'
        document.getElementById('lightswitch').innerText = "Off"
        lightColor = 'off'
    }else{
        image.src = "sun.png";
        document.body.style.background = 'beige'
        document.getElementById('lightswitch').innerText = "On"
        lightColor = 'on'
    }

    console.log('Status', lightColor)
}

lightSwitch.addEventListener('click', updateBulb)
