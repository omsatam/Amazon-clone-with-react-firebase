import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M16/1500x600_Hero-Tall_JPN._CB669022949_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          key={11}
          id={11}
          category_title="For all your photography needs"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Shutterbug/Fest/August/GW/379x304_Shutterbug_fest_Home_studio_photography._SY304_CB407732303_.jpg"
          rating={0}
        />
        <Product
          key={12}
          id={12}
          category_title="Chocolates, sweets & more"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
          rating={0}
        />
        <Product
          key={13}
          id={13}
          category_title="Up to 25% off | Premium stationery from Navneet"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/GW/Dashboard/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB659204758_.jpg"
          rating={0}
        />
        {/* product */}
      </div>
      <div className="home__row">
        <Product
          key={21}
          id={21}
          title="Lenovo Ideapad S145 AMD Ryzen 3 3200U 15.6 inch(4GB/1TB HDD/Windows 10/Platinum Grey/1.85Kg)"
          rating={3}
          price="27,990.00"
          image="https://images-na.ssl-images-amazon.com/images/I/61PXjYVtmqL._SX679_.jpg"
        />
        <Product
          key={22}
          id={22}
          title="Maharaja Whiteline Joy Elite Mixer Grinder, 750W, 4 Jars"
          rating={4}
          price="3,398.00"
          image="https://images-eu.ssl-images-amazon.com/images/I/41-ZfYOYoYL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          key={23}
          id={23}
          title="Sukkhi Ethnic Gold Plated Set of 3 Necklace Combo for Women"
          rating={3}
          price="489.00"
          image="https://m.media-amazon.com/images/I/515GLy2WlJL.jpg"
        />
        <Product
          key={24}
          id={24}
          title="Wildcraft Agena Black Travel Case (12430)-Large (WXDXH : 52 x 32.5 x 75.5cm)"
          rating={4}
          price="11,998.00"
          image="https://images-na.ssl-images-amazon.com/images/I/51962T-BpSL._SL1094_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key={31}
          id={31}
          title="Prestige Royale Plus GT03L 3 Burner Schott Glasstop Gas Stove, Black"
          rating={4}
          price="6,285.00"
          image="https://images-na.ssl-images-amazon.com/images/I/51RhWrwmTNL._SL1000_.jpg"
        />
        <Product
          key={32}
          id={32}
          title="Amazon Brand - Solimo Checkered Jar Set of 18"
          rating={4}
          price="367.00"
          image="https://m.media-amazon.com/images/I/91IpehOCi2L._AC_UL320_.jpg"
        />
        <Product
          key={33}
          id={33}
          title="Casio Edifice Chronograph Blue Dial Men's Watch EQS-920BL-2AVUDF(EX486)"
          rating={4}
          price="11,495.00"
          image="https://images-na.ssl-images-amazon.com/images/I/81gy672BF0L._UL1500_.jpg"
        />
        <Product
          key={34}
          id={34}
          title="Tento kitchen 4 Piece Gift Set"
          rating={3}
          price="1,099.0"
          image="https://m.media-amazon.com/images/I/51KxD0KdobL._AC_UL320_.jpg"
        />
        <Product
          key={35}
          id={35}
          title="Piegeon- Stainless Steel 6-plates Idly Maker"
          rating={4}
          price="1,225.00"
          image="https://m.media-amazon.com/images/I/51omenXGsQL._AC_UL320_.jpg"
        />
        {/* product */}
      </div>
    </div>
  );
}

export default Home;
