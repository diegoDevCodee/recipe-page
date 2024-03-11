const Content = () => {
  return (
    <section className='bg-white sm:w-[54rem] sm:p-8 rounded-2xl'>
      <div className='rounded-lg overflow-hidden'>
        <img
          src='/image-omelette.jpeg'
          alt='omelette'
          className='object-cover'
        />
      </div>

      <div className='px-8 sm:px-0'>
        <div>
          <h1 className='font-["Young_serif"] font-normal text-3xl sm:text-5xl text-darkCharcoal py-8'>
            Simple Omelette Recipe
          </h1>
          <p className='font-["Outfit"] text-wengeBrown font-normal text-xl '>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div className='bg-roseWhite rounded-xl px-8 py-4 font-["Outfit"] mt-8'>
          <h3 className='text-2xl font-bold text-darkRaspberry'>
            Preparation time
          </h3>
          <ul className='text-xl px-2 mt-4 flex flex-col gap-2'>
            <li className='flex items-center gap-2 text-wengeBrown'>
              <div className='flex items-center gap-8'>
                <span className='text-2xl text text-darkRaspberry'>•</span>
                <span className='font-bold '>
                  Total:{" "}
                  <span className='font-normal'>Approximately 10 minutes</span>
                </span>
              </div>{" "}
            </li>
            <li className='flex items-center gap-2 text-wengeBrown'>
              <div className='flex items-center gap-8'>
                <span className='text-2xl text text-darkRaspberry'>•</span>
                <span className='font-bold '>Preparation:</span>
              </div>{" "}
              5 minutes
            </li>
            <li className='flex items-center gap-2 text-wengeBrown'>
              <div className='flex items-center gap-8'>
                <span className='text-2xl text text-darkRaspberry'>•</span>
                <span className='font-bold '>Cooking:</span>
              </div>{" "}
              5 minutes
            </li>
          </ul>
        </div>

        <div className='mt-8'>
          <h2 className='font-["Young_serif"] text-3xl text-nutmeg'>
            Ingredients
          </h2>
          <ul className='p-3 text-wengeBrown text-xl mb-2'>
            <li>
              <span className='text-2xl text text-nutmeg pr-5'>•</span>2-3 large
              eggs
            </li>
            <li>
              <span className='text-2xl text text-nutmeg pr-5'>•</span>Salt, to
              taste
            </li>
            <li>
              <span className='text-2xl text text-nutmeg pr-5'>•</span>Pepper,
              to taste
            </li>
            <li>
              <span className='text-2xl text text-nutmeg pr-5'>•</span>1
              tablespoon of butter or oil
            </li>
            <li>
              <span className='text-2xl text text-nutmeg pr-5'>•</span>
              Optional fillings: cheese, diced vergetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <hr />

        <div className='mt-8'>
          <h2 className='font-["Young_serif"] text-3xl text-nutmeg '>
            Instructions
          </h2>
          <ol className='text-xl text-wengeBrown flex flex-col gap-4 mt-4 mb-8'>
            <li>
              <span className='pr-4 font-bold text-nutmeg'>1.</span>
              <span className='font-bold'>Beat the eggs:</span> In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You cand add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li>
              <span className='pr-4 font-bold text-nutmeg'>2.</span>
              <span className='font-bold'>Heat the pan:</span> Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <span className='pr-4 font-bold text-nutmeg'>3.</span>
              <span className='font-bold'>Cook the omelette:</span> Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>
            <li>
              <span className='pr-4 font-bold text-nutmeg'>4.</span>
              <span className='font-bold'>Add fillings(optional):</span> When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li>
              <span className='pr-4 font-bold text-nutmeg'>5.</span>
              <span className='font-bold'>Fold and serve:</span> As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </li>
            <li>
              <span className='pr-4 font-bold text-nutmeg'>6.</span>
              <span className='font-bold'>Enjoy:</span> Serve hot, whit
              additional salt and pepper if needed
            </li>
          </ol>
        </div>
        <hr />

        <div className='text-xl'>
          <h2 className='font-["Young_serif"] text-3xl text-nutmeg py-8'>
            Nutrition
          </h2>
          <p className=' text-wengeBrown pb-8'>
            The table below shows nutritonial values per serving whitout the
            additional fillings.
          </p>
          <div className='text-wengeBrown'>
            <div className='grid grid-cols-2'>
              <span className='py-4 px-8'>Calories</span>
              <span className='py-4 text-nutmeg font-bold'>277kcal</span>
            </div>
            <hr />
            <div className='grid grid-cols-2'>
              <span className='py-4 px-8'>Carbs</span>
              <span className='py-4 text-nutmeg font-bold'>0g</span>
            </div>
            <hr />
            <div className='grid grid-cols-2'>
              <span className='py-4 px-8'>Protein</span>
              <span className='py-4 text-nutmeg font-bold'>20g</span>
            </div>
            <hr />
            <div className='grid grid-cols-2'>
              <span className='py-4 px-8'>Fat</span>
              <span className='py-4 text-nutmeg font-bold'>22g</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
