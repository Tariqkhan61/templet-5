import BlueHeader from "./components/blue-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";

import Lastdiv from "./components/lastdiv";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";
import ProductList from "./Products/page";


export default function Home() {
  return (
    <div>
      <BlueHeader />
      <Navbar />
      <Carausel />
      <Editors />
      <ProductCard />
      <GreenDiv />
      <Whitediv />
      <Lastdiv />
<ProductList />
      <Footer />
    </div>
  );
}
