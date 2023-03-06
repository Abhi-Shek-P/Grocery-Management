import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import SignInScreen from "./Screens/User/SignInScreen";
import Navigation from "./Components/Navigation";
import AdminHomeScreen from "./Screens/Admin/AdminHomeScreen";
import EmployeeHomeScreen from "./Screens/Employee/EmployeeHomeScreen";
import DeliveryHomeScreen from "./Screens/Delivery/DeliveryHomeScreen";
import CustomerHomeScreen from "./Screens/Customer/CustomerHomeScreen";
import SignUpScreen from "./Screens/User/SignUpScreen";
import EditProfileScreen from "./Screens/User/EditProfileScreen";
import AdminViewEmployeeScreen from "./Screens/Admin/AdminViewEmployeeScreen";
import AdminDeleteEmployeeScreen from "./Screens/Admin/AdminDeleteEmployeeScreen";
import AddCategoryScreen from "./Screens/Common/AddCategoryScreen";
import ViewAllCategoriesScreen from "./Screens/Common/ViewAllCategoriesScreen";
import AddProductScreen from "./Screens/Common/AddProductScreen";
import ViewProductsScreen from "./Screens/Common/ViewProductsScreen";
import EditProductScreen from "./Screens/Common/EditProductScreen";
import AdminStockReportScreen from "./Screens/Admin/AdminStockReportScreen";
import CustomerProductsScreen from "./Screens/Customer/CustomerProductScreen";
import CartView from "./Components/CartView";
import {ToastContainer} from "react-toastify"
import CustomerAddressScreen from "./Screens/Customer/CustomerAddressScreen";
import CustomerAddAddressScreen from "./Screens/Customer/CustomerAddAddressScreen";
import CustomerEditAddressScreen from "./Screens/Customer/CustomerEditScreen";
import CustomerOrderReviewScreen from "./Screens/Customer/CustomerOrderReviewScreen";
import CustomerOrdersScreen from "./Screens/Customer/CustomerOrdersScreen";
import ViewAllOrdersScreen from "./Screens/Common/ViewAllOrdersScreen";
import ViewAssignedOrdersScreen from "./Screens/Common/ViewAssignedOrdersScreen";
import DeliveryPickedOrderScreen from "./Screens/Delivery/DeliveryPickedOrderScreen";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <div className="container">
          <Navigation />
          <CartView/>
          <ToastContainer/>
          <Routes>
            <Route path="/" exact element={<SignInScreen/>} />
            
            <Route path="/signin" element={<SignInScreen/>} />
            <Route path="/signup" element={<SignUpScreen/>} />

            <Route path="/edit-profile" element={<EditProfileScreen/>} />
            
            <Route path="/admin-home" element={<AdminHomeScreen/>} />
            <Route path="/add-employee" element={<SignUpScreen/>} />
            <Route path="/employees" element={<AdminViewEmployeeScreen/>}/>           
            <Route path="/delete-employee" element={<AdminDeleteEmployeeScreen/>}/>  
            <Route path="/stock" element={<AdminStockReportScreen/>}/>  
            
            <Route path="/add-category" element={<AddCategoryScreen/>}/>  
            <Route path="/categories" element={<ViewAllCategoriesScreen/>}/>  
            <Route path="/add-product" element={<AddProductScreen/>}/>
            <Route path="/products" element={<ViewProductsScreen/>}/>
            <Route path="/edit-product" element={<EditProductScreen/>}/>  

            <Route path="/employee-home" element={<EmployeeHomeScreen/>}/>
            <Route path="/orders" element={<ViewAllOrdersScreen/>}/>
            <Route path="/assigned-orders" element={<ViewAssignedOrdersScreen/>}/>

            <Route path="/customer-home" element={<CustomerHomeScreen/>}/>
            <Route path="/customer-products" element={<CustomerProductsScreen/>}/>
            <Route path="/addresses" element={<CustomerAddressScreen/>}/>
            <Route path="/add-address" element={<CustomerAddAddressScreen/>}/>
            <Route path="/edit-address" element={<CustomerEditAddressScreen/>}/>
            <Route path="/order-review" element={<CustomerOrderReviewScreen/>}/>
            <Route path="/my-orders" element={<CustomerOrdersScreen/>}/>
            
            <Route path="/delivery-home" element={<DeliveryHomeScreen/>} />
            <Route path="/picked-orders" element={<DeliveryPickedOrderScreen/>} />
          </Routes>
          <Footer />
        </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
