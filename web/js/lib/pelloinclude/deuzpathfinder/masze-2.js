let matrix = [];

let imgVibrationMatrix = [];
let arckuvitei = [];
let isBoundarySelected = false

let arckuviteiReact = false


let getCanvasN;
let btn;
let pTag;
let cnvas;

let clicked = 0
let numOBoxes = 8
let numOBoxesPX = numOBoxes * numOBoxes * 10
let dimensionXY = (2 * numOBoxes) + numOBoxesPX
// let dimensionXYZ = (2 * numOBoxes) + numOBoxesPX
let discreteW = 1536
let discreteH = 754
let discreteD = 1536
let dimensionWFraction = ((dimensionXY) / discreteW)
let dimensionHFraction = ((dimensionXY) / discreteH)
// let dimensionDFraction = ((dimensionXYZ) / discreteD)
let dimensionW = 0
let dimensionH = 0
let dimensionD = 0

let ala = new Image ( 22, 12 )
ala.src = "./../../dimenszio/WARLDU/ala.bmp"
ala.setAttribute ("crossOrigin", "")

let ulo = new Image ( 22, 12 )
ulo.src = "./../../dimenszio/WARLDU/ulo.bmp"
ulo.setAttribute ("crossOrigin", "")

let uloB = new Image ( 22, 12 )
uloB.src = "./../../dimenszio/WARLDU/ulo-b.bmp"
uloB.setAttribute ("crossOrigin", "")

let osisi = new Image ( 22, 12 )
osisi.src = "./../../dimenszio/WARLDU/osisi.bmp"
osisi.setAttribute ("crossOrigin", "")

let osisiB = new Image ( 22, 12 )
osisiB.src = "./../../dimenszio/WARLDU/osisi-b.bmp"
osisiB.setAttribute ("crossOrigin", "")

let hut = new Image (22, 12)
hut.src = "./../../../dimenszio/algoridum/hut.png"
hut.setAttribute ('crossOrigin', '')

let cauldron = new Image (22, 12)
cauldron.src = "./../../../dimenszio/algoridum/african cauldron with jellof rice.png"
cauldron.setAttribute ("crossOrigin", "")
let cauldronX = 0
let cauldronY = 0
let cauldronZ = 0

let goalImgdimensionData = {}
let goalImg = new Image (22, 12)
goalImg.src = "./../../../dimenszio/algoridum/deuz.png"
goalImg.setAttribute ('crossOrigin', '')
let goalX = 0
let goalY = 0
let goalZ = 0
let gImgVibrationMatrix = []

let originImgdimensionData = {}
let originImg = new Image (22, 12)
originImg.src = "./../../../dimenszio/algoridum/plateORice.png"
originImg.setAttribute ('crossOrigin', '')
let originX = 0
let originY = 0
let oImgVibrationMatrix = []

let discourse = []

let range = []
let stepCountX = 0
let stepCountY = 0
let neighbourhood = []

let hex = ""

let clickedComplete = new Event ("interactionComplete")

let goalImgPatternData

let discoursePixels 

let discoursePattern

let discourseData = {
  x: "discourseSpaceX",
  y: "discourseSpaceY",
  width: 0,
  height: 0,
  cyber_physical_pattern: undefined
}

let discourseWarlrd = -1

let cog = []

// let 

let displayProcessSecurityUI = () =>
{
//    processSecurityService.msgerToggle ()
//
//    if (processSecurityService.isDisplayed)
//    {
    console.log ("AzuGardian Biafrost ajar!")
//    }
}

// umiy na-ru duo
let setUniverse = () =>
{
  getCanvasN = document.querySelector ("canvas");
  btn = document.querySelector ("button");
  pTag = document.querySelector ("#tell-me");
  pTag.textContent = " "

  // let ctx = getCanvasN.getContext ("2d")

  btn.addEventListener ("click", () => {
    location.reload ()
  })

  getCanvasN.addEventListener ("pointerdown", (e) => {
    canvasIsClicked (e)
  })

  dimensionW = dimensionWFraction * window.innerWidth
  dimensionH = dimensionHFraction * window.innerHeight

  dimensionW < dimensionH ? dimensionW = dimensionW : dimensionW = dimensionH

  // let imgData = ctx.getImageData (0, 0, dimensionW, dimensionH).data
  
  getCanvasN.style.width = dimensionW + "px"
  getCanvasN.style.height = dimensionW + "px"
  // getCanvasN.style.backgroundImage = "url ('./../../../dimenszio/WARLDU/zitaverse.png')"

  pTag.textContent = "Please, interact with the dark space to set goal."

  setMatrix (getCanvasN, dimensionW)

  setBoundaries (getCanvasN)
}

// google n stackoverflw aid
let rgbToHex = (r, g, b) =>
{
  if (r > 255 || g > 255 || b > 255)
      throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}

