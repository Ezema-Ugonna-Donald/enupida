let matrix = [];

let imgColourMatrix = [];


let getCanvasN;
let btn;
let pTag;
//pTag.textContent = " "

//const body = document.querySelector ("#zvers").style.backgroundColor = "#230C1B"


let clicked = 0
let numOBoxes = 8
let numOBoxesPX = numOBoxes * numOBoxes * 10
let dimensionXY = (2 * numOBoxes) + numOBoxesPX
let discreteW = 1536
let discreteH = 754
let dimensionWFraction = ((dimensionXY) / discreteW)
let dimensionHFraction = ((dimensionXY) / discreteH)
let dimensionW = 0
let dimensionH = 0


let hut = new Image (22, 12)
hut.src = "./../../../dimenszio/algoridum/hut.png"
hut.setAttribute ('crossOrigin', '')

let cauldron = new Image (22, 12)
cauldron.src = "./../../../dimenszio/algoridum/african cauldron with jellof rice.png"
cauldron.setAttribute ("crossOrigin", "")
let cauldronX = 0
let cauldronY = 0

let goalImgdimensionData = {}
let goalImg = new Image (22, 12)
goalImg.src = "./../../../dimenszio/algoridum/deuz.png"
goalImg.setAttribute ('crossOrigin', '')
let goalX = 0
let goalY = 0
let gImgColourMatrix = []

let originImgdimensionData = {}
let originImg = new Image (22, 12)
originImg.src = "./../../../dimenszio/algoridum/plateORice.png"
originImg.setAttribute ('crossOrigin', '')
let originX = 0
let originY = 0
let oImgColourMatrix = []

let discourse = []

let range = []
let stepCountX = 0
let stepCountY = 0
let neighbourhood = []

let hex = ""

let clickedComplete = new Event ("interactionComplete")

//let zvers = document.querySelector ("#zvers")

let displayProcessSecurityUI = () =>
  {
//    processSecurityService.msgerToggle ()
//
//    if (processSecurityService.isDisplayed)
//    {
      console.log ("AzuGardian Biafrost ajar!")
//    }
  }

  let setUniverse = () =>
  {
    getCanvasN = document.querySelector ("canvas");
    btn = document.querySelector ("button");
    pTag = document.querySelector ("#tell-me");
    pTag.textContent = " "

    //const body = document.querySelector ("#zvers").style.backgroundColor = "#230C1B"


//    let clicked = 0
//    let numOBoxes = 8
//    let numOBoxesPX = numOBoxes * numOBoxes * 10
//    let dimensionXY = (2 * numOBoxes) + numOBoxesPX
//    let discreteW = 1536
//    let discreteH = 754
//    let dimensionWFraction = ((dimensionXY) / discreteW)
//    let dimensionHFraction = ((dimensionXY) / discreteH)
//    let dimensionW = 0
//    let dimensionH = 0
    btn.addEventListener ("click", () => {
      location.reload ()
    })

//    window.addEventListener ("load", () => {
//      pTag.textContent = "Please, interact with the dark space to set goal."
//    })

    getCanvasN.addEventListener ("pointerdown", (e) => {
      canvasIsClicked (e)
    })

    // let visualViewport = new VisualViewport()
    // visualViewport.onresize = reportWindowSize (window)

    dimensionW = dimensionWFraction * window.innerWidth
    dimensionH = dimensionHFraction * window.innerHeight

    dimensionW < dimensionH ? dimensionW = dimensionW : dimensionW = dimensionH

    // Canvas Dimensions and Position/Placement
//    getCanvasN.style.backgroundImage = "url ('./../../../dimenszio/algoridum/zitaverse.png')"
//    getCanvasN.style.width = dimensionW + "px"
//    getCanvasN.style.height = dimensionW + "px"
    // getCanvas.style.marginLeft = "29%"
    // getCanvas.style.marginRight = "10%"
    // getCanvas.style.marginTop = "3%"
    // getCanvas.style.marginBottom = "4%"
  }

  let reportWindowSize = (window) =>
  {
    dimensionW = dimensionWFraction * window.innerWidth
    dimensionH = dimensionHFraction * window.innerHeight
  }

  // Set of Domain of Discourse
  let setMatrix = (getCanvas, dimensionW) =>
  {
    ctx = getCanvas.getContext ("2d")
    // ctx = getCanvas.getContext ("webgl2")

    ctx.rotate (5.05)

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

    matrix.forEach (cell => {
      ctx.beginPath ()
      // ctx.lineWidth = "1";
      // ctx.strokeStyle="#000000"
      // ctx.fillStyle = "#00F000"
      ctx.fillStyle = "#900d0e"
      ctx.strokeStyle = "#e4e4e4"
      ctx.strokeStyle = "#ff9000"
      ctx.rect (cell.x, cell.y, 22, 12)
      ctx.fill ()
      ctx.stroke ()
      ctx.globalAlpha = 0.5

      let matrixCellText = "a" + cell.row + cell.col
      ctx.font = "normal 1000 7.457px Calibri"
      // ctx.fontWeight = "bold"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#000"
      // ctx.fillStyle = "#ff9000"

      ctx.fillText (matrixCellText, cell.x + 10, cell.y + 5)

      ctx.rotate (13.23)
    })
  }

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

    discourse.push (convertCanvasToImg (getCanvas))
    // convertCanvasToImg (getCanvas)

    let discoursePixels = convertCanvasToImg (getCanvas)

    let discoursePattern = ""

    discoursePixels.forEach (el => {
      discoursePattern = discoursePattern + " " + el
    })

    // console.log ("Discourse Pattern", discoursePattern)

    let discourseData = {
      x: "discourseSpaceX",
      y: "discourseSpaceY",
      width: dimensionW,
      height: dimensionH,
      cyber_physical_pattern: discoursePattern
    }

