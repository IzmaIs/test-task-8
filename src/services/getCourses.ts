import axios, {AxiosResponse} from "axios";
import { CourseItem } from "../types/Courses";

export const getCourses = async (): Promise<AxiosResponse<CourseItem[]>> => await axios.get('https://logiclike.com/docs/courses.json')