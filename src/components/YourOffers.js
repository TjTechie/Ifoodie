import { useState } from "react";

const SelectedOffer = ({ offerType, desc, isVisible, setIsVisible}) => {
    console.log( "offerType == "+ offerType)
    console.log(" IsVisible "+isVisible)
    return (
        <div className="border border-black m-2 p-2">
            <h1 className="font-bold">These are the {offerType} offers</h1>
            {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline">
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline">
          Show
        </button>
      )}

      {isVisible && <p>{desc}</p>}
        </div>
    );
}

const YourOffers = () => {
    const [visibleSection, setIsVisibleSection] = useState("special");

    return (
        <div>
            <h1 className="font-bold text-lg p-2 m-2">Offers you can avail</h1>
            <SelectedOffer offerType={"special"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "special"}
        setIsVisible={() => setIsVisibleSection("special")}
      />

       <SelectedOffer offerType={"referal"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "referal"}
        setIsVisible={() => setIsVisibleSection("referal")}
      />

<SelectedOffer offerType={"diwali"}
        desc={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "diwali"}
        setIsVisible={() => setIsVisibleSection("diwali")}
      />
       </div>
    )
}

export default YourOffers;