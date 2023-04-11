import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    products: Product[] = [
        new Product(
            'Kiki jiji',
            'Jiji est un chat',
            'https://dailygeekshow.com/wp-content/uploads/sites/2/2016/05/anecdotes-kiki-jiji.jpg',
            100,
            "🖤",
            false,
            [{size: "S", price: 100}, {size: "M", price: 150}, {size: "L", price: 200}],
            new Date("2021-01-01")
        ),
        new Product(
            'totoro',
            'totoro banger',
            'https://www.francetvinfo.fr/pictures/igMtsFZMuZ9PLdvWJSTvwIzkT0Q/752x423/2019/04/11/041_myn006af.jpg',
            200,
            "🖤",
            false,
            [{size: "S", price: 10}, {size: "M", price: 20}, {size: "L", price: 30}],
            new Date("2022-01-01")
        )];

    getAllProducts(): Product[] {
        return this.products;
    }

    onLikeProduct(product: Product): void {
        if (product.isLiked) {
            product.likes = "🖤"
        } else {
            product.likes = "💓"
        }
        product.isLiked = !product.isLiked;
    }
}
