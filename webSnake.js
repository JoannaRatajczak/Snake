const canvas = document.getElementById('canvas') 
const ctx = canvas.getContext('2d')

//Mutable state -> global cross all over function
let state = initialState()

//Position helper

const x = c => Math.round(c*canvas.width / state.cols)
const y = r => Math.round(c*canvas.height / state.rows)

//Game loop draw


// constants direction

const NORTH = { x: 0, y:-1}
const SOUTH = { x: 0, y: 1}
const EAST = { x: 1, y: 0}
const WEST = { x: 1, y: 0}

// Keys

window.addEventListener('keydown', => e {
    switch (e.key) {
        case 'w': case 'h': case 'ArrowUp': state = enquenque(state, NORTH); break 
                
    
        default:
            break;
    }
}

)




//Game loop update
const step = t1 => t2 => {
    if (t2-t1>100) {
        state = next(state)
        draw()
        window.requestAnimationFrame(step(t2))
    } else {
        window.requestAnimationFrame(step(t1))
    }
}


//Main
 
window.requestAnimationFrame(step(0)) 



