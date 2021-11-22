import MahlzeitChef from "../../assets/mahlzeit_chef.jpg";

const MealsSummary = () => {
    return <section className="summary">
        <h2>Gesundes und leckeres Essen schnell geliefert</h2>
        <img src={MahlzeitChef} alt="Mahlzeit Chef" />
        <p>Regional. Gesund. Ökologisch. Lecker: Das sind die Mahlzeiten, die wir Ihnen hier, abgestimmt auf die jeweilige Saison, anbieten.</p>
        <p>Alle Zutaten stammen von regionalen Anbietern aus nachhaltigem, kontrollierten und umweltfreundlichen Anbau bzw. entsprechender Nutztierhaltung. Wir legen Wert auf die allerhöchsten Standards. Bei unseren Partnern, vor allem aber auch bei uns selbst.</p>
        <p>Jede Mahlzeit wird von erfahrenen Sterneköchen zubereitet, in wiederverwendbaren Aufbewahrungsboxen eingepackt und mit dem Fahrrad ausgeliefert.</p>
        <p>Regional. Gesund. Ökologisch. Lecker. Dafür stehen wir mit unserem Namen.</p>
        <p>Mahlzeit! 🍲</p>
    </section>
};

export default MealsSummary;