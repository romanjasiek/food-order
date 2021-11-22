import { nanoid } from "nanoid";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import Rotkohlsteaks from "../../assets/rotkohlsteaks.png";
import Linseneintopf from "../../assets/linseneintopf.png";
import Spitzkohlpfanne from "../../assets/spitzkohlpfanne.png";
import FamilienBolognese from "../../assets/familienbolognese.png";

const DUMMY_MEALS = [
    {
      id: nanoid(),
      image: FamilienBolognese,
      name: <div dangerouslySetInnerHTML={{__html: 'Gesunde Familien-Bolognese <sup>1, 2, 5</sup>'}} />,
      description: "Gesund, sättigt wunderbar und ist dazu noch vegan.",
      price: 11.99,
    },
    {
      id: nanoid(),
      image: Linseneintopf,
      name: <div dangerouslySetInnerHTML={{__html: 'Linseneintopf mit Räuchertofu <sup>4, 5</sup>'}} />,
      description: "Wärmt von innen, macht satt und ist super gesund.",
      price: 7.99,
    },
    {
      id: nanoid(),
      image: Rotkohlsteaks,
      name: <div dangerouslySetInnerHTML={{__html: 'Gebackene Rotkohlsteaks mit Kartoffelpüree <sup>2, 3, 5</sup>'}} />,
      description: "Die gesündeste vegane Steak-Alternative.",
      price: 24.99,
    },
    {
      id: nanoid(),
      image: Spitzkohlpfanne,
      name: <div dangerouslySetInnerHTML={{__html: 'Spitzkohl-Pfanne mit Dinkel-Spirelli <sup>6</sup>'}} />,
      description: "Unser klassiker unter den Sattmachern.",
      price: 4.99,
    },
  ];

const AvailableMealsRegular = () => {

    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
                                                key={meal.id} 
                                                id={meal.id}
                                                image={meal.image}
                                                name={meal.name} 
                                                description={meal.description} 
                                                price={meal.price}/>);

    return <section className="meals">
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
};

export default AvailableMealsRegular;