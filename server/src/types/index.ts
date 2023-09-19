import type { IColor } from "react-color-palette";

export type RoomWithCanvas = RoomId & {
  canvasState: string;
}

export type RoomData = RoomId & {
  username: string;
}

export type RoomDraw = RoomId & {
  drawOptions: DrawLine;
}

export type RoomId = {
  roomId: string;
}

export type User = {
  id: string;
  username: string;
  roomId: string;
}

export type DrawLine = {
  prevPoint: Point | null
  currentPoint: Point
  color: IColor;
  width: number
}

export type Point = {
  x: number;
  y: number;
}