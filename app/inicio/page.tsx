import React from 'react'
import Header from '@/components/Header'
import Link from 'next/link';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
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
export default function Inicio() {
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
                <TableCell className='text-xl'>Control del estres, control de la ansiedad.</TableCell>
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
            </TableBody>
        </Table>
        </div>
    </div>
  )
}
