import { Scripture } from './scripture';
export class Favourite
{
    constructor(public scripture: Scripture, public created: Date = new Date()) { }

    isSame(favourite: Favourite)
    {
        let comparisonScripture = favourite.scripture;
        if (favourite &&
            comparisonScripture.text == this.scripture.text &&
            comparisonScripture.book_id == this.scripture.book_id &&
            comparisonScripture.chapter == this.scripture.chapter &&
            comparisonScripture.verse == this.scripture.verse &&
            comparisonScripture.book_name == this.scripture.book_name
        )
        {
            return true;
        }

        return false;
    }
}