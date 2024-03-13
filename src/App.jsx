import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Hero/Hero";
import RootPage from "./pages/RootPage";
import EventInfoPage from "./pages/eventDetail/EventDetail";
import Register from "./pages/payment/Register";
import PaymentForm from "./pages/payment/paymentForm/PaymentForm";
import Terms from "./components/terms/Terms";
import NotFound from "./components/errorElement/NotFound";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/events/:id',
          element: <EventInfoPage />
        },{
          path : '/events/register',
          element: <Register />
        },{
          path:'/events/register/:id',
          element : <PaymentForm />
        },{
          path: '/terms',
          element : <Terms />
        }
      ],
      errorElement: <NotFound />
    },
  ]);
  return (
    <>
      {/* <Home /> */}
      {/* <QueryForm /> */}
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
