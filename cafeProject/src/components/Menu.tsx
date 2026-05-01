import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import imgFlatWhite from '../images/FlatWhite.jpg';
import imgCappuccino from '../images/Cappuccino.jpg';
import imgAffogato from '../images/Affogato.jpg';
import imgAmericano from '../images/Americano.jpg';
import imgBombon from '../images/Bombon.jpg';
import imgCappuccinojaggery from '../images/Cappuccinojaggery.jpg';
import imgCortado from '../images/Cortado.jpg';
import imgEspresso from '../images/Espresso.jpg';
import imgLatte from '../images/Latte.jpg';
import imgMochalatte from '../images/Mochalatte.jpg';
import imgIcedCappuccino from '../images/Icecappuccino.jpg';
import imgIcedamericano from '../images/Icedamericano.jpg';
import imgIcedespresso from '../images/Icedespresso.jpg';
import imgIcedMatchaLatte from '../images/Iced Matcha Latte.jpg';
import imgClassicColdCoffee from '../images/Classic Cold Coffee.jpg';
import imgColdBrew from '../images/Cold Brew.jpg';
import imgColdBrewLemonade from '../images/Cold Brew Lemonade.jpg';
import imgColdBrewTonic from '../images/Cold Brew Tonic.jpg';
import imgCranberryespresso from '../images/Cranberryespresso.jpg';
import imgEspressotonic from '../images/Espressotonic.jpg';
import imgMazagranTonic from '../images/Mazagran Tonic.jpg';
import imgMazagran from '../images/Mazagran.jpg';
import imgOrangeTonic from '../images/Orange Tonic Espresso.jpg';
import imgClassicFrappe from '../images/Classic Frappe.jpeg';
import imgBiscoffFrappe from '../images/Biscoff Frappe.jpg';
import imgCaramelFrappe from '../images/Caramel Frappe.jpg';
import imgHazelnutFrappe from '../images/Hazelnut Frappe.jpg';
import imgNutellaFrappe from '../images/Nutella Frappe.jpg';
import imgVanillaFrappe from '../images/Vanilla Frappe.jpg';
import imgVietnames from '../images/Vietnames.jpg';
import imgCoconutVietnames from '../images/Coconut Vietnames.jpg';
import imgMatchalatte from '../images/Matchalatte.jpg';
import imgFrozenPomegranate from '../../images/menu/Frozen-Pomegranate-Margarita-Mocktail.jpeg';
import imgJamaicanMeKrazy from '../../images/menu/Jamaican-Me-Krazy-Mocktail.webp';
import imgMojitoMocktail from '../../images/menu/Mojito-Mocktail.jpeg';
import imgPinaColada from '../../images/menu/Pina_Colada_Mocktail.webp';
import imgShirleyGinger from '../../images/menu/Shirley-Ginger.jpg';
import imgBlueberryMojito from '../../images/menu/blueberry-mojito-mocktail.jpg';
import imgButterflyPea from '../../images/menu/butterfly-pea-flower-tea-mocktail.jpg';
import imgCinderella from '../../images/menu/cinderella_mocktail_for_kids_qtrqz.webp';
import imgSpicyMango from '../../images/menu/spicy_mango_cooler.jpg';
import imgWatermelonMocktail from '../../images/menu/watermelon-mocktail.webp';
import imgLemonIcedTea from '../../images/menu/lemon-iced-tea.jpg';
import imgLongIslandIcedTea from '../../images/menu/long-island-iced-tea.jpg';
import imgRoseIcedTea from '../../images/menu/rose-iced-tea-10.jpg';
import imgIcedLemonTeaIsolated from '../../images/menu/iced-lemon-tea-isolated.avif';
import imgIcedTeaRecipe from '../../images/menu/iced-tea-recipe.jpg';
import imgIceTeaLifestyle from '../../images/menu/icetea_lifestyle.jpg';
import imgWhatIsIcedTea from '../../images/menu/what-is-iced-tea.webp';
import imgClassicHotChocolate from '../../images/menu/hotchoklet.jpg';
import imgEuropeanHotChocolate from '../../images/menu/European-French-Hot-Chocolate-008.jpg';
import imgPolarExpressHotChocolate from '../../images/menu/Polar-Express-Hot-Chocolate-1-scaled.jpg';
import imgChristmasHotChocolate from '../../images/menu/christmas-hot-chocolate-image-1200l.jpg';
import imgIndulgentHotChocolate from '../../images/menu/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg';
import imgDecadentHotChocolate from '../../images/menu/decadently-thick-hot-chocolate-square-31.jpg';
import imgVeganHotChocolate from '../../images/menu/vegan-hot-chocolate-sq.jpg';
import imgChocolateMilkshake1 from '../../images/menu/CHOCOLATE-MILK-SHAKE-5520.jpg';
import imgChocolateMilkshake2 from '../../images/menu/Chocolate-Milkshake-1.jpeg';
import imgVanillaMilkshake from '../../images/menu/Vanilla-Milkshake-6-of-7.jpg';
import imgStrawberryMilkshake from '../../images/menu/strawberry-milkshake-4.jpg';
import imgClassicMilkshake from '../../images/menu/milkshek.png';
import imgMilkshakeIsolated from '../../images/menu/s11728_milk_shake_isolated.png';
import imgVanillaMaltedShake from '../../images/menu/vanilla-malted-milk-shake-recipe.jpg';
import imgBroccoliCheddarSoup from '../../images/menu/Broccoli-Cheddar-Soup-Recipe.jpg';
import imgChickenNoodleSoup from '../../images/menu/Chicken-Noodle-Soup-blog-1.jpg';
import imgEggDropSoup from '../../images/menu/Egg-Drop-Soup-in-Bowl.jpg';
import imgHotAndSourSoup from '../../images/menu/Hot-and-Sour-Soup-Vegetarian.webp';
import imgItalianWhiteBeanSoup from '../../images/menu/Italian-white-bean-soup-1.webp';
import imgThaiChickenSoup from '../../images/menu/Thai-Chicken-Soup-1-1024x1536.jpg';
import imgCreamyPotatoSoup from '../../images/menu/onderhoudender_Creamy_Potato_Soup_with_Bacon.webp';
import imgClassicFries from '../../images/menu/fries.png';
import imgPeriPeriFries from '../../images/menu/peri-fries.jpg';
import imgRosemaryFries from '../../images/menu/Fries-with-rosemary-salt_1.webp';
import imgHomemadeFries from '../../images/menu/Home-Made-French-Fries-Recipe.webp';
import imgSweetPotatoFries from '../../images/menu/crispy-oven-baked-sweet-potato-fries.jpg';
import imgSaucyFries from '../../images/menu/french-fries-with-sauce.jpg';
import imgCrispyFries from '../../images/menu/fries-1.jpg';
import imgPasta1 from '../../images/menu/pexels-luisa-bastidas-pastra.jpg';
import imgPasta2 from '../../images/menu/image55.jpeg';
import imgGarlicParmesanPasta from '../../images/menu/garlic-parmesan-pasta-3.jpg';
import imgEnginAkyurtPasta from '../../images/menu/pexels-enginakyurt-pasta.jpg';
import imgProductShotPasta from '../../images/menu/photorealistic-product-shot-pasta.jpg';
import imgPastaClassic from '../../images/menu/pasta.jpg';
import imgCreamCheesePasta from '../../images/menu/cream-cheese-pasta-hero-2-sq.jpg';
import imgRedSaucePastaNew from '../../images/menu/Red-Sauce-Pasta.webp';
import imgPastaPexels from '../../images/menu/pexels-photo-pasta.webp';
import imgAppetizer1 from '../../images/menu/Appetizers.jpg';
import imgAppetizer2 from '../../images/menu/Appetizers-1.jpg';
import imgCucumberShrimp from '../../images/menu/Cucumber-Shrimp-Appetizers-Square-1200-1.jpg';
import imgGarlicShrimpAppetizer from '../../images/menu/Garlic-shrimp-and-butternut-Appetizers.jpg';
import imgPartyAppetizer from '../../images/menu/Party-Food-Appetizers-34.jpg';
import imgShrimpShooters from '../../images/menu/Shrimp-shooters-Appetizers.webp';
import imgSpringHerbAppetizer from '../../images/menu/spring-herb-cream-cheese-appetizer.jpg';
import imgBestPartyAppetizer from '../../images/menu/best-party-appetizers.webp';
import imgPizza1 from '../../images/menu/pizza.jpg';
import imgPizza2 from '../../images/menu/371886-food-pizza.jpg';
import imgMargheritaPizza from '../../images/menu/Margherita-Pizza-093.webp';
import imgEasyCheesePizza from '../../images/menu/Easy-Cheese-Pizza_Square-1.jpg';
import imgPepperoniPizza from '../../images/menu/the-pepperoni-pizza-and-a-piece-of-streched-cheese-pizza-with-ai-generated-free-photo.jpg';
import imgPizzaRecipe from '../../images/menu/pizza-recipe.webp';
import imgPizzaNew from '../../images/menu/pizza-2.webp';
import imgPizza1New from '../../images/menu/pizza-1.jpg';
import imgPizza2619967 from '../../images/menu/pizza-2619967.jpg';
import imgFreshChickenSizzler from '../../images/menu/sizzler-fresh-chicken-.webp';
import imgGrilledChickenSizzler from '../../images/menu/grilled-chicken-sizzler.jpg';
import imgPaneerSizzler from '../../images/menu/paneer-sizzler-is-an-indian-version-with-cottage-cheese-salad-served-sizzling-on-hot-stone-dish-free-photo.jpg';
import imgSizzler1 from '../../images/menu/sizzler-1.jpg';
import imgSizzlerAvif from '../../images/menu/sizzler.avif';
import imgPaneerSizzlerAvif from '../../images/menu/paneer-sizzler-is-indian-version-with-cottage-cheese-salad-served-sizzling-hot-stone-dish_1093310-3551.avif';
import imgPaneerSizzlerNew from '../../images/menu/paneer-sizzler-is-indian-version-with-cottage-cheese-salad-served-sizzling-hot-stone-dish_1184104-938.avif';
import imgCake1 from '../../images/menu/cake.jpg';
import imgCake2 from '../../images/menu/cake_1.avif';
import imgChocolateMousseCake from '../../images/menu/zChocolate-Check-Mousse-cake-3lb1.9.webp';
import imgMarbleCake from '../../images/menu/pngtree-marble-cake-red-food-nobody-png-image_12062718.png';
import imgTastyCake from '../../images/menu/tasty-cake_157744-5358.avif';
import imgCake2New from '../../images/menu/cake-2.jpg';
import imgCake3New from '../../images/menu/cake-3.jpg';
import imgRedVelvetCake from '../../images/menu/Red-Velvet-Cake-with-Cream-Cheese-Frosting-4.png';
import imgStrawberryCheesecake from '../../images/menu/ai-generated-homemade-strawberry-cheesecake-a-sweet-indulgence-on-a-plate-generated-by-ai-free-photo.jpg';
import imgBakedCake from '../../images/menu/bake-baked-blur-cake.jpg';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface MenuProps {
  limit?: number;
  hideCategories?: boolean;
}