// Quantum Mechanic status cognizio
let cognizeStata = (recog) =>
{
  arckuvitei.push (imgVibrationMatrix)
  // arckuvitei = imgVibrationMatrix

  let wrl0 = sessionStorage.getItem ("warlrd " + discourseWarlrd - 1)
  let wrl1 = sessionStorage.getItem ("warlrd " + discourseWarlrd) 

  if (wrl0 !== null)
  wrl0.cyber_physical_pattern.filter (xt, k => {
    if (JSON.stringify (xt) !== JSON.stringify (wrl1.cyber_physical_pattern [k]))
    {
      pTag.textContent = "Status remains unchanged..."
      cog.push (xt)
    }
  })

  if ((cog.length === 0) && (JSON.stringify (cog [discourseWarlrd]) === JSON.stringify (recog)))
  {
    pTag.textContent += " Activity has been confirmed and is recognized, click elsewhere and try again"

    arckuviteiReact = true

    // return
  }  
}

// reality constructor et scaffold ... strctr
let perceiveMatrix = (data) =>
{
  // event.preventDefault ()
//  maseService.setDiscourse (data).subscribe (
//    data => handleDiscourseResponse (data),
//    error => handleDiscourseError (error)
//  )


  discourseWarlrd++

  discoursePixels = organizeVibrationMatrix (data)

  discoursePattern = []

  discoursePixels.forEach (el => {
    discoursePattern.push (el)
  })

  discourseData = {
    x: data.x,
    y: data.y,
    width: dimensionW,
    height: dimensionH,
    cyber_physical_pattern: discourse.push ( discoursePattern )
  }

  sessionStorage.setItem ('warlrd ' + discourseWarlrd, discourseData)

  cognizeStata (discourseData.cyber_physical_pattern)
}

// imagination sets
let organizeVibrationMatrix = (imgData) =>
{

  imgVibrationMatrix = []

  let vibrationMatrixColCount = 0
  let vibrationCount = 0
  let vibrationMatrix = []
  imgData.forEach (el => {

    vibrationMatrixColCount ++
    vibrationCount ++
    vibrationMatrix.push (el)

    if ( vibrationCount === 4 )
    {
      let vibrationMatrixHex = "#" + ("000000" + rgbToHex (vibrationMatrix [0], vibrationMatrix [1], vibrationMatrix [2])).slice (-6)

      imgVibrationMatrix.push (vibrationMatrixHex)

      vibrationMatrix = []
      vibrationCount = 0
    }

    if (vibrationMatrixColCount === imgData.length / 4)
    {
      return imgVibrationMatrix
    }
  })

  return ["#ff0000"]
}

let reportWindowSize = (window) =>
{
  dimensionW = dimensionWFraction * window.innerWidth
  dimensionH = dimensionHFraction * window.innerHeight
}

let handleDiscourseResponse = (data) =>
{
  console.log ("Success response:", data)
}

let handleDiscourseError = (error) =>
{
  console.log ("Error response:", error)
}

// Set of Domain of Discourse
let setMatrix = (getCanvas, dimensionW) =>
{
  // ctx = getCanvas.getContext ("3d")
  // ctx = getCanvas.getContext ("webgl2")
  // ctx = getCanvas.getContext ("bitmaprender")
  ctx = getCanvas.getContext ("2d")

//    ctx.rotate (5.05)

  // If the screen device has a pixel ratio over 1
  // We render the canvas twice bigger to make it sharper (e.g. Retina iPhone)
  // if (window.devicePixelRatio > 1) 
  // {
  //   getCanvasN.width = getCanvasN.clientWidth * 2;
  //   getCanvasN.height = getCanvasN.clientHeight * 2;
  //   ctx.scale(2, 2);
  // } 
  // else 
  // {
  //   getCanvasN.width = width;
  //   getCanvasN.height = height;
  // }

  let i = 0
  let j = 0

  let col = 0

  for (let i = 0; i <= dimensionW; i += (20))
  {
      let row = 0

      col++

      for (let j = 0; j <= dimensionW; j += 10)
      {
        row++

        let cellObj = {
            x: i,
            y: j,
            row: row,
            col: col
        }

        matrix.push (cellObj)
      }
  }

  
  // if (clicked > 1)
  // {
  //   // return
  //   findRangeOfGRespectToO ()
  // }

  // if (randKey <= 0.49)
  // {
  //   // randKey = 0
  //   setGoal (e)
  // }
  // else 
  // {
  //   // randKey = 1
  //   setOrigin (e)
  // }
  let randKey = 1

  matrix.forEach (cell => {
    randKey = Math.random ()

    // this.ctx.drawImage(ala, cell.x, cell.y, 20, 10);
    // this.ctx.drawImage(randKey <= 0.49 ? osisiB : osisi, randKey > 0.49 ? cell.x + 20 : cell.x, randKey <= 0.49 ? cell.y + 10 : cell.y, 20, 10);
    // this.ctx.drawImage((randKey <= 0.49) ? osisiB : osisi, cell.x, cell.y, 20, 10);
    this.ctx.drawImage((randKey <= 0.49) ? ((randKey < 0.23) ? osisiB : osisi) : ala, cell.x, cell.y, 20, 10);
    ctx.beginPath ()
    // ctx.lineWidth = "1";
    // ctx.strokeStyle="#000000"
    // ctx.fillStyle = "#00F000"
    ctx.fillStyle = "#900d0e"
    ctx.strokeStyle = "#e4e4e4"
    ctx.strokeStyle = "#ff9000"
    ctx.rect (cell.x, cell.y, 22, 12)
    //  ctx.fill ()
    // ctx.stroke ()
    // ctx.globalAlpha = 0.5
        //  ctx.rotate (180)
        //  ctx.rotate (45)
        ala.style.transform = "rotate(45)"
        osisi.style.transform = "rotate(45)"
        osisiB.style.transform = "rotate(45)"

    let matrixCellText = "a" + cell.row + cell.col
    ctx.font = "normal 1000 7.457px Calibri"
    // ctx.fontWeight = "bold"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#000"
    // ctx.fillStyle = "#ff9000"

    //  ctx.fillText (matrixCellText, cell.x + 10, cell.y + 5)

//      ctx.rotate (13.23)
  })

  let imgData = ctx.getImageData (0, 0, dimensionW, dimensionH).data

  perceiveMatrix (imgData)
}

