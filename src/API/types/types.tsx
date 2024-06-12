export type Room = {
  id: number;
  name: string;
  roomCapacity: number;
};

export type Spectator = {
  id: number;
  lastName: string;
  firstName: string;
  role: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice: string;
};

export type Animator = {
  id: number;
  lastName: string;
  firstName: string;
  role: string;
};

export type Activity = {
  id: number;
  animators: Animator[];
  spectators: Spectator[];
  name: string;
};

export type Event = {
  id: number;
  begin_time: string;
  end_time: string;
  name: string;
  room: Room;
  activity: Activity;
  duration: number;
};