const menuData: MenuItem[] = [
  // HOT SUPREME
  { id: 1, name: 'Flat White', price: '₹180', image: imgFlatWhite, category: 'hotsupreme' },
  { id: 2, name: 'Cappuccino', price: '₹190', image: imgCappuccino, category: 'hotsupreme' },
  { id: 3, name: 'Affogato', price: '₹200', image: imgAffogato, category: 'hotsupreme' },
  { id: 4, name: 'Americano', price: '₹170', image: imgAmericano, category: 'hotsupreme' },
  { id: 5, name: 'Bombon', price: '₹200', image: imgBombon, category: 'hotsupreme' },
  { id: 6, name: 'Cappuccino Jaggery', price: '₹210', image: imgCappuccinojaggery, category: 'hotsupreme' },
  { id: 7, name: 'Cortado', price: '₹190', image: imgCortado, category: 'hotsupreme' },
  { id: 8, name: 'Espresso', price: '₹150', image: imgEspresso, category: 'hotsupreme' },
  { id: 9, name: 'Latte', price: '₹180', image: imgLatte, category: 'hotsupreme' },
  { id: 10, name: 'Mocha Latte', price: '₹220', image: imgMochalatte, category: 'hotsupreme' },
  // ICED COFFEE
  { id: 11, name: 'Iced Cappuccino', price: '₹195', image: imgIcedCappuccino, category: 'icedcoffee' },
  { id: 12, name: 'Iced Americano', price: '₹180', image: imgIcedamericano, category: 'icedcoffee' },
  { id: 13, name: 'Iced Espresso', price: '₹170', image: imgIcedespresso, category: 'icedcoffee' },
  { id: 14, name: 'Iced Matcha Latte', price: '₹230', image: imgIcedMatchaLatte, category: 'icedcoffee' },
  { id: 15, name: 'Classic Cold Coffee', price: '₹190', image: imgClassicColdCoffee, category: 'icedcoffee' },
  // COLD BREW
  { id: 16, name: 'Cold Brew', price: '₹190', image: imgColdBrew, category: 'coldbrew' },
  { id: 17, name: 'Cold Brew Lemonade', price: '₹200', image: imgColdBrewLemonade, category: 'coldbrew' },
  { id: 18, name: 'Cold Brew Tonic', price: '₹210', image: imgColdBrewTonic, category: 'coldbrew' },
  { id: 19, name: 'Cranberry Espresso', price: '₹220', image: imgCranberryespresso, category: 'coldbrew' },
  { id: 20, name: 'Espresso Tonic', price: '₹210', image: imgEspressotonic, category: 'coldbrew' },
  { id: 21, name: 'Mazagran Tonic', price: '₹230', image: imgMazagranTonic, category: 'coldbrew' },
  { id: 22, name: 'Mazagran', price: '₹220', image: imgMazagran, category: 'coldbrew' },
  { id: 23, name: 'Orange Tonic Espresso', price: '₹240', image: imgOrangeTonic, category: 'coldbrew' },
  // FRAPPE
  { id: 24, name: 'Classic Frappe', price: '₹210', image: imgClassicFrappe, category: 'frappe' },
  { id: 25, name: 'Biscoff Frappe', price: '₹260', image: imgBiscoffFrappe, category: 'frappe' },
  { id: 26, name: 'Caramel Frappe', price: '₹250', image: imgCaramelFrappe, category: 'frappe' },
  { id: 27, name: 'Hazelnut Frappe', price: '₹250', image: imgHazelnutFrappe, category: 'frappe' },
  { id: 28, name: 'Nutella Frappe', price: '₹260', image: imgNutellaFrappe, category: 'frappe' },
  { id: 29, name: 'Vanilla Frappe', price: '₹240', image: imgVanillaFrappe, category: 'frappe' },
  // MANUAL BREW  
  { id: 30, name: 'Vietnamese Coffee', price: '₹210', image: imgVietnames, category: 'mbrew' },
  { id: 31, name: 'Coconut Vietnamese', price: '₹230', image: imgCoconutVietnames, category: 'mbrew' },
  { id: 32, name: 'Matcha Latte', price: '₹240', image: imgMatchalatte, category: 'mbrew' },
  // MOCKTAILS
  { id: 33, name: 'Frozen Pomegranate Margarita', price: '₹220', image: imgFrozenPomegranate, category: 'mocktails' },
  { id: 34, name: 'Jamaican Me Krazy', price: '₹210', image: imgJamaicanMeKrazy, category: 'mocktails' },
  { id: 35, name: 'Mojito Mocktail', price: '₹180', image: imgMojitoMocktail, category: 'mocktails' },
  { id: 36, name: 'Pina Colada Mocktail', price: '₹190', image: imgPinaColada, category: 'mocktails' },
  { id: 37, name: 'Shirley Ginger', price: '₹195', image: imgShirleyGinger, category: 'mocktails' },
  { id: 38, name: 'Blueberry Mojito', price: '₹200', image: imgBlueberryMojito, category: 'mocktails' },
  { id: 39, name: 'Butterfly Pea Flower Tea', price: '₹210', image: imgButterflyPea, category: 'mocktails' },
  { id: 40, name: 'Cinderella Mocktail', price: '₹170', image: imgCinderella, category: 'mocktails' },
  { id: 41, name: 'Spicy Mango Cooler', price: '₹185', image: imgSpicyMango, category: 'mocktails' },
  { id: 42, name: 'Watermelon Mocktail', price: '₹190', image: imgWatermelonMocktail, category: 'mocktails' },
  // ICE TEA
  { id: 43, name: 'Lemon Iced Tea', price: '₹160', image: imgLemonIcedTea, category: 'icetea' },
  { id: 44, name: 'Long Island Iced Tea', price: '₹220', image: imgLongIslandIcedTea, category: 'icetea' },
  { id: 45, name: 'Rose Iced Tea', price: '₹180', image: imgRoseIcedTea, category: 'icetea' },
  { id: 46, name: 'Iced Lemon Tea Special', price: '₹170', image: imgIcedLemonTeaIsolated, category: 'icetea' },
  { id: 47, name: 'Classic Iced Tea', price: '₹150', image: imgIcedTeaRecipe, category: 'icetea' },
  { id: 48, name: 'Lifestyle Iced Tea', price: '₹190', image: imgIceTeaLifestyle, category: 'icetea' },
  { id: 49, name: 'Premium Iced Tea', price: '₹200', image: imgWhatIsIcedTea, category: 'icetea' },
  // HOT CHOCOLATE
  { id: 50, name: 'Classic Hot Chocolate', price: '₹180', image: imgClassicHotChocolate, category: 'hotchocolate' },
  { id: 51, name: 'European French Hot Chocolate', price: '₹220', image: imgEuropeanHotChocolate, category: 'hotchocolate' },
  { id: 52, name: 'Polar Express Hot Chocolate', price: '₹210', image: imgPolarExpressHotChocolate, category: 'hotchocolate' },
  { id: 53, name: 'Christmas Special Hot Chocolate', price: '₹230', image: imgChristmasHotChocolate, category: 'hotchocolate' },
  { id: 54, name: 'Indulgent Hot Chocolate', price: '₹240', image: imgIndulgentHotChocolate, category: 'hotchocolate' },
  { id: 55, name: 'Decadent Thick Hot Chocolate', price: '₹250', image: imgDecadentHotChocolate, category: 'hotchocolate' },
  { id: 56, name: 'Vegan Hot Chocolate', price: '₹200', image: imgVeganHotChocolate, category: 'hotchocolate' },
  // MILK SHAKES
  { id: 57, name: 'Chocolate Milkshake', price: '₹190', image: imgChocolateMilkshake1, category: 'milkshake' },
  { id: 58, name: 'Premium Chocolate Shake', price: '₹210', image: imgChocolateMilkshake2, category: 'milkshake' },
  { id: 59, name: 'Classic Vanilla Milkshake', price: '₹180', image: imgVanillaMilkshake, category: 'milkshake' },
  { id: 60, name: 'Strawberry Milkshake', price: '₹195', image: imgStrawberryMilkshake, category: 'milkshake' },
  { id: 61, name: 'Cafe Special Milkshake', price: '₹220', image: imgClassicMilkshake, category: 'milkshake' },
  { id: 62, name: 'Fresh Milkshake', price: '₹170', image: imgMilkshakeIsolated, category: 'milkshake' },
  { id: 63, name: 'Vanilla Malted Shake', price: '₹200', image: imgVanillaMaltedShake, category: 'milkshake' },
  // SOUP
  { id: 64, name: 'Broccoli Cheddar Soup', price: '₹150', image: imgBroccoliCheddarSoup, category: 'soup' },
  { id: 65, name: 'Chicken Noodle Soup', price: '₹170', image: imgChickenNoodleSoup, category: 'soup' },
  { id: 66, name: 'Egg Drop Soup', price: '₹140', image: imgEggDropSoup, category: 'soup' },
  { id: 67, name: 'Hot and Sour Soup', price: '₹150', image: imgHotAndSourSoup, category: 'soup' },
  { id: 68, name: 'Italian White Bean Soup', price: '₹160', image: imgItalianWhiteBeanSoup, category: 'soup' },
  { id: 69, name: 'Thai Chicken Soup', price: '₹180', image: imgThaiChickenSoup, category: 'soup' },
  { id: 70, name: 'Creamy Potato Soup', price: '₹160', image: imgCreamyPotatoSoup, category: 'soup' },
  // CRISPY FRIES
  { id: 71, name: 'Classic Salted Fries', price: '₹120', image: imgClassicFries, category: 'crispyfries' },
  { id: 72, name: 'Peri Peri Fries', price: '₹140', image: imgPeriPeriFries, category: 'crispyfries' },
  { id: 73, name: 'Rosemary Salt Fries', price: '₹150', image: imgRosemaryFries, category: 'crispyfries' },
  { id: 74, name: 'Homemade Style Fries', price: '₹130', image: imgHomemadeFries, category: 'crispyfries' },
  { id: 75, name: 'Sweet Potato Fries', price: '₹160', image: imgSweetPotatoFries, category: 'crispyfries' },
  { id: 76, name: 'Fries with Dip', price: '₹150', image: imgSaucyFries, category: 'crispyfries' },
  { id: 77, name: 'Extra Crispy Fries', price: '₹140', image: imgCrispyFries, category: 'crispyfries' },
  // PASTA
  { id: 78, name: 'Classic Italian Pasta', price: '₹280', image: imgPasta1, category: 'pasta' },
  { id: 79, name: 'Red Sauce Pasta', price: '₹260', image: imgPasta2, category: 'pasta' },
  { id: 80, name: 'Garlic Parmesan Pasta', price: '₹290', image: imgGarlicParmesanPasta, category: 'pasta' },
  { id: 81, name: 'Pesto Pasta', price: '₹300', image: imgEnginAkyurtPasta, category: 'pasta' },
  { id: 82, name: 'White Sauce Pasta', price: '₹280', image: imgProductShotPasta, category: 'pasta' },
  { id: 83, name: 'Gourmet Pasta', price: '₹320', image: imgPastaClassic, category: 'pasta' },
  { id: 84, name: 'Cream Cheese Pasta', price: '₹280', image: imgCreamCheesePasta, category: 'pasta' },
  { id: 85, name: 'Spicy Red Sauce Pasta', price: '₹270', image: imgRedSaucePastaNew, category: 'pasta' },
  { id: 86, name: 'Penne Arrabbiata', price: '₹290', image: imgPastaPexels, category: 'pasta' },
  // APPETIZERS
  { id: 87, name: 'Classic Mixed Appetizers', price: '₹320', image: imgAppetizer1, category: 'appetizers' },
  { id: 88, name: 'Premium Platter', price: '₹350', image: imgAppetizer2, category: 'appetizers' },
  { id: 89, name: 'Cucumber Shrimp Bites', price: '₹280', image: imgCucumberShrimp, category: 'appetizers' },
  { id: 90, name: 'Garlic Butter Shrimp', price: '₹300', image: imgGarlicShrimpAppetizer, category: 'appetizers' },
  { id: 91, name: 'Party Style Appetizers', price: '₹340', image: imgPartyAppetizer, category: 'appetizers' },
  { id: 92, name: 'Shrimp Shooters', price: '₹320', image: imgShrimpShooters, category: 'appetizers' },
  { id: 93, name: 'Spring Herb Cream Cheese', price: '₹260', image: imgSpringHerbAppetizer, category: 'appetizers' },
  { id: 94, name: 'Grand Party Appetizer', price: '₹380', image: imgBestPartyAppetizer, category: 'appetizers' },
  // PIZZA
  { id: 95, name: 'Classic Farmhouse Pizza', price: '₹350', image: imgPizza1, category: 'pizza' },
  { id: 96, name: 'Double Cheese Pizza', price: '₹380', image: imgPizza2, category: 'pizza' },
  { id: 97, name: 'Margherita Pizza', price: '₹320', image: imgMargheritaPizza, category: 'pizza' },
  { id: 98, name: 'Easy Cheese Pizza', price: '₹300', image: imgEasyCheesePizza, category: 'pizza' },
  { id: 99, name: 'Pepperoni Pizza', price: '₹420', image: imgPepperoniPizza, category: 'pizza' },
  { id: 100, name: 'Signature Pizza', price: '₹450', image: imgPizzaRecipe, category: 'pizza' },
  { id: 101, name: 'Veggie Paradise Pizza', price: '₹360', image: imgPizzaNew, category: 'pizza' },
  { id: 102, name: 'Spicy Paneer Pizza', price: '₹390', image: imgPizza1New, category: 'pizza' },
  { id: 103, name: 'Supreme Feast Pizza', price: '₹480', image: imgPizza2619967, category: 'pizza' },
  // SIZZLER
  { id: 104, name: 'Fresh Chicken Sizzler', price: '₹450', image: imgFreshChickenSizzler, category: 'sizzler' },
  { id: 105, name: 'Grilled Chicken Sizzler', price: '₹480', image: imgGrilledChickenSizzler, category: 'sizzler' },
  { id: 106, name: 'Paneer Cottage Sizzler', price: '₹420', image: imgPaneerSizzler, category: 'sizzler' },
  { id: 107, name: 'Mixed Veg Sizzler', price: '₹400', image: imgSizzler1, category: 'sizzler' },
  { id: 108, name: 'Exotic Sizzler', price: '₹460', image: imgSizzlerAvif, category: 'sizzler' },
  { id: 109, name: 'Cottage Cheese Special', price: '₹430', image: imgPaneerSizzlerAvif, category: 'sizzler' },
  { id: 110, name: 'Tandoori Paneer Sizzler', price: '₹440', image: imgPaneerSizzlerNew, category: 'sizzler' },
  // CHEESE CAKE / CAKES
  { id: 111, name: 'Classic Cheese Cake', price: '₹180', image: imgCake1, category: 'cheesecake' },
  { id: 112, name: 'Premium Velvet Cake', price: '₹220', image: imgCake2, category: 'cheesecake' },
  { id: 113, name: 'Chocolate Mousse Cake', price: '₹250', image: imgChocolateMousseCake, category: 'cheesecake' },
  { id: 114, name: 'Red Marble Cake', price: '₹190', image: imgMarbleCake, category: 'cheesecake' },
  { id: 115, name: 'Deluxe Party Cake', price: '₹240', image: imgTastyCake, category: 'cheesecake' },
  { id: 116, name: 'Special Chocolate Cake', price: '₹260', image: imgCake2New, category: 'cheesecake' },
  { id: 117, name: 'Vanilla Dream Cake', price: '₹230', image: imgCake3New, category: 'cheesecake' },
  { id: 118, name: 'Red Velvet Special', price: '₹280', image: imgRedVelvetCake, category: 'cheesecake' },
  { id: 119, name: 'Strawberry Cheesecake', price: '₹270', image: imgStrawberryCheesecake, category: 'cheesecake' },
  { id: 120, name: 'Baked Fresh Cake', price: '₹250', image: imgBakedCake, category: 'cheesecake' },
];