// limitatio factors
let setBoundaries = (getCanvas) =>
{
  let i = 0
  let j = 0

  let boundariesPos = []

  for (i; i <= dimensionW; i += (20 * 2))
  {

    let min = 0

    let randN00 = Number (Math.random () * (numOBoxesPX - min) + min),
        randN01 = Number (Math.random () * (numOBoxesPX - min) + min),
        randRange = 0, checkRangeDiff = 0, numOBarrierBoxes = 0

    if ( randN00 % numOBoxes !== 0 ) randN00 = Number (randN00 / numOBoxes) * numOBoxes
    if ( randN01 % numOBoxes !== 0 ) randN01 = Number (randN01 / numOBoxes) * numOBoxes

    checkRangeDiff = randN01 - randN00
    if ((checkRangeDiff + "").match (/[-*]/s) )
    {
        randRange = randN00 - randN01
    }
    else randRange = checkRangeDiff

    numOBarrierBoxes = randRange / ((numOBoxes) )

    let n = 0
    let newRandX = randN00 < randN01 ? randN00 : randN01
    let newRandX2 = randN00 > randN01 ? randN00 : randN01

    let boundArr = []

    for (j = newRandX; j <= newRandX2; j += 20)
    {
        let boundaryObj = {
            x: j,
            y: i
        }

        boundArr.push (boundaryObj)
        boundariesPos.push (boundArr)

        n++

        if (n >= numOBoxes)
        {
            break
        }
    }
  }

  let boundX = []
  let boundY = []

  let diffCellArr = []

  matrix.forEach (cell => {

    boundariesPos.forEach (boundariesEl => {

        let diffCell = 0

        if ((cell.x < boundariesEl [0].x && boundariesEl [0].x < cell.x + 22))
        {
            let num = 0
            diffCell = boundariesEl [0].x - cell.x
            boundariesEl [0].x = cell.x

            boundariesEl.forEach (bound => {
                num++
                if (num === 1)
                {
                    bound.x = cell.x
                }
                else
                {
                    bound.x -= diffCell
                }
            })
        }
    })
  })

  let boundaryObjArr = []

  boundariesPos.forEach (boundArr => {

      boundArr.forEach (el => {
          boundaryObjArr.push (el)
      })
  })

  boundaryObjArr.forEach (bound => {

      ctx.beginPath ()
      // // ctx.lineWidth = "1";
      // ctx.strokeStyle="#ffffff"
      ctx.fillStyle="#6d007e"
      ctx.rect (bound.x, bound.y, 20, 10)
      ctx.fill ()

//        ctx.drawImage(hut, bound.x, bound.y, 20, 10)

      // setTimeout (() => {

      // }, 1000)
      // ctx.drawImage(hut, originX, originY, 20, 10)
      // ctx.strokeRect (bound.x, bound.y, 20, 10)
      // ctx.stroke ()
  })

  contxt = getCanvasN.getContext ("2d")
  let imgData = contxt.getImageData (0, 0, dimensionW, dimensionH).data

  // pe

  perceiveMatrix (imgData)
}

let setUserInteraction = (getCanvas, pTag) =>
{
  let userIntr = []
}

