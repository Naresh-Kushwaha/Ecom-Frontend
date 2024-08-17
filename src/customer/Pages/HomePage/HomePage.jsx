import { lengha_choli } from "../../../Data/lenghacholi";
import { mens_kurta } from "../../../Data/mens-kurta";
import { mens_shirt } from "../../../Data/mens-shirt";
import { mens_jeans } from "../../../Data/mens_jeans";
import { women_dress } from "../../../Data/women_dress";
import { women_top } from "../../../Data/women_top";
import Footer from "../../components/Footer/footer";
import MainCarousel from "../../components/HomeCarousel/MainCarousel"
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage=()=>{
    return(
        <div>
            <div>
            <MainCarousel></MainCarousel>
            </div>
            
       
        <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
          
            <HomeSectionCarousel data={mens_jeans} sectionName={"Men's jeans"}></HomeSectionCarousel>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Men's shirt"}></HomeSectionCarousel>
            <HomeSectionCarousel data={women_top} sectionName={"Women's Top"}></HomeSectionCarousel>
            <HomeSectionCarousel data={women_dress} sectionName={"Women's Dress"}></HomeSectionCarousel>
            <HomeSectionCarousel data={lengha_choli}sectionName={"LenghaCholi"}></HomeSectionCarousel>

        </div>
        <Footer></Footer>
         </div>
    )
}
export default HomePage;