const categories = [
  { id: 'all', label: 'All Dishes', filter: '*' },
  { id: 'hotsupreme', label: 'HOT SUPREME', filter: 'hotsupreme' },
  { id: 'icedcoffee', label: 'ICED COFFEE', filter: 'icedcoffee' },
  { id: 'frappe', label: 'FRAPPE', filter: 'frappe' },
  { id: 'coldbrew', label: 'COLD BREW', filter: 'coldbrew' },
  { id: 'mbrew', label: 'MANUAL BREW', filter: 'mbrew' },
  { id: 'mocktails', label: 'MOCKTAILS', filter: 'mocktails' },
  { id: 'icetea', label: 'ICE TEA', filter: 'icetea' },
  { id: 'hotchocolate', label: 'HOT CHOCOLATE', filter: 'hotchocolate' },
  { id: 'milkshake', label: 'MILK SHAKES', filter: 'milkshake' },
  { id: 'soup', label: 'SOUP', filter: 'soup' },
  { id: 'crispyfries', label: 'CRISPY FRIES', filter: 'crispyfries' },
  { id: 'pasta', label: 'PASTA', filter: 'pasta' },
  { id: 'appetizers', label: 'APPETIZERS', filter: 'appetizers' },
  { id: 'pizza', label: 'PIZZA', filter: 'pizza' },
  { id: 'sizzler', label: 'SIZZLER', filter: 'sizzler' },
  { id: 'cheesecake', label: 'CHEESE CAKE', filter: 'cheesecake' },
];

