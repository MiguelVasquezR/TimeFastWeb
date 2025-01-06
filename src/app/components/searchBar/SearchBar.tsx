import axios from "axios";
import Button from "../form/button/Button";
import TextField from "../form/textField/TextField";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import Logo from '../../utils/logo.png'

interface SearchBarProps {
  setDataEnvio: (data: any) => void;
  setIsError: (isError: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setNumGuia: (numGuia: string) => void;
  numGuia: string;
}

const SearchBar = ({
  numGuia,
  setIsError,
  setDataEnvio,
  setIsLoading,
  setNumGuia,
}: SearchBarProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.value === "") {
      setIsError(false);
    } else if (e?.target?.value !== "") {
      setNumGuia(e?.target?.value);
    }
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(
        `http://201.153.208.50:8080/time-fast-api/api/envios/consultar/${numGuia}`
      )
      .then((response) => {
        const jsonWS = JSON.parse(response.data.objeto.value);
        setDataEnvio(jsonWS);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full row-start-1 px-5 flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-center items-center gap-5 text-black">
          <TextField
            placeholder="Buscar por número de envío"
            type="text"
            Icon={IoSearch}
            isIcon={true}
            label=""
            onChange={onChange}
          />
          <Button
            onClick={handleSearch}
            isLoading={false}
            textButton="Buscar"
            isIcon={false}
          />
        </div>


        <Image src={Logo} alt="Logo" width={120} height={120}  className="rounded-md"/>
      </div>

      <hr className="bg-white w-full my-5" />
    </div>
  );
};

export default SearchBar;
