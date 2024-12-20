/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router"
import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import App from "../App/App"
import { lazy } from "react"

const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"))
const CasePage = lazy(() => import("../pages/CasePage/CasePage"))
const EvaluatePage = lazy(() => import("../pages/EvaluatePage/EvaluatePage"))
const ProblemPage = lazy(() => import("../pages/ProblemPage/ProblemPage"))
const SafeguardPage = lazy(() => import("../pages/SafeguardPage/SafeguardPage"))
const ServePage = lazy(() => import("../pages/ServePage/ServePage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/case",
        element: <CasePage />,
      },
      {
        path: "/evaluate",
        element: <EvaluatePage />,
      },
      {
        path: "/problem",
        element: <ProblemPage />,
      },
      {
        path: "/safeguard",
        element: <SafeguardPage />,
      },
      {
        path: "/serve",
        element: <ServePage />,
      },
    ],
  },
])
export default router
