import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AboutPage, AppLayout, ContactPage, ErrorPage, Homepage, ProjectsPage} from "./pages"

const profileRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={profileRouter} />
  )
}

export default App