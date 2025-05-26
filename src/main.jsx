import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import { HomePage } from './Pages/HomePage.jsx'
import Protected from './Component/AuthLayout.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import { LoginPage } from './Pages/LoginPage.jsx'
import { AllPostPages } from './Pages/AllPostPages.jsx'
import { AddPostPage } from './Pages/AddPostPage.jsx'
import { EditPostPage } from './Pages/EditPostPage.jsx'
import Post from './Pages/PostPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: (
                <Protected authentication={false}>
                    <LoginPage />
                </Protected>
            ),
        },
        {
            path: "/signup",
            element: (
                <Protected authentication={false}>
                    <SignupPage />
                </Protected>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Protected authentication>
                    {" "}
                    <AllPostPages />
                </Protected>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protected authentication>
                    {" "}
                    <AddPostPage />
                </Protected>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protected authentication>
                    {" "}
                    <EditPostPage />
                </Protected>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
  </StrictMode>
)
