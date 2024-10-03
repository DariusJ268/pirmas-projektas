import classNames from "classnames";
import { businesses } from "@/consts/business";
import BusinessCard from "./BusinessCard";
import styles from "./BusinessList.module.scss";
import useLocalStorage from "@/hooks/useLocalStorage";

const BusinessList = ({ category, className }) => {

  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const toggleFavorite = (businessName) => {
      if (favorites.includes(businessName)) {
          setFavorites(favorites.filter((fav) => fav !== businessName));
      } else {
          setFavorites([...favorites, businessName]);
      }
  }

  const filteredBusiness = category
    ? businesses.filter((business) => business.category === category)
    : businesses;
  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusiness.map((business) => (
        <BusinessCard key={business._id} business={business} isFavorite={favorites.includes(business.name)} toggleFavorite={() => toggleFavorite(business.name)} />
      ))}
    </div>
  );
};

export default BusinessList;