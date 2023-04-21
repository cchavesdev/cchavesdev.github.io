//Post as components
import { SecretKeys } from "../react/secretKeys/SecretKeys";
import { Typescript } from "../react/typescript/Typescript";
import { NamingConventions } from "../react/namingConventions/NamingConventions";
import { Cors } from "../dotnet/cors/Cors";
import { LoadJsonFile } from "../react/loadJsonFile/LoadJsonFile";
import { Router } from "../react/router/Router";

export const PostViewer = ({ postUrl }) => {
  let component;
  console.log(postUrl);
  switch (postUrl) {
    case "naming-conventions":
      component = <NamingConventions />;
      break;
    case "typescript":
      component = <Typescript />;
      break;
    case "secret-keys":
      component = <SecretKeys />;
      break;
    case "allow-cors":
      component = <Cors />;
      break;
    case "load-data-from-json-file":
      component = <LoadJsonFile />;
      break;
    case "react-router":
      component = <Router />;
      break;
      

    default:
      component = <div>Not found</div>;
      break;
  }
  return <div>{component}</div>;
};
