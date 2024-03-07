import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { ListInspection } from './infrastructure/components/page/inspection/ListInspection';
import { AddInspection } from './infrastructure/components/page/inspection/AddInspection';
import { AppLayout } from './infrastructure/components/layout/AppLayout';
import { EditInspection } from './infrastructure/components/page/inspection/EditInspection';
import { ListPerson } from './infrastructure/components/page/person/ListPerson';
import { InfoInspector } from './infrastructure/components/page/inspector/InfoInspector';
import { ProviderMyInfo } from './infrastructure/components/context/ctxMyInfo';
import { ProviderInspection } from './infrastructure/components/context/ctxInspection';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout >
        <div className='h-[100vh] w-full flex gap-2 flex-col justify-center items-center'>
          <div className='w-auto'>
            <h1 className="text-lg font-bold ">Registros</h1>
          </div>
          <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
            <li>
              <Link to={"inspecciones"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Inspecciones
              </Link>
            </li>
            <li>
              <Link to={"personas"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Personas
              </Link>
            </li>
            <li>
              <Link to={"myInfo"}>
                Inspector
              </Link>
            </li>
          </ul>
        </div>

      </AppLayout>
    ),

  },
  {
    path: "inspecciones",
    element: <ListInspection />,
  },
  {

    path: "inspecciones/agregar",
    element: <AddInspection />
  },
  {
    path: "inspecciones/editar/:id",
    element: <EditInspection />
  },
  {
    path: "personas",
    element: <ListPerson />,
  },
  {

    path: "personas/agregar",
    element: <AddInspection />
  },
  {
    path: "personas/editar/:id",
    element: <EditInspection />
  },
  {
    path: "myInfo",
    element: <InfoInspector />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProviderMyInfo>
    <ProviderInspection>
      <RouterProvider router={router} />
    </ProviderInspection>
  </ProviderMyInfo>
)

