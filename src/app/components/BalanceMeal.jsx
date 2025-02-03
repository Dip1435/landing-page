import Meal from "../common/Meal";

const BalanceMeal = () => {
  return (
    <div className="container mx-auto p-8">
      <div>
        <h1 className="text-2xl font-[Playfair_Display]">
          Balanced Meals
          <span className="text-blue-600 text-sm ms-1">
            (450-650 calories per meal)
          </span>
        </h1>
        <p className="text-sm font-[Montserrat]">
          Planned by dieticians and ayurvedic experts
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 my-3">
        <Meal
          img={"/meal1.png"}
          alt={"meal-1"}
          text={"PROTEIN"}
          className={
            "flex flex-col sm:w-[269px] w-full h-[250px]  items-center justify-center gap-y-2 rounded-3xl border bg-[#B0CFC333]"
          }
        />
        <Meal
          img={"/Rectangle 101928.png"}
          alt={"meal-2"}
          text={"VAGGIES"}
          className={
            "flex flex-col sm:w-[269px] w-full h-[250px] items-center justify-center gap-y-2 rounded-3xl border bg-[#B2C6E4]"
          }
        />
        <Meal
          img={"/Rectangle 101928-1.png"}
          alt={"meal-3"}
          text={"SIDES"}
          className={
            "flex flex-col sm:w-[269px] w-full h-[250px] items-center justify-center gap-y-2 rounded-3xl border bg-[#FFD273]"
          }
        />
        <Meal
          img={"/Rectangle 101928-2.png"}
          alt={"meal-4"}
          text={"PROBIOTICS"}
          className={
            "flex flex-col sm:w-[269px] w-full h-[250px] items-center justify-center gap-y-2 rounded-3xl border bg-[#FFAD7A]"
          }
        />
      </div>
    </div>
  );
};

export default BalanceMeal;