const Menu: React.FC<MenuProps> = ({ limit, hideCategories }) => {
  const [filter, setFilter] = useState('*');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const filteredItems = filter === '*'
    ? menuData
    : menuData.filter(item => item.category === filter);

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (index: number) => { 
    setDirection(0);
    setSelectedIndex(index);
  };
  const closeLightbox = () => setSelectedIndex(null);

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setDirection(-1);
    setSelectedIndex((prev) => (prev === null ? null : prev === 0 ? displayItems.length - 1 : prev - 1));
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setDirection(1);
    setSelectedIndex((prev) => (prev === null ? null : prev === displayItems.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  return (
    <section id="menu" className="pt-20 md:pt-32 pb-16 md:pb-24 bg-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h4 className="text-[11px] md:text-[13px] tracking-[0.2em] md:tracking-[0.3em] text-orange-400 font-semibold mb-3 uppercase">ENJOY YOUR TIME IN OUR RESTAURANT WITH PLEASURE.</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-playfair">Discover Our Menu</h2>
          <div className="flex justify-center items-center">
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full relative after:content-[''] after:absolute after:top-1/2 after:right-5 after:w-16 after:h-px after:bg-white/10 before:content-[''] before:absolute before:top-1/2 before:left-5 before:w-16 before:h-px before:bg-white/10"></div>
          </div>
          {hideCategories && (
            <div className="mt-8">
              <Link 
                to="/menu" 
                className="inline-block px-8 py-3 bg-orange-400 text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-lg shadow-orange-400/20 cursor-pointer"
              >
                View Full Menu
              </Link>
            </div>
          )}
        </div>

        {/* Categories */}
        {!hideCategories && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.filter)}
                className={`cursor-pointer px-4 md:px-7 py-2 md:py-2.5 rounded-full text-[11px] md:text-[13px] font-semibold tracking-wider transition-all duration-300 ${
                  (filter === cat.filter)
                    ? 'bg-orange-400 text-white shadow-lg shadow-orange-400/20'
                    : 'bg-[#1a1a1a] text-gray-400 hover:bg-orange-400 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {displayItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#1e1e1e] overflow-hidden transition-all duration-500 cursor-pointer"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(displayItems.indexOf(item))}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center border border-white/10 transform scale-50 group-hover:scale-100 transition-transform duration-500 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6 text-left">
                  <h3 className="text-[14px] md:text-[16px] font-bold mb-1 md:mb-2 font-playfair text-white tracking-wide group-hover:text-orange-400 transition-colors duration-300">{item.name}</h3>
                  <div className="text-orange-400 font-medium text-[16px] md:text-[18px] font-playfair italic">₹{item.price.replace('₹', '')}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-400 text-white transition-all duration-300 cursor-pointer z-[60] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-4xl h-[85vh] flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={selectedIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-full flex flex-col items-center justify-center px-4 py-8">
                  <div className="relative group/img max-w-full flex justify-center">
                    <img
                      src={filteredItems[selectedIndex].image}
                      alt={filteredItems[selectedIndex].name}
                      className="max-w-full max-h-[55vh] md:max-h-[60vh] object-contain rounded shadow-2xl shadow-black/80 ring-1 ring-white/10 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div className="mt-6 md:mt-8 text-center bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/5 max-w-[90%] md:max-w-lg cursor-pointer">
                    <h3 className="text-white text-2xl md:text-3xl font-bold font-playfair tracking-wide leading-tight">{filteredItems[selectedIndex].name}</h3>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-orange-400/30"></div>
                      <p className="text-orange-400 font-bold text-xl md:text-2xl font-playfair italic">{filteredItems[selectedIndex].price}</p>
                      <div className="h-px w-8 bg-orange-400/30"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-400 text-white transition-all duration-300 cursor-pointer z-[60] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Menu;