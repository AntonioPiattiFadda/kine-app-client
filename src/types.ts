export interface ExerciseType {
  id: string;
  name: string;
  image: string;
  description: string;
  video_link: string;
  series: number;
  repetitions: number;

  index?: number;
}
export interface CreateUserType {
  email: string;
}

export interface ClientType {
  id: string;
  name: string;
  pathology: string;
}

export interface PlanType {
  id: string;
  name: string;
  day: string;
  image: string;
  duration: number;
  exercises: ExerciseType[];
}

export interface ProfessionalType {
  id: string;
  name: string;
  phone: string;
  email: string;
  image: string;
}
