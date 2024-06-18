function getRelativeCoordinates(event: any, referenceElement: any) {
  const position = {
    xx: event.clientX,
    yy: event.clientY,
    x: event.pageX,
    y: event.pageY,
  };


  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.offsetWidth,
    height: referenceElement.offsetHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.xx,
    y: position.yy,
  };
}

export { getRelativeCoordinates };