// potentio l'limitatio de bounda
let detectBoundaries = () =>
{
  let bounds = []

  discourse [0].forEach(el => {
    if (el !== "#000000")
    // if (el !== "#000000" || el !== "#ff9000")
      bounds.push (el)
  });

  return bounds
}

// critical intent
let setGoal = (e) =>
{
  // let userIntr = []

  // let pTag = document.querySelector ("p")

  setUserInteraction (getCanvasN, pTag)

  let gImgData = []
  let gImgHex = ""

  let gImgVibrationMatrix = []
  let gImgDataLength = 0

  // if ( clicked < 1 )
  // {
      cnvas =  getCanvasN.getBoundingClientRect ()
      ctx.beginPath ()
      ctx.lineWidth = "1";
      ctx.strokeStyle="#ffffff"
      ctx.fillStyle="#0000FF"

      goalX = (e.clientX - cnvas.left) / (cnvas.right - cnvas.left) * getCanvasN.width,
          goalY = (e.clientY - cnvas.top) / (cnvas.bottom - cnvas.top) * getCanvasN.height

      contxt = getCanvasN.getContext ("2d")
      imgData = contxt.getImageData (goalX, goalY, 1, 1).data
      hex = "#" + ("000000" + rgbToHex (imgData [0], imgData [1], imgData [2])).slice (-6)

      // console.log (detectBoundaries ())

      document.getElementById ("tell-me").textContent = imgVibrationMatrix

      isBoundarySelected = false

      let boundaries = detectBoundaries ()
      boundaries.filter (el => {
        if (hex === el)
          isBoundarySelected = true
      })

      if (isBoundarySelected)
      {
        pTag.textContent = ""
        pTag.textContent = "That's a boundary, please interact with the dark space to set goal."

        clicked = 0
        return
      }

      matrix.forEach (cell => {

          if ((cell.x < goalX && goalX < cell.x + 22) && (cell.y < goalY && goalY < cell.y + 12))
          {
            goalX = cell.x
            goalY = cell.y

              return
          }
      })

      let goalObj = {
          id: 0,
          x: goalX,
          y: goalY
      }

      // userIntr.push (goalObj)

      ctx.drawImage(goalImg, goalX, goalY, 20, 10);
      // ctx.drawImage(hut, goalX, goalY, 20, 10);
      goalImgdimensionData = {
          x: goalX,
          y: goalY,
          w: 20,
          h: 10
      }

      var goalText = "Goal"

      ctx.font = "10px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#ffffff"

      ctx.fillText (goalText, goalX + 10, goalY + 16)

      isBoundarySelected = false

      boundaries = detectBoundaries ()
      boundaries.filter (el => {
        if (hex === el)
          isBoundarySelected = true
      })

      // arckuvitei [discourseWarlrd].filter (le, jl => {
      //   // if (JSON.stringify (el) === JSON.stringify (arckuvitei [discourseWarlrd]))  
      //   // {
      //   //   // isGoalAakay = true


      //   // }
      //   // else
      //   // {
      //   //   el.filter (eb => {
      //   //     if ((eb === gImgHex && ((originX >= goalImgdimensionData.x && originX <= goalImgdimensionData.x + goalImgdimensionData.w) && (originY >= goalImgdimensionData.y && originY <= goalImgdimensionData.y + goalImgdimensionData.h))))
      //   //     isGoalImgClicked = true
      //   //   })
      //   // }   
        
      //   le [jl].filter (bvnt => {
      //     if ((bvnt === gImgHex && ((originX >= goalImgdimensionData.x && originX <= goalImgdimensionData.x + goalImgdimensionData.w) && (originY >= goalImgdimensionData.y && originY <= goalImgdimensionData.y + goalImgdimensionData.h))))
      //       isGoalImgClicked = true
      //   })
      // })

      if (arckuviteiReact)
      // if (isGoalImgClicked)
      {
        // pTag.textContent = ""
        // pTag.textContent = "Error, wrong place 4 nw!!."

        // isGoalImgClicked = false
        clicked = 0

        return
      }

      // discourseData = {
      //   x: goalImgdimensionData.x,
      //   y: goalImgdimensionData.y,
      //   width: goalImgdimensionData.w,
      //   height: goalImgdimensionData.h,
      //   cyber_physical_pattern: gImgHex
      // }
  // }

  clicked++

  if (clicked === 1)
  pTag.textContent = "Please, click the Z.  to set origin."
  else if ( clicked > 1 )
  {
    pTag.textContent = "tracking..."

    
  }

  contxt = getCanvasN.getContext ("2d")
  imgData = contxt.getImageData (0, 0, dimensionW, dimensionH).data

  perceiveMatrix (imgData)

  // findObjectInDiscourse ()
}