//    perceiveDiscourse (discourseData)
  }

//  perceiveDiscourse (data)
//  {
//    // event.preventDefault ()
//    maseService.setDiscourse (data).subscribe (
//      data => handleDiscourseResponse (data),
//      error => handleDiscourseError (error)
//    )
//  }

  let handleDiscourseResponse = (data) =>
  {
    console.log ("Success response:", data)
  }

  let handleDiscourseError = (error) =>
  {
    console.log ("Error response:", error)
  }

  let convertCanvasToImg = (getCanvas) =>
  {
    let ctx = getCanvas.getContext ("2d")
    let ctxData = ctx.getImageData (0, 0, dimensionW, dimensionW).data
    let discourseImgData = organizeColourMatrix (ctxData);
    console.log ("canvas width", dimensionW)

    return imgColourMatrix
  }

  let rgbToHex = (r, g, b) =>
  {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
  }

  let organizeColourMatrix = (imgData) =>
  {

    imgColourMatrix = []

    let colourMatrixColCount = 0
    let colourCount = 0
    let colourMatrix = []
    imgData.forEach (el => {

        colourMatrixColCount ++
        colourCount ++
        colourMatrix.push (el)

        if ( colourCount === 4 )
        {
            let colourMatrixHex = "#" + ("000000" + rgbToHex (colourMatrix [0], colourMatrix [1], colourMatrix [2])).slice (-6)

            imgColourMatrix.push (colourMatrixHex)

            colourMatrix = []
            colourCount = 0
        }

        if (colourMatrixColCount === imgData.length / 4)
        {
            return imgColourMatrix
        }
    })

    return ["#ff0000"]
  }

  let setUserInteraction = (getCanvas, pTag) =>
  {
    let userIntr = []
  }

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

  let setGoal = (e) =>
  {
    let userIntr = []

    // getCanvasN = document.querySelector ("canvas")
    let pTag = document.querySelector ("p")

    let gImgData = []
    let gImgHex = ""

    let gImgColourMatrix = []
    let gImgDataLength = 0

    // if ( clicked < 1 )
    // {
        let cnvas =  getCanvasN.getBoundingClientRect ()
        ctx.beginPath ()
        ctx.lineWidth = "1";
        ctx.strokeStyle="#ffffff"
        ctx.fillStyle="#0000FF"

        goalX = (e.clientX - cnvas.left) / (cnvas.right - cnvas.left) * getCanvasN.width,
            goalY = (e.clientY - cnvas.top) / (cnvas.bottom - cnvas.top) * getCanvasN.height

        contxt = getCanvasN.getContext ("2d")
        let imgData = contxt.getImageData (goalX, goalY, 1, 1).data
        hex = "#" + ("000000" + rgbToHex (imgData [0], imgData [1], imgData [2])).slice (-6)

        // console.log (detectBoundaries ())

        let isBoundarySelected = false

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

        userIntr.push (goalObj)

        ctx.drawImage(goalImg, goalX, goalY, 20, 10);
        // ctx.drawImage(hut, goalX, goalY, 20, 10);
        goalImgdimensionData = {
            x: goalX,
            y: goalY,
            w: 20,
            h: 10
        }

        gImgData = ctx.getImageData (goalX, goalY, 20, 10).data
        organizeColourMatrix (gImgData)
        gImgColourMatrix.push (imgColourMatrix)
        console.log (gImgColourMatrix [0])
        document.getElementById ("tell-me").textContent = gImgColourMatrix [0]
        gImgHex = "#" + ("000000" + rgbToHex (gImgData [0], gImgData [1], gImgData [2])).slice (-6)

        var goalText = "Goal"

        ctx.font = "10px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = "#ffffff"

        ctx.fillText (goalText, goalX + 10, goalY + 16)
    // }

    clicked++

    if ( clicked === 1 )
        pTag.textContent = ""
        // pTag.textContent = "Please, click the dark space to set origin."
        pTag.textContent = imgColourMatrix

    // console.log (discourse [0])
    discourse.push (convertCanvasToImg (getCanvasN))
    // findObjectInDiscourse ()
  }

  let setOrigin = (e) =>
  {
    let userIntr = []

    // let getCanvas = getCanvas

    // let getCanvas = document.querySelector ("canvas")

    // imgColourMatrix = []

    // if ( clicked == 1 )
    // {
        let cnvas =  getCanvasN.getBoundingClientRect ()
        ctx.beginPath ()
        ctx.lineWidth = "1";
        ctx.strokeStyle="#ffffff"
        ctx.fillStyle="#00FF00"

        originX = (e.clientX - cnvas.left) / (cnvas.right - cnvas.left) * getCanvasN.width,
        originY = (e.clientY - cnvas.top) / (cnvas.bottom - cnvas.top) * getCanvasN.height

        let isGoalImgClicked = false

        contxt = getCanvasN.getContext ("2d")
        let imgData = contxt.getImageData (originX, originY, 1, 1).data
        hex = "#" + ("000000" + rgbToHex (imgData [0], imgData [1], imgData [2])).slice (-6)

        // console.log ("this is the img colour matrix")
        // console.log (imgColourMatrix)

        imgColourMatrix.filter (el => {
          if (el === hex && ((originX >= goalImgdimensionData.x && originX <= goalImgdimensionData.x + goalImgdimensionData.w) && (originY >= goalImgdimensionData.y && originY <= goalImgdimensionData.y + goalImgdimensionData.h)))
            isGoalImgClicked = true
        })

        let isBoundarySelected = false

        let boundaries = detectBoundaries ()
        boundaries.filter (el => {
          if (hex === el)
            isBoundarySelected = true
        })

        if (isGoalImgClicked)
        {
          pTag.textContent = ""
          pTag.textContent = "Goal is set already!!."

          isGoalImgClicked = false
          clicked = 1

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

        let oImgData = ctx.getImageData (originX, originY, 20, 10).data
        organizeColourMatrix (oImgData)
        oImgColourMatrix.push (imgColourMatrix)
        console.log (oImgColourMatrix [0])
        // console.log ("mousedown X: " + originX)
        // console.log ("mousedown y: " + originY)
        // console.log ("mousedown page X: " + e.pageX)
        // console.log ("mousedown page y: " + e.pageY)
    // }

    clicked++

    if ( clicked == 1 )
      pTag.textContent = ""
      // pTag.textContent = "Tracking..."
      pTag.textContent = imgColourMatrix

    discourse.push (convertCanvasToImg (getCanvasN))
    // findObjectInDiscourse ()

    // let isRangeFound = findRangeOfGRespectToO ()

    // if (isRangeFound)
    //   findNeighbourhoodOfGRespectToOAndPaths ()
    // else
    // {
    //   pTag.textContent = ""
    //   pTag.textContent = "Sorry, range could not be found, you sure your goal and origin exist?"
    // }
  }

  let setOrigin2 = (e) =>
  {
    let userIntr = []

    // let getCanvas = getCanvas

    // let getCanvas = document.querySelector ("canvas")
    let pTag = document.querySelector ("p")

    imgColourMatrix = []

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

        let isPickedColourImgColour = imgColourMatrix.filter (el => {

            return el === hex && el === "#000000"
        })

        let isBoundarySelected = false

        let boundaries = detectBoundaries ()
        boundaries.forEach (el => {
          if (hex === el)
            isBoundarySelected = true
        })

        if ((isGoalImgClicked && isPickedColourImgColour) || isBoundarySelected)
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

    discourse.push (convertCanvasToImg (getCanvasN))
  }

  let findObjectInDiscourse = () =>
  {
    let cellData00 = []
    let cellData00Y = -1
    let cellData00YArr = []
    let cellData01 = []
    let cellData01Y = -1
    let cellData01YArr = []

    // let goalImgColourData = [#000000,#000000,#000000,#000000,#000000,#000000,#000103,#081128,#0e255b,#0f2760,#0e275f,#0e275f,#0f2760,#0f2760,#0f265f,#09183a,#000104,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#040a19,#0d2355,#0f2860,#0f2861,#0f2861,#0f2861,#0f2861,#0f2861,#0f2861,#0f2861,#0d2558,#071732,#051023,#040b17,#000001,#000000,#000000,#000000,#000104,#0c2047,#0e2552,#0c1f49,#13234b,#0f2958,#102a59,#0f2a58,#102a5a,#10295c,#10295d,#10285a,#08132f,#020513,#020511,#040b1a,#040c1b,#000103,#03050b,#050e20,#030a16,#070b13,#0e0e0e,#4c1e1e,#832c2a,#662522,#7f3e3d,#7a4f4b,#7d5547,#5f4a49,#2b2d3d,#0d1a35,#0d1b35,#151c2e,#101019,#03060d,#02050e,#02050f,#050b18,#040913,#000103,#5a4d47,#c19580,#99654d,#a66e53,#966955,#ad7963,#a97957,#9c8778,#ccc6c2,#9a867e,#926851,#b27f67,#66483f,#221e25,#0a0d15,#02070d,#000102,#000000,#000000,#000000,#111111,#e3d7d0,#e6d9cf,#ddcfbd,#ead4c5,#d1af99,#be8e79,#a46957,#d8b7ab,#d3b1a1,#c7a38e,#8d7469,#282329,#211e25,#16161b,#000000,#000000,#000000,#000000,#000000,#030303,#bfbab1,#eae2d6,#e6dbd3,#e2d5d0,#a99191,#826a6a,#977e77,#d9b8ab,#dab9ad,#ccaca2,#c4a292,#77635a,#241f26,#19171c,#010001,#000000,#000000,#000000,#000000,#000000,#41403d,#dbd7ce,#e9e5e0,#e7e4e6,#e7e2e5,#e7e2e3,#decccb,#cfa8a3,#d0a9a4,#cba69f,#b49584,#4d4140,#211e25,#141216,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#212120,#dcd7cc,#e9e2de,#e8e1e4,#e7e2e3,#dac6c4,#cfa8a2,#cca69b,#b49482,#2d272d,#211e26,#110f12,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0e0e0e,#e7e2d8,#e8e1e2,#e7e1e3,#e7e1e3,#e7e1e2,#69646a,#1a181e,#060607,#000000,#000000,#000000,"#000000", "#000000"]

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

    let isBoundarySelected = false

    let boundaries = detectBoundaries ()
    boundaries.filter (el => {
      if (hex2 === el)
        isBoundarySelected = true
    })
    
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
      return
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

    if (clicked === 2)
    {
     
      getCanvasN.addEventListener ("interactionComplete", findRangeOfGRespectToO)
      getCanvasN.dispatchEvent (clickedComplete)

      return
    }
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
      pTag.textContent = "Please, interact with the dark space to set goal."
      getCanvasN.style.width = dimensionW + "px"
      getCanvasN.style.height = dimensionW + "px"

      setMatrix (getCanvasN, dimensionW)

      setBoundaries (getCanvasN)

      // setUserInteraction (getCanvasN, pTag)

      getCanvas (getCanvasN)
      getCanvasN.style.backgroundImage = "url ('dimenszio/algoridum/zitaverse.png'')"

  })