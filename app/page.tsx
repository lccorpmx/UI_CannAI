import Image from "next/image";
import Header from "@/components/Header";
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BsMenuUp } from "react-icons/bs";
export default function Home() {
  return (
    <div>
        <Header></Header>
        <div className='p-20'>
        <Table>
            <TableCaption className='text-green-400'>Esta es tu lista de pacientes.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px] text-green-400 font-bold">Nombre</TableHead>
                <TableHead className='text-green-400 font-bold'>Edad</TableHead>
                <TableHead className='text-green-400 font-bold'>Descripcion</TableHead>
                <TableHead className="text-right"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium text-xl">Arturo</TableCell>
                <TableCell className='text-xl'>22</TableCell>
                <TableCell className='text-xl'>Problemas de ansiedad y depresion, mucha fatiga.</TableCell>
                <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger><BsMenuUp className='text-lg text-green-400'/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Seleccione</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href="/panelPaciente/1">
                            <DropdownMenuItem>Nueva Prediccion</DropdownMenuItem>
                        </Link>
                        <Link href="/historial">
                            <DropdownMenuItem>Historial</DropdownMenuItem>
                        </Link>                    </DropdownMenuContent>
                </DropdownMenu>
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium text-xl">Oscar</TableCell>
                <TableCell className='text-xl'>45</TableCell>
                <TableCell className='text-xl'>Fibromialgia aguda</TableCell>
                <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger><BsMenuUp className='text-lg text-green-400'/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Seleccione</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href="/panelPaciente/2">
                            <DropdownMenuItem>Nueva Prediccion</DropdownMenuItem>
                        </Link>
                        <Link href="/historial">
                            <DropdownMenuItem>Historial</DropdownMenuItem>
                        </Link>                    </DropdownMenuContent>
                </DropdownMenu>
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>
    </div>
  );
}
