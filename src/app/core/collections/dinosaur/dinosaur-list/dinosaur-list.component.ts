import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, IProductItem } from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.scss']
})
export class DinosaurListComponent implements OnInit {
  products!: IProductItem[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getProductTypes('Dinosaur').subscribe(
      (data: IProduct) => {
        this.products = data.products;
      },
      (error: Observable<never>) => {
        console.log(error);
      }
    );
    // TEMP
    this.products = [
      {
        name: 'Allosaurus',
        image: 'assets/img/allosaurus.png',
        alias: 'Lézard différent',
        description:
          "Dinosaure adulte, carnivore d'une taille d'environ 4.3 mètres, d'une longueur de 9 à 12 mètres et d'un poids de 2.3 tonnes en moyenne.",
        rate: 5,
        price: 10000,
        reviewsNumber: 0,
        type: 'Dinosaur'
      },
      {
        name: 'Baryonyx',
        alias: 'Griffes puissantes',
        description:
          "Dinosaure adulte, piscivore et carnivore d'une taille d'environ 2.5 mètres, d'une longueur de 9.5 mètres en moyenne et d'un poids de 1.7 à 2.5 tonnes.",
        rate: 5,
        price: 20000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/baryonyx.png'
      },
      {
        name: 'Brachiosaurus',
        alias: 'Lézard à bras',
        description:
          "Dinosaure adulte, herbivore d'une taille d'environ 9 mètres, d'une longueur de 27 mètres en moyenne et d'un poids de 30 tonnes en moyenne.",
        rate: 5,
        price: 40000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/brachiosaurus.png'
      },
      {
        name: 'Carnotaurus',
        alias: 'Taureau carnivore',
        description:
          "Dinosaure adulte, carnivore d'une taille d'environ 3.5 mètres, d'une longueur de 6 à 8 mètres et d'un poids de 1.5 tonnes en moyenne.",
        rate: 5,
        price: 20000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/carnotaurus.png'
      },
      {
        name: 'Edmontosaurus',
        alias: "Lézard d'Edmonton",
        description:
          "Dinosaure adulte, herbivore d'une taille d'environ 3 mètres, d'une longueur de 12 à 13 mètres et d'un poids de 5 tonnes en moyenne.",
        rate: 5,
        price: 10000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/edmontosaurus.png'
      },
      {
        name: 'Indominus Rex',
        alias: 'Roi indomptable',
        description:
          "Dinosaure adulte hybride principalement crée à partir de Tyrannosaurus Rex et de Vélociraptor, carnivore d'une taille d'environ 6 mètres, d'une longueur de 15 mètres en moyenne et d'un poids très variable.",
        rate: 5,
        price: 1000000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Indominus_Rex.png'
      },
      {
        name: 'Metriacanthosaurus',
        alias: 'Lézard modérément épineux',
        description:
          "Dinosaure adulte, carnivore d'une taille d'environ 3.5 mètres, d'une longueur de 8 mètres en moyenne et d'un poids de 2 tonnes en moyenne.",
        rate: 5,
        price: 10000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Metriacanthosaurus.png'
      },
      {
        name: 'Parasaurolophus',
        alias: 'Reptile à crêtes à cloisons parallèles',
        description:
          "Dinosaure adulte, herbivore d'une taille d'environ 4 mètres, d'une longueur de 10 mètres en moyenne et d'un poids de 4 à 5 tonnes.",
        rate: 5,
        price: 12000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Parasaurolophus.png'
      },
      {
        name: 'Proceratosaurus',
        alias: 'Avant le lézard à corne',
        description:
          "Dinosaure adulte, carnivore d'une taille d'environ 0.9 mètres, d'une longueur de 3 mètres en moyenne et d'un poids de 200 kilos en moyenne.",
        rate: 5,
        price: 5000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Proceratosaurus.png'
      },
      {
        name: 'Pteranodon',
        alias: 'Aile sans dents',
        description:
          "Dinosaure adulte volant, piscivore d'une taille d'environ 2 mètres, d'une longueur de 8 à 10 mètres et d'un poids de 25 kilos en moyenne.",
        rate: 5,
        price: 7500,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Pteranodon.png'
      },
      {
        name: 'Sinocératops',
        alias: 'Lézard au nez épais',
        description:
          "Dinosaure adulte, herbivore d'une taille d'environ 3 mètres, d'une longueur de 6 mètres en moyenne et d'un poids de 2.2 à 2.5 tonnes.",
        rate: 5,
        price: 8000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Sinoceratops.png'
      },
      {
        name: 'Spinosaurus',
        alias: 'Lézard à épines',
        description:
          "Dinosaure adulte, piscivore et carnivore d'une taille de 6 à 7 mètres, d'une longueur de 13.5 à 15.5 mètres et d'un poids de 10.5 tonnes en moyenne.",
        rate: 5,
        price: 25000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Spinosaurus.png'
      },
      {
        name: 'Stegosaurus',
        alias: 'Lézard à toit',
        description:
          "Dinosaure adulte, herbivore d'une taille d'environ 4 mètres, d'une longueur de 9 mètres en moyenne et d'un poids de 4 tonnes en moyenne.",
        rate: 5,
        price: 6000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Stegosaurus.png'
      },
      {
        name: 'Stygimoloch',
        alias: 'Démon du Styx',
        description:
          "Dinosaure adulte, herbivore d'une taille d'environ 1 mètres, d'une longueur de 2 à 3 mètres et d'un poids de 80 kilos en moyenne.",
        rate: 5,
        price: 4000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Stygimoloch.png'
      },
      {
        name: 'Suchominus',
        alias: 'Qui imite le crocodile',
        description:
          "Dinosaure adulte, piscivore et carnivore d'une taille de 3.5 à 5 mètres, d'une longueur de 11 à 13 mètres et d'un poids de 3 à 6 tonnes.",
        rate: 5,
        price: 15000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Suchominus.png'
      },
      {
        name: 'Tricératops',
        alias: 'Tête à trois cornes',
        description:
          "Dinosaure adulte, herbivore d'une taille d'environ 3 mètres, d'une longueur de 10 mètres en moyenne et d'un poids de 7 à 10 tonnes.",
        rate: 5,
        price: 9000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Triceratops.png'
      },
      {
        name: 'Troodon',
        alias: 'Dent blessante',
        description:
          "Dinosaure adulte, omnivore d'une taille d'environ 1 mètres, d'une longueur de 3 mètres en moyenne et d'un poids de 50 kilos en moyenne.",
        rate: 5,
        price: 2500,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Troodon.png'
      },
      {
        name: 'Tyrannosaurus Rex',
        alias: 'Roi des lézars tyrans',
        description:
          "Dinosaure adulte, carnivore d'une taille d'environ 4 mètres, d'une longueur de 13.1 mètres en moyenne et d'un poids de 7 tonnes en moyenne.",
        rate: 5,
        price: 50000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/tyrannosaurus_rex.png'
      },
      {
        name: 'Vélociraptor',
        alias: 'Voleur rapide',
        description:
          "Dinosaure adulte, carnivore d'une taille d'environ 2 mètres, d'une longueur de 3 mètres en moyenne et d'un poids de 150 kilos en moyenne.",
        rate: 5,
        price: 15000,
        type: 'Dinosaur',
        reviewsNumber: 0,
        image: 'assets/img/Velociraptor.png'
      }
    ];
  }

  getUrl(): string {
    return this.router.url;
  }
}