let setOrigin = (e) =>
{
  let userIntr = []

  // let getCanvas = getCanvas

  // let getCanvas = document.querySelector ("canvas")

  // imgVibrationMatrix = []

  // if ( clicked == 1 )
  // {
      cnvas =  getCanvasN.getBoundingClientRect ()
      ctx.beginPath ()
      ctx.lineWidth = "1";
      ctx.strokeStyle="#ffffff"
      ctx.fillStyle="#00FF00"

      originX = (e.clientX - cnvas.left) / (cnvas.right - cnvas.left) * getCanvasN.width,
      originY = (e.clientY - cnvas.top) / (cnvas.bottom - cnvas.top) * getCanvasN.height

      let isGoalImgClicked = false

      contxt = getCanvasN.getContext ("2d")
      let oimgData = contxt.getImageData (originX, originY, 1, 1).data
      // arckuvitei = organizeVibrationMatrix (imgData)
      hex = "#" + ("000000" + rgbToHex (oimgData [0], oimgData [1], oimgData [2])).slice (-6)

      // console.log (imgVibrationMatrix)

      document.getElementById ("tell-me").textContent = imgVibrationMatrix
      isBoundarySelected = false

      let boundaries = detectBoundaries ()
      boundaries.filter (el => {
        if (hex === el)
          isBoundarySelected = true
      })

      // arckuvitei [discourseWarlrd].filter (el => {
      //   if (el === hex && ((originX >= goalImgdimensionData.x && originX <= goalImgdimensionData.x + goalImgdimensionData.w) && (originY >= goalImgdimensionData.y && originY <= goalImgdimensionData.y + goalImgdimensionData.h)))
      //   {  
      //     isGoalImgClicked = true        
      //   }
      // })

      if (arckuviteiReact)
      // if (isGoalImgClicked)
      {
        // pTag.textContent = ""
        // pTag.textContent = "Goal is set already!!."

        // isGoalImgClicked = false
        clicked = 0

        return
      }

      if (isBoundarySelected)
      {
        // if (isGoalImgClicked)
        // {
        //   pTag.textContent = ""
        //   pTag.textContent = "Goal is set already!!."

        //   isGoalImgClicked = false
        //   clicked = 1

        //   return
        // }

        pTag.textContent = ""
        pTag.textContent = "That's a boundary, please interact with the dark space to set origin and initiate route finding."
        clicked = 0

        return
      }


      matrix.forEach (cell => {

          if ((cell.x < originX && originX < cell.x + 22) && (cell.y < originY && originY < cell.y + 12))
          {
            originX = cell.x
            originY = cell.y

              return
          }
      })

      let originObj = {
          id: 1,
          x: originX,
          y: originY
      }

      userIntr.push (originObj)

      ctx.drawImage(originImg, originX, originY, 20, 10)

      var goalText = "Start"

      ctx.font = "10px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#ffffff"

      ctx.fillText (goalText, originX + 10, originY + 16)

      let oImgData = ctx.getImageData (0, 0, dimensionW, dimensionH).data
      let ohex = "#" + ("000000" + rgbToHex (oImgData [0], oImgData [1], oImgData [2])).slice (-6)
      // organizeVibrationMatrix (oImgData)
      // oImgVibrationMatrix.push (imgVibrationMatrix)
      // console.log (oImgVibrationMatrix [0])
      // console.log ("mousedown X: " + originX)
      // console.log ("mousedown y: " + originY)
      // console.log ("mousedown page X: " + e.pageX)
      // console.log ("mousedown page y: " + e.pageY)
  // }

  // discourseData = {
  //   x: originX,
  //   y: originY,
  //   width: originX + 10,
  //   height: originY + 16,
  //   cyber_physical_pattern: ohex
  // }

  clicked++

  if (clicked === 1)
  pTag.textContent = "Please, click the Z.  to set goal."
  else if ( clicked > 1 )
  {
    pTag.textContent = "tracking..."

    
  }

  // findObjectInDiscourse ()

  // let isRangeFound = findRangeOfGRespectToO ()

  // if (isRangeFound)
  //   findNeighbourhoodOfGRespectToOAndPaths ()
  // else
  // {
  //   pTag.textContent = ""
  //   pTag.textContent = "Sorry, range could not be found, you sure your goal and origin exist?"
  // }
  contxt = getCanvasN.getContext ("2d")
  let imgData = contxt.getImageData (0, 0, dimensionW, dimensionH).data

  perceiveMatrix (imgData)
}

