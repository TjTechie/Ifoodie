import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
    const imgsrcTemp = "data:image/png;base64,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"
return (
    <a href="/"><img alt="iFoodie-logo" src={imgsrcTemp} className="logo"></img></a>
);
}

const Header = () => {
    return (
        <div className="header">
            <Title></Title>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const restrautList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "73011",
        name: "KFC",
        uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["American", "Snacks", "Biryani"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 6.199999809265137,
        slugs: {
          restaurant: "kfc-chukkuwala-chukkuwala",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
        locality: "Clock Tower",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "73011",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 6.199999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "542132",
        name: "Domnik Pizza",
        uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
        city: "22",
        area: "Majra    Bansal Home",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
          restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
        locality: "Patel Nagar",
        parentId: 22321,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "542132",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 0.6000000238418579,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "321517",
        name: "FOOD PLANET RESTAURANT",
        uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
        city: "22",
        area: "Majra",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "ykboewqeoxnne8fgrnui",
        cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
        locality: "Patel Nagar",
        parentId: 81850,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "321517",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "311806",
        name: "Burger King",
        uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 6.300000190734863,
        slugs: {
          restaurant: "burger-king-chakrata-road-ballupur",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
        locality: "CHAKRATA ROAD",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "311806",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 6.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "132460",
        name: "Annapurna Andhra Mess",
        uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
        city: "22",
        area: "Dehradun",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
        cuisines: ["South Indian", "Biryani", "North Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
        locality: "Patel Nagar",
        parentId: 33997,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "132460",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "496677",
        name: "Uncle Ji Restaurant",
        uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
        city: "22",
        area: "Patel Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
        cuisines: ["North Indian", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 0.800000011920929,
        slugs: {
          restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address: "348 santosh tower, majra road gram majra dehradun 248001",
        locality: "Patel Nagar",
        parentId: 298209,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "496677",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 0.800000011920929,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
  ];

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    // const {  } = restaurant;
    return(
        <div className="card">
            <img alt="restaurant-card" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="restaurant-list">
            {
                restrautList.map( (restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}></RestaurantCard>
                })
            }
            {/* <RestaurantCard restaurant={restrautList[0]}></RestaurantCard> */}
        </div>
    );
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
}

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>

        </>
        
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);