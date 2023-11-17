<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
      <!-- Barre de navigation -->
      <nav class="flex justify-center p-4 bg-gray-800">
        <button @click="afficherProduits" class="text-white mx-2 focus:outline-none">Products</button><br />
        <button @click="afficherCategories" class="text-white mx-2 focus:outline-none">Categories</button><br />
        <button @click="afficherUtilisateurs" class="text-white mx-2 focus:outline-none">Users</button><br />
      </nav>
  
      <!-- Contenu dynamique en fonction du bouton cliqué -->
      <div class="mt-4">
        <!-- Contenu de la page "Products" -->
        <div v-if="pageActuelle === 'products'">
          <table>
            <thead>
              <tr>
                <th>ID</th><br />
                <th>Produit</th>
                <th>Catégories</th><br />
                <th>Actions</th>
                <!-- Ajoutez d'autres colonnes au besoin -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="produit in produits" :key="produit.id">
                <td>{{ produit.id }}</td>
                <td>{{ produit.name }}</td>
                <td>{{ produit.categories.join(', ') }}</td> <!-- Assurez-vous que categories est un tableau --> <td>
                  <!-- Boutons d'actions -->
                  <button @click="editerProduit(produit)">Editer/</button>
                  <button @click="supprimerProduit(produit.id)">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Contenu de la page "Categories" -->
        <div v-if="pageActuelle === 'categories'">
            <table>
                <thead>
                  <tr>
                    <th>ID</th><br />
                    <th>Produit</th>
                    <th>Catégories</th><br />
                    <th>Actions</th>
                    <!-- Ajoutez d'autres colonnes au besoin -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="categories in categories" :key="categories.id">
                    <td>{{ categories.id }}</td>
                    <td>{{ categories.name }}</td>
                   <td>
                      <!-- Boutons d'actions -->
                      <button @click="editerProduit(categories)">Editer/</button>
                      <button @click="supprimerProduit(categories.id)">Supprimer</button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
        </div>
        
  
        <!-- Contenu de la page "Users" -->
        <div v-if="pageActuelle === 'users'">
          <!-- Ajoutez le contenu spécifique à la page "Users" ici -->
          <router-link to="/register" class="link link-underline-hover">Register new account</router-link>
          <table>
            <thead>
              <tr>
                <th>Nom</th><br />
                <th>Mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="users in users" :key="users.id">
                <td>{{ users.fullName }}</td>
                <td>{{ users.email }}</td>
               <td>
                  <!-- Boutons d'actions -->
                  <button @click="editerProduit(users)">Editer/</button>
                  <button @click="supprimerProduit(users.id)">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pageActuelle: 'products', // Page par défaut
        produits: [], // Pour stocker les produits récupérés de l'API
        categories: [],
        users: [],
      };
    },
    methods: {
      async afficherProduits() {
        this.pageActuelle = 'products';
  
        // Faites une requête GET pour récupérer les produits depuis votre API
        try {
          const response = await axios.get('http://localhost/api/products'); // Remplacez par l'URL réelle de votre API
  
          // Mettez à jour le tableau de produits avec les données de l'API
          this.produits = response.data['hydra:member'];
        } catch (error) {
          console.error('Erreur lors de la récupération des produits:', error.message);
        }
      },




      async afficherCategories() {
    this.pageActuelle = 'categories';

    // Ajoutez votre token d'authentification ici
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTU1MDgsImV4cCI6MTcwMDI1OTEwOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InN0ZXZlbi5ndWlsbGVybWV0QGVwaXRlY2guZGlnaXRhbCJ9.Fg-k4LE6Xq8yAnSFqiEWzwqnW007WiWRQpbJdNDl7QdtYBZApYjrrZvf6YBRnLlPhxICD2yXa_DGqYbn0QWAy14sBWf710xkub2AJSDrtO_o_uY5ayBTcoGJrnnUuPfjKUtENwns9txJDi3qe5l5a50Hg1oivQt1D3Xqu7nP_PdZ7rmUSEzyrdkYtYIwoc2x2e9fhDYokf70l8B8tuU8Rrd_eukf483wJcI4mA_IushzLSF2yztqaA3ObLTlnUsK0M8JpY_psm-jBdkVVVByvjPFDL3NATZDDIeO4kOaojezzQux9hsKo55YfxNEdRJsqflZfBVjrl9pn11Ean95sg';

    // Options de la requête
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Ajoutez votre token d'authentification dans l'en-tête
        'Authorization': `Bearer ${token}`
      },
    };

    // Faites une requête GET pour récupérer les catégories depuis votre API
    try {
      const response = await fetch('http://localhost/api/categories', options); // Remplacez par l'URL réelle de votre API
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }

      // Parsez la réponse en JSON
      const data = await response.json();

      // Mettez à jour le tableau de catégories avec les données de l'API
      this.categories = data['hydra:member'];
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error.message);
    }
  },
  



  async afficherUtilisateurs() {
    this.pageActuelle = 'users';

    // Ajoutez votre token d'authentification ici
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNTU1MDgsImV4cCI6MTcwMDI1OTEwOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InN0ZXZlbi5ndWlsbGVybWV0QGVwaXRlY2guZGlnaXRhbCJ9.Fg-k4LE6Xq8yAnSFqiEWzwqnW007WiWRQpbJdNDl7QdtYBZApYjrrZvf6YBRnLlPhxICD2yXa_DGqYbn0QWAy14sBWf710xkub2AJSDrtO_o_uY5ayBTcoGJrnnUuPfjKUtENwns9txJDi3qe5l5a50Hg1oivQt1D3Xqu7nP_PdZ7rmUSEzyrdkYtYIwoc2x2e9fhDYokf70l8B8tuU8Rrd_eukf483wJcI4mA_IushzLSF2yztqaA3ObLTlnUsK0M8JpY_psm-jBdkVVVByvjPFDL3NATZDDIeO4kOaojezzQux9hsKo55YfxNEdRJsqflZfBVjrl9pn11Ean95sg';

    // Options de la requête
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Ajoutez votre token d'authentification dans l'en-tête
        'Authorization': `Bearer ${token}`
      },
    };

    // Faites une requête GET pour récupérer les utilisateurs depuis votre API
    try {
      const response = await fetch('http://localhost/api/users', options); // Remplacez par l'URL réelle de votre API
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }

      // Parsez la réponse en JSON
      const data = await response.json();

      // Mettez à jour le tableau d'utilisateurs avec les données de l'API
      this.users = data['hydra:member'];
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error.message);
    }
  },







      editerProduit(produit) {
        // Mettez en œuvre la logique d'édition ici
        // Vous pouvez utiliser une boîte de dialogue modale ou une nouvelle vue pour l'édition
        console.log('Édition du produit :', produit);
      },
      async supprimerProduit(produitId) {
        // Mettez en œuvre la logique de suppression ici
        // Vous pouvez demander une confirmation à l'utilisateur avant de supprimer
        if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
          try {
            const config = {
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDIzNTUsImV4cCI6MTcwMDI0NTk1NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InN0ZXZlbi5ndWlsbGVybWV0QGVwaXRlY2guZGlnaXRhbCJ9.hcIVvIgwmZOLcceZlBAIt0TkDvYG18Q74VB78n2D9p1ZymbTp2ayrvKNpg_192jmYFUD3MJXFKtlpBe39c8PqvuozK2rSEzrsjxJMXvYTReYNI6KwjGD_WJijN8Xr1nvFQytlpeu5MYdqZu40sEuNOO6oosvHvaHwxGnO11BjKwwN_mukhjO46ZMVrEkc2cmzJhWjF40G7NnqlnffDc0VsQcfUjl0qGkoZKvfF1OfsPjfT6CMsO9r8_ESVX8jy-0VOEdsws5Ofuz0VrEtNftm2ymw1qMF02W9q6LHf3yi_JxAvjNCRGk1A64IUR6UwIrIfkjuWz_V2smrm8mkMw4eg` }
            };
            // Faites une requête DELETE pour supprimer le produit de votre API
            await axios.delete(`http://localhost/api/products/${produitId}`, config); // Remplacez par l'URL réelle de votre API
  
            // Mettez à jour la liste des produits après la suppression
            this.produits = this.produits.filter(produit => produit.id !== produitId);
          } catch (error) {
            console.error('Erreur lors de la suppression du produit:', error.message);
          }
        }
      },
      editerCategorie(categorie) {
      this.categorieEnEdition = categorie;
      this.nouveauNomCategorie = categorie.name;
      this.showEditModalCategorie = true;
    },
 
    annulerEditionCategorie() {
      this.showEditModalCategorie = false;
      this.categorieEnEdition = null;
      this.nouveauNomCategorie = '';
    },
 
    async validerEditionCategorie() {
      try {
        const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDc4MDAsImV4cCI6MTcwMDI1MTQwMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF6ZXJ0eSJ9.Uizm_qdfuqRzXoUBmILUKJ8X7wukgl_beRR00T_fXduAl7MJHu4OW_t8Z06f__Xid8UBXSSYe5rnsnMIhiIwS0ZfnfYOUGg6nHgWthteqihiQobznSGNJO8evvXhEyjPPZnFYqCFVtJxC_ULWWDN0q9l-3TvbA3li1k6frThoBkfJ3eqN1RyjvjaruYHYUfJd9kofXsmV0DRquFJZifhpB-zYwC2dErpt-ygQsw_-8YjgdbZVfqcS1yZelIzy6ejHkMZ4ubwiM7NCkOZ3nx1qtIP14FrwyWirmI8LqqkI8hwCxgx6j4URM8hVVa2AsxP6I5PqnhvsmMjUtu2D03Akw';
 
        const response = await fetch(`http://localhost/api/categories/${this.categorieEnEdition.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            name: this.nouveauNomCategorie,
          }),
        });
 
        if (!response.ok) {
          throw new Error(`Erreur lors de la mise à jour de la catégorie: ${response.status}`);
        }
 
        // Mettez à jour la liste des catégories après l'édition
        this.categories = this.categories.map((categorie) =>
          categorie.id === this.categorieEnEdition.id
            ? { ...categorie, name: this.nouveauNomCategorie }
            : categorie
        );
 
        this.annulerEditionCategorie();
      } catch (error) {
        console.error('Erreur lors de la mise à jour de la catégorie:', error.message);
      }
    },
 
    async supprimerCategorie(categorieId) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
        try {
          const response = await fetch(`http://localhost/api/categories/${categorieId}`, {
            method: 'DELETE',
          });
 
          if (!response.ok) {
            throw new Error(`Erreur lors de la suppression de la catégorie: ${response.status}`);
          }
 
          // Mettez à jour la liste des catégories après la suppression
          this.categories = this.categories.filter((categorie) => categorie.id !== categorieId);
        } catch (error) {
          console.error('Erreur lors de la suppression de la catégorie:', error.message);
        }
      }
    },
    },
  };
  </script>
  
  <style >
  /* Ajoutez des styles CSS spécifiques au besoin */
  
  th {
    padding : 10px;
    margin: 500px;

  }
  </style>
  