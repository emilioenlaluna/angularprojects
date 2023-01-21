import { Component, Input } from '@angular/core'
@Component({
    selector: 'rating',
    templateUrl: 'rating.component.html',
    styles: [`
.bi-star-fill {
color: orange;
}
`]
})
export class RatingComponent {
    @Input('rating-value') rating = 0;
    onClick(ratingValue: number) {
        this.rating = ratingValue;
    }
}