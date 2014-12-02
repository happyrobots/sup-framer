thickness = 4
width = 50
height = 50

iconLayer = new Layer({
  x: 0,
  y: 0,
  width: width,
  height: height,
  backgroundColor: "transparent"
})
iconLayer.center();

layer1 = new Layer({
  x: iconLayer.x,
  y: iconLayer.y,
  width: width,
  height: thickness
})
layer1.superlayer = iconLayer

layer2 = new Layer({
  x: iconLayer.x,
  y: iconLayer.y+iconLayer.height/2,
  width: width,
  height: thickness
})
layer2.superlayer = iconLayer

layer3 = new Layer({
  x: iconLayer.x,
  y: iconLayer.y+iconLayer.height,
  width: width,
  height: thickness
})
layer3.superlayer = iconLayer


layer1.states.add({
	cross: {
    rotationZ: 45-360,
    y: iconLayer.y+height/2
  },
  leftArrow: {
    y: iconLayer.y+4*thickness,
    x: iconLayer.x-thickness,
    width: width/2,
    rotationZ: 360-45,
  }
})

layer2.states.add({
  cross: {
    opacity: 0,
    rotationZ: -180,
  },
  leftArrow: {
    opacity: 1,
    rotationZ: 180,
  }
})

layer3.states.add({
  cross: {
    rotationZ: 135+180,
    y: iconLayer.y+height/2
  },
  leftArrow: {
    y: iconLayer.y+height-4*thickness,
    x: iconLayer.x-thickness,
    width: width/2,
    rotationZ: 360+45,
  }
})

layer1.states.animationOptions =
layer2.states.animationOptions =
layer3.states.animationOptions = {
	curve: "spring(500,20,0)"
}

iconLayer.on(Events.Click, function() {
	layer1.states.next()
  layer2.states.next()
  layer3.states.next()
})