let setOrigin2 = (e) =>
{
  let userIntr = []

  // let getCanvas = getCanvas

  // let getCanvas = document.querySelector ("canvas")
  let pTag = document.querySelector ("p")

  imgVibrationMatrix = []

  if ( clicked == 2 )
  {
      let cnvas =  getCanvasN.getBoundingClientRect ()
      ctx.beginPath ()
      ctx.lineWidth = "1";
      ctx.strokeStyle="#ffffff"
      ctx.fillStyle="#00FF00"

      cauldronX = (e.clientX - cnvas.left) / (cnvas.right - cnvas.left) * getCanvasN.width,
      cauldronY = (e.clientY - cnvas.top) / (cnvas.bottom - cnvas.top) * getCanvasN.height

      let isGoalImgClicked = false
      let isOriginImgClicked = false

      if ((cauldronX >= goalImgdimensionData.x && cauldronX <= goalImgdimensionData.x + goalImgdimensionData.w) && (cauldronX >= goalImgdimensionData.y && cauldronY <= goalImgdimensionData.y + goalImgdimensionData.h))
          isGoalImgClicked = true

      if ((cauldronX >= originImgdimensionData.x && cauldronX <= originImgdimensionData.x + originImgdimensionData.w) && (cauldronX >= originImgdimensionData.y && cauldronY <= originImgdimensionData.y + originImgdimensionData.h))
          isOriginImgClicked = true

      contxt = getCanvasN.getContext ("2d")
      let imgData = contxt.getImageData (cauldronX, cauldronY, 1, 1).data
      hex = "#" + ("000000" + rgbToHex (imgData [0], imgData [1], imgData [2])).slice (-6)

      let isPickedVibrationImgVibration = imgVibrationMatrix.filter (el => {

          return el === hex && el === "#000000"
      })

      isBoundarySelected = false

      let boundaries = detectBoundaries ()
      boundaries.forEach (el => {
        if (hex === el)
          isBoundarySelected = true
      })

      if ((isGoalImgClicked && isPickedVibrationImgVibration) || isBoundarySelected)
      {
          if (isGoalImgClicked)
          {
              pTag.textContent = ""
              pTag.textContent = "Goal is set already!!."
              console.log (`this is this?`)
              console.log (`this is the hex code = ${hex}`)
              clicked = 1
              return
          }

          pTag.textContent = ""
          pTag.textContent = "That's a boundary, please interact with the dark space to set origin and initiate route finding."
          clicked = 1

          return
      }


      matrix.forEach (cell => {

          if ((cell.x < originX && originX < cell.x + 22) && (cell.y < originY && originY < cell.y + 12))
          {
            originX = cell.x
            originY = cell.y

              return
          }
      })

      let originObj = {
          id: 1,
          x: originX,
          y: originY
      }

      userIntr.push (originObj)

      ctx.drawImage(originImg, originX, originY, 20, 10)

      var goalText = "Start"

      ctx.font = "10px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#ffffff"

      ctx.fillText (goalText, originX + 10, originY + 16)

      console.log ("mousedown X: " + originX)
      console.log ("mousedown y: " + originY)
      console.log ("mousedown page X: " + e.pageX)
      console.log ("mousedown page y: " + e.pageY)
  }

  clicked++

  if ( clicked == 1 )
      pTag.textContent = ""
      pTag.textContent = "Tracking..."


  perceiveMatrix (discourseData)
}

let findObjectInDiscourse = () =>
{
  let cellData00 = []
  let cellData00Y = -1
  let cellData00YArr = []
  let cellData01 = []
  let cellData01Y = -1
  let cellData01YArr = []

  if (discourse.length <= 2)
  {
    discourse [0].map ((val0, index0) => {

      cellData00Y++

      discourse [1].map ((val1, index1) => {
        if (val0 !== val1)
        {
          cellData00YArr.push (cellData00Y)
          cellData00.push ([index1, val1, cellData00YArr])
        }
      })
    })
  }
  else
  {
    discourse [0].map ((val0, index0) => {

      cellData01Y++

      discourse [2].map ((val2, index2) => {
        if (val0 !== val2)
        {
          cellData01YArr.push (cellData01Y)
          cellData01.push ([index2, val2, cellData01YArr])
        }
      })
    })
  }    
}

