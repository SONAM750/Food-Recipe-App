import styles from './recipeitem.module.css'
export default function RecipeItem({item}){
    return(<div>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
          <img className={styles.img}
          src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt=""/>
          </div>
          <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>{item.amount}{item.unit}</div>
          </div>
          </div>
    </div>);
}