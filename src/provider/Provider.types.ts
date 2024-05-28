import {ReactNode} from "react";
import {CourseItem} from "../types/Courses";

export type ContextProps = {
  getFilteredCourses: () => CourseItem[]
  menuItems: string[]
  getSelectedItem: (name: string) => void
  selectedItem: string
}

export type PageProviderProps = {
  children: ReactNode
}