/* Find and display the range of the closed intervals
*  of Goal to Origin
*  on x and y axis;
*  2D coordinate plane.
*  (Goal-Oriented)
*/
let findRangeOfGRespectToO = () =>
{
  // where is Goal, g
  let gCellDataX = goalX + 20
  let gCellDataY = goalY + 10

  

  ctx.fillStyle = "#f90000"
  // ctx.strokeStyle = "#e4e4e4"
  ctx.strokeStyle = "#f90000"
  ctx.rect (goalX, goalY, 20, 10)
  // ctx.fill ()
  ctx.stroke ()

  ctx.beginPath ()
  ctx = getCanvasN.getContext ("2d")
  ctx.fillStyle = "#f90000"
  // ctx.strokeStyle = "#e4e4e4"
  ctx.strokeStyle = "#ffbf00"
  ctx.rect (originX, originY, 20, 10)
  // ctx.fill ()
  ctx.stroke ()

  // closed interval [Goal, Origin] 
  let rangeX = 0
  let rangeY = 0

  let rangeCtxX
  let rangeCtxY

  isBoundarySelected = false

  // let boundaries = detectBoundaries ()
  // boundaries.filter (el => {
  //   if (hex2 === el)
  //     isBoundarySelected = true
  // })
  
  if ((goalX < originX || goalX > originX) || (goalY < originY  || goalY > originY))
  {
    // if (goalX < originX || goalY < originY)
    // {

      stepCountX = -1
      stepCountY = -1

      let i = 0
      let j = 0

      let lineStartX = 0
      let lineStartY = 0

      if (goalX < originX)
      {
        rangeX = originX - goalX

        i = goalX

        lineStartX = i + (goalImgdimensionData.w / 2)

        for (i; i <= originX - (goalImgdimensionData.w * 2); i += goalImgdimensionData.w)
        {
          // ctx.beginPath ()
          rangeCtxX = getCanvasN.getContext ("2d")
          let rangeImgData = rangeCtxX.getImageData (goalX, originY, 1, 1).data
          hex2 = "#" + ("000000" + rgbToHex (rangeImgData [0], rangeImgData [1], rangeImgData [2])).slice (-6)

          stepCountX += 1

          rangeCtxX.beginPath ()
          rangeCtxX.strokeStyle = "#d90000"
          rangeCtxX.lineWidth = 1
          rangeCtxX.moveTo (lineStartX, goalY + (goalImgdimensionData.h / 2))
          rangeCtxX.lineTo (i + ((goalImgdimensionData.w * 2) + goalImgdimensionData.w / 2), goalY + (goalImgdimensionData.h / 2))
          rangeCtxX.stroke ()

          // console.log ("this is step", stepCountX)

          if (hex2 === "#6d007e")
          {
            console.log ("boundary hit at step count, " + stepCountX + "!!")
            // break
          }
        }
      }

      if (goalX > originX)
      {
        rangeX = goalX - originX

        i = goalX

        lineStartX = i + (goalImgdimensionData.w / 2)

        for (i; i >= originX; i -= goalImgdimensionData.w)
        {
          // ctx.beginPath ()
          rangeCtxX = getCanvasN.getContext ("2d")
          let rangeImgData = rangeCtxX.getImageData (goalX, originY, 1, 1).data
          hex2 = "#" + ("000000" + rgbToHex (rangeImgData [0], rangeImgData [1], rangeImgData [2])).slice (-6)

          stepCountX++

          rangeCtxX.beginPath ()
          rangeCtxX.strokeStyle = "#d90000"
          rangeCtxX.lineWidth = 1
          rangeCtxX.moveTo (lineStartX, goalY + (goalImgdimensionData.h / 2))
          rangeCtxX.lineTo (i + (goalImgdimensionData.w / 2), goalY + (goalImgdimensionData.h / 2))
          rangeCtxX.stroke ()

          // console.log ("this is step", stepCountX)

          if (hex2 === "#6d007e")
          {
            console.log ("boundary hit at step count, " + stepCountX + "!!")
            // break
          }
        }

      }

      if (goalY < originY)
      {
        rangeY = originY - goalY

        j = goalY

        lineStartY = j + (goalImgdimensionData.h / 2)

        for (j; j <= originY; j += goalImgdimensionData.h)
        {
          // ctx.beginPath ()
          rangeCtxY = getCanvasN.getContext ("2d")
          let rangeImgData = rangeCtxY.getImageData (goalX, originY, 1, 1).data
          hex2 = "#" + ("000000" + rgbToHex (rangeImgData [0], rangeImgData [1], rangeImgData [2])).slice (-6)

          stepCountY++

          rangeCtxY.beginPath ()
          rangeCtxY.strokeStyle = "#d90000"
          rangeCtxY.lineWidth = 1
          rangeCtxY.moveTo (goalX + (goalImgdimensionData.w / 2), lineStartY)
          rangeCtxY.lineTo (goalX + (goalImgdimensionData.w / 2), j + (goalImgdimensionData.h / 2))
          rangeCtxY.stroke ()

          if (((goalX < originX && originY > goalY) || (goalX > originX && originY > goalY)) && (goalX !== originX && originY !== goalY))
          {
            let k = j
            for (k; k <= originY - (goalImgdimensionData.h / 2); k += (goalImgdimensionData.h / 2))
            {
              rangeCtxX = getCanvasN.getContext ("2d")
              let rangeImgData = rangeCtxX.getImageData (goalX, originY, 1, 1).data
              hex2 = "#" + ("000000" + rgbToHex (rangeImgData [0], rangeImgData [1], rangeImgData [2])).slice (-6)

              rangeCtxX.beginPath ()
              rangeCtxX.strokeStyle = "#d90000"
              rangeCtxX.lineWidth = 1
              rangeCtxX.moveTo (lineStartX, k + goalImgdimensionData.h)
              rangeCtxX.lineTo (i + (goalImgdimensionData.w + (goalImgdimensionData.w / 2)), k + goalImgdimensionData.h)
              rangeCtxX.stroke ()
            }
          }

          // console.log ("this is step Y", stepCountY)

          if (hex2 === "#6d007e")
          {
            console.log ("boundary hit at step count, " + stepCountY + "!!")
            // break
          }
        }
      }
    // }

    // if (goalX > originX || goalY > originY)
    // {
      // let stepCountX = 0
      // let stepCountY = 0

      // let i = 0
      // let j = 0

      // let lineStartX = 0
      // let lineStartY = 0

      if (goalY > originY)
      {
        rangeY = goalY - originY

        j = goalY

        lineStartY = j + (goalImgdimensionData.h / 2)

        for (j; j >= originY + (goalImgdimensionData.h / 2); j -= goalImgdimensionData.h)
        {
          // ctx.beginPath ()
          rangeCtxY = getCanvasN.getContext ("2d")
          let rangeImgData = rangeCtxY.getImageData (goalX, originY, 1, 1).data
          hex2 = "#" + ("000000" + rgbToHex (rangeImgData [0], rangeImgData [1], rangeImgData [2])).slice (-6)

          stepCountY++

          rangeCtxY.beginPath ()
          rangeCtxY.strokeStyle = "#d90000"
          rangeCtxY.lineWidth = 1
          rangeCtxY.moveTo (goalX + (goalImgdimensionData.w / 2), lineStartY)
          rangeCtxY.lineTo (goalX + (goalImgdimensionData.w / 2), j - (goalImgdimensionData.h / 2))
          rangeCtxY.stroke ()

          if (((goalX < originX && originY < goalY) || (goalX > originX && originY < goalY)) && (goalX !== originX && originY !== goalY))
          {
            let k = j
            for (k; k >= originY; k -= (goalImgdimensionData.h / 2))
            {
              rangeCtxX = getCanvasN.getContext ("2d")
              let rangeImgData = rangeCtxX.getImageData (goalX, originY, 1, 1).data
              hex2 = "#" + ("000000" + rgbToHex (rangeImgData [0], rangeImgData [1], rangeImgData [2])).slice (-6)

              rangeCtxX.beginPath ()
              rangeCtxX.strokeStyle = "#d90000"
              rangeCtxX.lineWidth = 1
              rangeCtxX.moveTo (lineStartX, k + (goalImgdimensionData.h / 2))
              rangeCtxX.lineTo (i + (goalImgdimensionData.w + (goalImgdimensionData.w / 2)), k + (goalImgdimensionData.h / 2))
              rangeCtxX.stroke ()
            }
          }

          // console.log ("this is step Y", stepCountY)

          if (hex2 === "#6d007e")
          {
            console.log ("boundary hit at step count, " + stepCountY + "!!")
            // break
          }
        }
      }
    // }

    range = [rangeX, rangeY]

    return true
  }

  return false
}

