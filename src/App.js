import { Provider } from "react-redux"
import Cart from "./cart";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
            <div className="bg-gray-50 h-full md:h-screen">
                <div className="grid place-items-center">
                    <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                        Shopping Cart
                    </h1>
                </div>
                <Cart />
            </div>
    </Provider>
  );
}

export default App;
