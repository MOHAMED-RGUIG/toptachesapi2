import React, { useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios"; // Import axios for HTTP requests

export function AddTask() {
  const [TSKTYP, setTSKTYP] = useState("");
  const [TSKACT, setTSKACT] = useState("");
  const [DATDEB, setDATDEB] = useState("");
  const [HURDEB, setHURDEB] = useState("");
  const [HURFIN, setHURFIN] = useState("");
  const [CLI, setCLI] = useState("");
  const [NOMCLI, setNOMCLI] = useState("");
  const [CATCLI, setCATCLI] = useState("");
  const [ADRCLI, setADRCLI] = useState("");
  const [NOMCNT, setNOMCNT] = useState("");
  const [FNCCNT, setFNCCNT] = useState("");
  const [TELCNT, setTELCNT] = useState("");
  const [TSKOBJ, setTSKOBJ] = useState("");
  const [TSKCMR, setTSKCMR] = useState("");
  const [TSKSTA, setTSKSTA] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to be sent to the backend
    const newTask = {
      TSKTYP,
      TSKACT,
      DATDEB,
      HURDEB,
      HURFIN,
      CLI,
      NOMCLI,
      CATCLI,
      ADRCLI,
      NOMCNT,
      FNCCNT,
      TELCNT,
      TSKOBJ,
      TSKCMR,
      TSKSTA,
    };

    try {
      // Send data to the backend using a POST request
      const response = await axios.post("http://localhost:3000/addtask/tasks", newTask, {
        headers: {
          usr: localStorage.getItem("loggedInUser"), // Assuming user is stored in localStorage
        },
      });

      // Handle the response from the server
      if (response.data.success) {
        setSuccessMessage("La tâche ajoutée avec succès");
        setShowSuccess(true);
        let counter = 0;
        const interval = setInterval(() => {
          counter += 10;
          setProgress(counter);
          if (counter === 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowSuccess(false);
              setProgress(0);
            }, 500); // hide after half a second delay for smooth transition
          }
        }, 500); // update every half second to fill in 5 seconds total
      }
      // Reset the form after submission
      setTSKTYP("");
      setTSKACT("");
      setDATDEB("");
      setHURDEB("");
      setHURFIN("");
      setCLI("");
      setNOMCLI("");
      setCATCLI("");
      setADRCLI("");
      setNOMCNT("");
      setFNCCNT("");
      setTELCNT("");
      setTSKOBJ("");
      setTSKCMR("");
      setTSKSTA("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="mt-12">
      <div className="flex justify-center items-center mb-6">
        <Card className="w-full max-w-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <CardHeader floated={false} shadow={false} color="transparent" className="m-0 p-6">
            <Typography variant="h6" color="blue-gray" className="mb-1 text-center">
              Ajouter une tâche
            </Typography>
          </CardHeader>
          <CardBody className="flex justify-center bg-white p-4 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Type de tâche */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Type de tâche</Typography>
                <Select value={TSKTYP} onChange={(e) => setTSKTYP(e)}>
                  <Option value="Réunion Commercial">Réunion Commercial</Option>
                  <Option value="Visite Client">Visite Client</Option>
                  <Option value="Prospection">Prospection</Option>
                  <Option value="Recouvrement">Recouvrement</Option>
                  <Option value="Formation">Formation</Option>
                  <Option value="Séminaire">Séminaire</Option>
                  <Option value="Salon">Salon</Option>
                  <Option value="Règlement de litiges">Règlement de litiges</Option>
                </Select>
              </div>

              {/* Action de la tâche */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Action de la tâche</Typography>
                <Select value={TSKACT} onChange={(e) => setTSKACT(e)}>
                  <Option value="Action 1">Action 1</Option>
                  <Option value="Action 2">Action 2</Option>
                  <Option value="Action 3">Action 3</Option>
                </Select>
              </div>

              {/* Date de début */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Date de début</Typography>
                <Input
                  type="date"
                  value={DATDEB}
                  onChange={(e) => setDATDEB(e.target.value)}
                />
              </div>

              {/* Heure de début */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Heure de début</Typography>
                <Input
                  type="time"
                  value={HURDEB}
                  onChange={(e) => setHURDEB(e.target.value)}
                />
              </div>

              {/* Heure de fin */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Heure de fin</Typography>
                <Input
                  type="time"
                  value={HURFIN}
                  onChange={(e) => setHURFIN(e.target.value)}
                />
              </div>

              {/* Code Client */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Code Client</Typography>
                <Input
                  type="text"
                  placeholder="CLI123"
                  value={CLI}
                  onChange={(e) => setCLI(e.target.value)}
                />
              </div>

              {/* Nom de client */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Nom de client</Typography>
                <Input
                  type="text"
                  placeholder="Nom du client"
                  value={NOMCLI}
                  onChange={(e) => setNOMCLI(e.target.value)}
                />
              </div>

              {/* Catégorie */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Catégorie</Typography>
                <Select value={CATCLI} onChange={(e) => setCATCLI(e)}>
                  <Option value="Categorie 1">Categorie 1</Option>
                  <Option value="Categorie 2">Categorie 2</Option>
                  <Option value="Categorie 3">Categorie 3</Option>
                </Select>
              </div>

              {/* Adresse du client */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Adresse de client</Typography>
                <Input
                  type="text"
                  placeholder="Adresse"
                  value={ADRCLI}
                  onChange={(e) => setADRCLI(e.target.value)}
                />
              </div>

              {/* Nom de contact */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Nom de contact</Typography>
                <Input
                  type="text"
                  placeholder="Nom du contact"
                  value={NOMCNT}
                  onChange={(e) => setNOMCNT(e.target.value)}
                />
              </div>

              {/* Fonction du client */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Fonction du client</Typography>
                <Select value={FNCCNT} onChange={(e) => setFNCCNT(e)}>
                  <Option value="P.D.G">P.D.G</Option>
                  <Option value="Directeur Commercial">Directeur Commercial</Option>
                  <Option value="Directeur Technique">Directeur Technique</Option>
                  <Option value="Responsable des achats">Responsable des achats</Option>
                  <Option value="Acheteur">Acheteur</Option>
                  <Option value="Responsable de stock">Responsable de stock</Option>
                  <Option value="Directeur financier et juridique">Directeur financier et juridique</Option>
                  <Option value="Responsable Import/Export">Responsable Import/Export</Option>
                  <Option value="Directeur de site">Directeur de site</Option>
                  <Option value="Intervenant de site">Intervenant de site</Option>
                </Select>
              </div>

              {/* Téléphone */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Téléphone</Typography>
                <Input
                  type="text"
                  placeholder="Numéro de téléphone"
                  value={TELCNT}
                  onChange={(e) => setTELCNT(e.target.value)}
                />
              </div>

              {/* Objet de la tâche */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Objet de la tâche</Typography>
                <Input
                  type="text"
                  placeholder="Description de la tâche"
                  value={TSKOBJ}
                  onChange={(e) => setTSKOBJ(e.target.value)}
                />
              </div>

              {/* Compte rendu */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Compte rendu</Typography>
                <Input
                  type="textarea"
                  placeholder="Compte rendu"
                  value={TSKCMR}
                  onChange={(e) => setTSKCMR(e.target.value)}
                />
              </div>

              {/* Statut */}
              <div>
                <Typography variant="small" color="blue-gray" className="mb-1">Statut</Typography>
                <Select value={TSKSTA} onChange={(e) => setTSKSTA(e)}>
                  <Option value="Réalisé">Réalisé</Option>
                  <Option value="À faire">À faire</Option>
                </Select>
              </div>

              <Button type="submit" className="mt-4" fullWidth>
                Ajouter la tâche
              </Button>
              {showSuccess && (
                <div className="mt-2">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-blue-200">
                      <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-width duration-500"></div>
                    </div>
                    <Typography color="blue" className="text-center">{successMessage}</Typography>
                  </div>
                </div>
              )}
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AddTask;
