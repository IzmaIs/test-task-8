import {useCallback, useEffect, useMemo, useState} from 'react';

import {Context} from './Provider.context';
import {PageProviderProps} from './Provider.types';
import {CourseItem} from "../types/Courses";
import {getCourses} from "../services";


export const Provider = ({ children }: PageProviderProps) => {

  const [courses, setCourses] = useState<CourseItem[]>([]);

  const [menuItems, setMenuItems] = useState<string[]>([]);

  const [selectedItem,setSelectedItem] = useState<string>('Все темы');

  useEffect(() => {
    getCourses().then(({data}) => {
      setCourses(data)
      setMenuItems(Array.from(new Set(['Все темы', ...data.flatMap(i => i.tags)])))
    })
  }, [])

  const getFilteredCourses = useCallback (() => {
    if (selectedItem === 'Все темы') {
      return courses
    }
    return courses.filter(course => course.tags.includes(selectedItem))
  }, [courses, selectedItem])

  const getSelectedItem = useCallback((name: string) => {
    setSelectedItem(name)
  }, [])

  console.log(menuItems)

  const value = useMemo(() => ({
    getFilteredCourses, menuItems, getSelectedItem, selectedItem
  }), [getFilteredCourses, getSelectedItem, menuItems, selectedItem])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