let findNeighbourhoodOfGRespectToOAndPaths = () =>
{
  // let isBoundarySelected = false

  // let boundaries = detectBoundaries ()
  // boundaries.filter (el => {
  //   if (hex === el)
  //     isBoundarySelected = true
  // })

  // if (isBoundarySelected)
  // {
  //   console.log ("boundary hit at step count, " + stepCountY + "!!")
  //   // break
  // }

  console.log ("finding neighbourhood")
}

let findBestPathFromOToG = () =>
{

}

let canvasIsClicked = (e) =>
{

  console.log ("canvas is clicked")
  let randKey = Math.random ()

  if (clicked > 1)
  {
    // return
    findRangeOfGRespectToO ()
  }

  if (randKey <= 0.49)
  {
    // randKey = 0
    setGoal (e)
  }
  else 
  {
    // randKey = 1
    setOrigin (e)
  }

  // if (clicked === 2)
  // {
    
  //   getCanvasN.addEventListener ("interactionComplete", findRangeOfGRespectToO)
  //   getCanvasN.dispatchEvent (clickedComplete)

  //   return
  // }
  // else
  // {
    

  //   return

  //     // if (clicked == 2)
  //     // {
  //     //   setOrigin2 (e)
  //     // }
  // }
}

let getCanvas = (getCanvas) =>
{
  return getCanvas
}

let iframe = document.querySelector ("iframe")

window.addEventListener ("load", () => {
//    hut = new Image (22, 12)
//    hut.src = "./../../../dimenszio/algoridum/hut.png"
//    hut.setAttribute ('crossOrigin', '')


    setUniverse ()
    

    // setUserInteraction (getCanvasN, pTag)

    // getCanvas (getCanvasN)

})