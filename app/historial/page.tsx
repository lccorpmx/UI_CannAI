import React from 'react'
import Header from '@/components/Header'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { GrDocumentUser } from "react-icons/gr";
import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function page() {
  return (
    <div>
        <Header></Header>
        <h2 className='pl-8 pt-8 text-2xl text-green-400'>Recetas de Arturo Zilli</h2>
        <div className='pl-8 pt-2 pr-8'>
        <Alert>
            <GrDocumentUser className='w-4 h-4'/>
            <AlertTitle className='text-xl'>Arturo Zilli <span className='text-green-400 text-lg'><br />12/enero/2024</span></AlertTitle>
            <AlertDescription>
              <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Cepa: Chocolope</AccordionTrigger>
                  <AccordionContent>
                  <div className="grid grid-cols-2 gap-2 p-4">
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Limonene</span>
                                                        <span>10</span>
                                                        </div>
                                                        <Progress value={10} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>BetaOcimene</span>
                                                        <span>9</span>
                                                        </div>
                                                        <Progress value={9} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>BetaMyrcene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>BetaPinene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>

                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>AlphaPinene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Caryophyllene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Camphene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Carene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>AlphaTerpinene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Ocimene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Cymene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Eucalyptol</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>GammaTerpinene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Terpinolene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Isopulegol</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Geraniol</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Humulene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>TransNerolidol1</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>TransNerolidol2</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Guaiol</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>CaryophylleneOxide</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>AlphaBisabolol</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>BetaCaryophyllene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>AlphaHumulene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>PCymene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>CisNerolidol</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>TransNerolidol</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>TransOcimene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={1} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Terpinene</span>
                                                        <span>1</span>
                                                        </div>
                                                        <Progress value={10} />
                                                        </div>
                </div>
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
            <p className='pt-2'>
              Consumir 1.2g de Flor a 200C en vaporizador Fenix antes de dormir, al despertar 4 Gotas de CBD 500MG BeeHealthy, pasando el medio dia consumir uma gomita FullSpectrum BeeGummies BeeHigh.
            </p>
              </div>
            </AlertDescription>
            <div>
            <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

            </div>
        </Alert>
        </div>
    </div>
  )
}
