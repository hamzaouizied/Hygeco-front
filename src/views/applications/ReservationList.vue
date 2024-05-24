<script setup>
import { onMounted } from "vue";
import { DataTable } from "simple-datatables";

onMounted(() => {
    new DataTable("#datatable-search", {
        searchable: true,
        fixedHeight: true,
    });
});
</script>
<template>
    <div class="py-4 container-fluid">
      
        <div class="mt-4 row">
            <div class="col-12">
                <div class="card">
                    <!-- Card header -->
                    <div class="card-header">
                        <h5 class="mb-0">List de Reservations</h5>
                        
                    </div>
                    <div class="table-responsive">
                        <table id="datatable-search" class="table table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th>Numéro de Réservation</th>
                                    <th>Nom du Client</th>
                                    <th>Service Réservé</th>
                                    <th>Date de la Réservation</th>
                                    <th>Date du Service</th>
                                    <th>Heure du Service</th>
                                    <th>Instructions Spécifiques</th>
                                    <th>Statut de la Réservation</th>
                                    <th>Confirmation</th>
                                    <th>Moyen de Communication</th>
                                    <th>Notes de l'Équipe de Gestion</th>
                                    <th>Type de Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-sm font-weight-normal">001</td>
                                    <td class="text-sm font-weight-normal">Jean Dupont</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">01/05/2024</td>
                                    <td class="text-sm font-weight-normal">05/05/2024</td>
                                    <td class="text-sm font-weight-normal">10:00</td>
                                    <td class="text-sm font-weight-normal">Utiliser un détergent doux</td>
                                    <td class="text-sm font-weight-normal">En attente </td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Vérifier l'adresse</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">002</td>
                                    <td class="text-sm font-weight-normal">Marie Durant</td>
                                    <td class="text-sm font-weight-normal">Buanderie</td>
                                    <td class="text-sm font-weight-normal">02/05/2024</td>
                                    <td class="text-sm font-weight-normal">06/05/2024</td>
                                    <td class="text-sm font-weight-normal">11:00</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Confirmée </td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Aucun</td>
                                    <td class="text-sm font-weight-normal">Service Buanderie</td>
                                </tr>

                                <tr>
                                    <td class="text-sm font-weight-normal">003</td>
                                    <td class="text-sm font-weight-normal">Marie Durant</td>
                                    <td class="text-sm font-weight-normal">Buanderie</td>
                                    <td class="text-sm font-weight-normal">02/05/2024</td>
                                    <td class="text-sm font-weight-normal">06/05/2024</td>
                                    <td class="text-sm font-weight-normal">11:00</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Aucun</td>
                                    <td class="text-sm font-weight-normal">Service sans confirmation</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">004</td>
                                    <td class="text-sm font-weight-normal">Luc Martin</td>
                                    <td class="text-sm font-weight-normal">Repassage</td>
                                    <td class="text-sm font-weight-normal">03/05/2024</td>
                                    <td class="text-sm font-weight-normal">07/05/2024</td>
                                    <td class="text-sm font-weight-normal">09:00</td>
                                    <td class="text-sm font-weight-normal">Chemises uniquement</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Vérifier taille des chemises</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">005</td>
                                    <td class="text-sm font-weight-normal">Anaïs Petit</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">04/05/2024</td>
                                    <td class="text-sm font-weight-normal">08/05/2024</td>
                                    <td class="text-sm font-weight-normal">13:00</td>
                                    <td class="text-sm font-weight-normal">Nettoyer les taches de vin</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">Oui</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Prendre des précautions</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">006</td>
                                    <td class="text-sm font-weight-normal">Olivier Bernard</td>
                                    <td class="text-sm font-weight-normal">Lavage</td>
                                    <td class="text-sm font-weight-normal">05/05/2024</td>
                                    <td class="text-sm font-weight-normal">09/05/2024</td>
                                    <td class="text-sm font-weight-normal">12:00</td>
                                    <td class="text-sm font-weight-normal">Utiliser assouplissant</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Confirmer allergie</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">007</td>
                                    <td class="text-sm font-weight-normal">Sophie Lefèvre</td>
                                    <td class="text-sm font-weight-normal">Buanderie</td>
                                    <td class="text-sm font-weight-normal">06/05/2024</td>
                                    <td class="text-sm font-weight-normal">10/05/2024</td>
                                    <td class="text-sm font-weight-normal">14:00</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Aucun</td>
                                    <td class="text-sm font-weight-normal">Service sans confirmation</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">008</td>
                                    <td class="text-sm font-weight-normal">Pierre Moreau</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">07/05/2024</td>
                                    <td class="text-sm font-weight-normal">11/05/2024</td>
                                    <td class="text-sm font-weight-normal">15:00</td>
                                    <td class="text-sm font-weight-normal">Nettoyer les costumes</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Vérifier boutons</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">009</td>
                                    <td class="text-sm font-weight-normal">Nathalie Roche</td>
                                    <td class="text-sm font-weight-normal">Repassage</td>
                                    <td class="text-sm font-weight-normal">08/05/2024</td>
                                    <td class="text-sm font-weight-normal">12/05/2024</td>
                                    <td class="text-sm font-weight-normal">16:00</td>
                                    <td class="text-sm font-weight-normal">Soie uniquement</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">Oui</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Test de chaleur</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">010</td>
                                    <td class="text-sm font-weight-normal">Lucas Martin</td>
                                    <td class="text-sm font-weight-normal">Lavage</td>
                                    <td class="text-sm font-weight-normal">09/05/2024</td>
                                    <td class="text-sm font-weight-normal">13/05/2024</td>
                                    <td class="text-sm font-weight-normal">17:00</td>
                                    <td class="text-sm font-weight-normal">Pas d'eau de javel</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Vérifier taches</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">011</td>
                                    <td class="text-sm font-weight-normal">Isabelle Dupuis</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">10/05/2024</td>
                                    <td class="text-sm font-weight-normal">14/05/2024</td>
                                    <td class="text-sm font-weight-normal">09:30</td>
                                    <td class="text-sm font-weight-normal">Nettoyer taches de graisse</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">Oui</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Utiliser dégraissant spécial</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">012</td>
                                    <td class="text-sm font-weight-normal">Thomas Lefebvre</td>
                                    <td class="text-sm font-weight-normal">Buanderie</td>
                                    <td class="text-sm font-weight-normal">11/05/2024</td>
                                    <td class="text-sm font-weight-normal">15/05/2024</td>
                                    <td class="text-sm font-weight-normal">10:30</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Aucun</td>
                                    <td class="text-sm font-weight-normal">Service sans confirmation</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">002</td>
                                    <td class="text-sm font-weight-normal">Jean Dupont</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">01/05/2024</td>
                                    <td class="text-sm font-weight-normal">05/05/2024</td>
                                    <td class="text-sm font-weight-normal">10:00</td>
                                    <td class="text-sm font-weight-normal">Utiliser un détergent doux</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Vérifier l'adresse</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">003</td>
                                    <td class="text-sm font-weight-normal">Marie Durant</td>
                                    <td class="text-sm font-weight-normal">Buanderie</td>
                                    <td class="text-sm font-weight-normal">02/05/2024</td>
                                    <td class="text-sm font-weight-normal">06/05/2024</td>
                                    <td class="text-sm font-weight-normal">11:00</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Aucun</td>
                                    <td class="text-sm font-weight-normal">Service sans confirmation</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">004</td>
                                    <td class="text-sm font-weight-normal">Luc Martin</td>
                                    <td class="text-sm font-weight-normal">Repassage</td>
                                    <td class="text-sm font-weight-normal">03/05/2024</td>
                                    <td class="text-sm font-weight-normal">07/05/2024</td>
                                    <td class="text-sm font-weight-normal">09:00</td>
                                    <td class="text-sm font-weight-normal">Chemises uniquement</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Vérifier taille des chemises</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">005</td>
                                    <td class="text-sm font-weight-normal">Anaïs Petit</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">04/05/2024</td>
                                    <td class="text-sm font-weight-normal">08/05/2024</td>
                                    <td class="text-sm font-weight-normal">13:00</td>
                                    <td class="text-sm font-weight-normal">Nettoyer les taches de vin</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">Oui</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Prendre des précautions</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">006</td>
                                    <td class="text-sm font-weight-normal">Olivier Bernard</td>
                                    <td class="text-sm font-weight-normal">Lavage</td>
                                    <td class="text-sm font-weight-normal">05/05/2024</td>
                                    <td class="text-sm font-weight-normal">09/05/2024</td>
                                    <td class="text-sm font-weight-normal">12:00</td>
                                    <td class="text-sm font-weight-normal">Utiliser assouplissant</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Confirmer allergie</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">007</td>
                                    <td class="text-sm font-weight-normal">Sophie Lefèvre</td>
                                    <td class="text-sm font-weight-normal">Buanderie</td>
                                    <td class="text-sm font-weight-normal">06/05/2024</td>
                                    <td class="text-sm font-weight-normal">10/05/2024</td>
                                    <td class="text-sm font-weight-normal">14:00</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Aucun</td>
                                    <td class="text-sm font-weight-normal">Service sans confirmation</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">008</td>
                                    <td class="text-sm font-weight-normal">Pierre Moreau</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">07/05/2024</td>
                                    <td class="text-sm font-weight-normal">11/05/2024</td>
                                    <td class="text-sm font-weight-normal">15:00</td>
                                    <td class="text-sm font-weight-normal">Nettoyer les costumes</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Vérifier boutons</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">009</td>
                                    <td class="text-sm font-weight-normal">Nathalie Roche</td>
                                    <td class="text-sm font-weight-normal">Repassage</td>
                                    <td class="text-sm font-weight-normal">08/05/2024</td>
                                    <td class="text-sm font-weight-normal">12/05/2024</td>
                                    <td class="text-sm font-weight-normal">16:00</td>
                                    <td class="text-sm font-weight-normal">Soie uniquement</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">Oui</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Test de chaleur</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">010</td>
                                    <td class="text-sm font-weight-normal">Lucas Martin</td>
                                    <td class="text-sm font-weight-normal">Lavage</td>
                                    <td class="text-sm font-weight-normal">09/05/2024</td>
                                    <td class="text-sm font-weight-normal">13/05/2024</td>
                                    <td class="text-sm font-weight-normal">17:00</td>
                                    <td class="text-sm font-weight-normal">Pas d'eau de javel</td>
                                    <td class="text-sm font-weight-normal">En attente</td>
                                    <td class="text-sm font-weight-normal">Non</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Vérifier taches</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">011</td>
                                    <td class="text-sm font-weight-normal">Isabelle Dupuis</td>
                                    <td class="text-sm font-weight-normal">Nettoyage à sec</td>
                                    <td class="text-sm font-weight-normal">10/05/2024</td>
                                    <td class="text-sm font-weight-normal">14/05/2024</td>
                                    <td class="text-sm font-weight-normal">09:30</td>
                                    <td class="text-sm font-weight-normal">Nettoyer taches de graisse</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">Oui</td>
                                    <td class="text-sm font-weight-normal">Email</td>
                                    <td class="text-sm font-weight-normal">Utiliser dégraissant spécial</td>
                                    <td class="text-sm font-weight-normal">Service régulier</td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal">012</td>
                                    <td class="text-sm font-weight-normal">Thomas Lefebvre</td>
                                    <td class="text-sm font-weight-normal">Buanderie</td>
                                    <td class="text-sm font-weight-normal">11/05/2024</td>
                                    <td class="text-sm font-weight-normal">15/05/2024</td>
                                    <td class="text-sm font-weight-normal">10:30</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Confirmée</td>
                                    <td class="text-sm font-weight-normal">N/A</td>
                                    <td class="text-sm font-weight-normal">Téléphone</td>
                                    <td class="text-sm font-weight-normal">Aucun</td>
                                    <td class="text-sm font-weight-normal">Service sans confirmation</td>
                                </tr>









                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
