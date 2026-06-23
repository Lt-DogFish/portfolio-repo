export interface Point {
	x: number;
	y: number;
  }
  
  export interface CurveData {
	startPoint: Point;
	endPoint: Point;
	controlPoint1: Point;
	controlPoint2: Point;
  }
  
  export interface SquiggleConfig {
	width: number;
	height: number;
  
	start: number;
	end: number;
  
	startDirection: string;
	endDirection: string;
  
	waviness: number;
	shouldLoop: boolean;
  }
  
  export function generateSquigglePath(
	config: SquiggleConfig
  ): string {
  
	const curve = generateBaseCurve(config);
  
	applyDirectionModifier(curve, config);
  
	if (config.shouldLoop) {
	  applyLoopModifier(curve, config);
	}
  
	return buildPathString(curve);
  }



  function generateBaseCurve(
	config: SquiggleConfig
  ): CurveData {
  
	const isUpward =
	  config.startDirection === "up";
  
	const startPoint = {
	  x: (config.start / 100) * config.width,
	  y: isUpward ? config.height : 0
	};
  
	const endPoint = {
	  x: (config.end / 100) * config.width,
	  y: isUpward ? 0 : config.height
	};
  
	return {
	  startPoint,
	  endPoint,
	  controlPoint1: { ...startPoint },
	  controlPoint2: { ...endPoint }
	};
  }

  function applyDirectionModifier(
	curve: CurveData,
	config: SquiggleConfig
  ) {
  
	const intensity =
	  (config.waviness / 100) * 1.5;
  
	if (config.startDirection === "down")
	  curve.controlPoint1.y +=
		config.height * intensity;
  
	if (config.startDirection === "up")
	  curve.controlPoint1.y -=
		config.height * intensity;
  
	if (config.startDirection === "right")
	  curve.controlPoint1.x +=
		config.width * intensity;
  
	if (config.startDirection === "left")
	  curve.controlPoint1.x -=
		config.width * intensity;
  
	if (config.endDirection === "down")
	  curve.controlPoint2.y -=
		config.height * intensity;
  
	if (config.endDirection === "up")
	  curve.controlPoint2.y +=
		config.height * intensity;
  
	if (config.endDirection === "right")
	  curve.controlPoint2.x -=
		config.width * intensity;
  
	if (config.endDirection === "left")
	  curve.controlPoint2.x +=
		config.width * intensity;
  }

  function applyLoopModifier(
	curve: CurveData,
	config: SquiggleConfig
  ) {
  
	const intensity =
	  (config.waviness / 100) * 1.5;
  
	const tempX = curve.controlPoint1.x;
  
	curve.controlPoint1.x =
	  curve.controlPoint2.x;
  
	curve.controlPoint2.x =
	  tempX;
  
	curve.controlPoint1.y +=
	  config.height * intensity * 0.3;
  
	curve.controlPoint2.y -=
	  config.height * intensity * 0.3;
  }

  function buildPathString(
	curve: CurveData
  ): string {
  
	return `
	  M ${curve.startPoint.x},${curve.startPoint.y}
	  C ${curve.controlPoint1.x},${curve.controlPoint1.y}
		${curve.controlPoint2.x},${curve.controlPoint2.y}
		${curve.endPoint.x},${curve.endPoint.y}
	`;
  }