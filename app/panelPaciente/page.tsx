'use client'

import React, { useEffect, useState } from 'react'
import { API_URL } from '@/config/config'
import { toast } from "sonner"
import Image from "next/image";
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import PDF from "@/components/pdf"
import { PDFDownloadLink } from '@react-pdf/renderer';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Header from '@/components/Header';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function PanelPaciente({ params }: { params: { id: string } }) {
    const [feeling_relaxed, setRelaxed] = useState(0);
    const [feeling_happy, setHappy] = useState(0);
    const [feeling_euphoric, setEuphoric] = useState(0);
    const [feeling_uplifted, setUplifted] = useState(0);
    const [feeling_sleepy, setSleepy] = useState(0);
    const [feeling_hungry, setHungry] = useState(0);
    const [feeling_talkative, setTalkative] = useState(0);
    const [feeling_creative, setCreative] = useState(0);
    const [feeling_energetic, setEnergetic] = useState(0);
    const [feeling_focused, setFocused] = useState(0);
    const [feeling_giggly, setGiggly] = useState(0);
    const [feeling_aroused, setAroused] = useState(0);
    const [helps_stress, setStress] = useState(0);
    const [helps_pain, setPain] = useState(0);
    const [helps_depression, setDepression] = useState(0);
    const [helps_anxiety, setAnxiety] = useState(0);
    const [helps_insomnia, setInsomnia] = useState(0);
    const [helps_headache, setHeadache] = useState(0);
    const [helps_ptsd, setPtsd] = useState(0);
    const [helps_fatigue, setFatigue] = useState(0);
    const [helps_lackofappetite, setLackofappetite] = useState(0);
    const [helps_nausea, setNausea] = useState(0);
    const [helps_headaches, setHeadaches] = useState(0);
    const [helps_bipolar_disorder, setBipolarDisorder] = useState(0);
    const [helps_cancer, setCancer] = useState(0);
    const [helps_tingly, setTingly] = useState(0);
    const [helps_cramps, setCramps] = useState(0);
    const [helps_gastrointestinaldisorder, setGastrointestinaldisorder] = useState(0);
    const [helps_inflammation, setInflammation] = useState(0);
    const [helps_musclespasms, setMusclespasms] = useState(0);
    const [helps_eye_pressure, setEyePressure] = useState(0);
    const [helps_migraines, setMigraines] = useState(0);
    const [helps_asthma, setAsthma] = useState(0);
    const [helps_anorexia, setAnorexia] = useState(0);
    const [helps_arthritis, setArthritis] = useState(0);
    const [helps_add_adhd, setAddAdhd] = useState(0);
    const [helps_musculardystrophy, setMusculardystrophy] = useState(0);
    const [helps_hypertension, setHypertension] = useState(0);
    const [helps_glaucoma, setGlaucoma] = useState(0);
    const [helps_pms, setPms] = useState(0);
    const [helps_seizures, setSeizures] = useState(0);
    const [helps_spasticity, setSpasticity] = useState(0);
    const [helps_spinalcordinjury, setSpinalcordinjury] = useState(0);
    const [helps_fibromyalgia, setFibromyalgia] = useState(0);
    const [helps_crohn_s_disease, setCrohnSDisease] = useState(0);
    const [helps_phantomlimbpain, setPhantomlimbpain] = useState(0);
    const [helps_epilepsy, setEpilepsy] = useState(0);
    const [helps_multiplesclerosis, setMultiplesclerosis] = useState(0);
    const [helps_parkinson_s, setParkinsonS] = useState(0);
    const [helps_tourette_ssyndrome, setTouretteSsyndrome] = useState(0);
    const [helps_alzheimer_s, setAlzheimerS] = useState(0);
    const [helps_hiv_aids, setHivAids] = useState(0);
    const [helps_tinnitus, setTinnitus] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, []);

    const handleRelaxedChange = (newValue: number[]) => {
        setRelaxed(newValue.shift() as number);
    };

    const handleHappyChange = (newValue: number[]) => {
        setHappy(newValue.shift() as number);
    };

    const handleEuphoricChange = (newValue: number[]) => {
        setEuphoric(newValue.shift() as number);
    };

    const handleUpliftedChange = (newValue: number[]) => {
        setUplifted(newValue.shift() as number);
    };

    const handleSleepyChange = (newValue: number[]) => {
        setSleepy(newValue.shift() as number);
    };

    const handleHungryChange = (newValue: number[]) => {
        setHungry(newValue.shift() as number);
    };

    const handleTalkativeChange = (newValue: number[]) => {
        setTalkative(newValue.shift() as number);
    };

    const handleCreativeChange = (newValue: number[]) => {
        setCreative(newValue.shift() as number);
    };

    const handleEnergeticChange = (newValue: number[]) => {
        setEnergetic(newValue.shift() as number);
    };

    const handleFocusedChange = (newValue: number[]) => {
        setFocused(newValue.shift() as number);
    };

    const handleGigglyChange = (newValue: number[]) => {
        setGiggly(newValue.shift() as number);
    };

    const handleArousedChange = (newValue: number[]) => {
        setAroused(newValue.shift() as number);
    };



    const [selectedCepa, setSelectedCepa] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [guia, setGuia] = useState('');
    const [padecimiento, setPadecimiento] = useState('');
    const [dosis, setDosis] = useState('');




    const handleCepaChange = (value: string) => {
        setSelectedCepa(value);
    };

    const handleDescripcionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescripcion(event.target.value);
    };

    const handleNombreChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNombre(event.target.value);
    };

    const handleEdadChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEdad(event.target.value);
    };

    const handleTelefonoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTelefono(event.target.value);
    };

    const handleGuiaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGuia(event.target.value);
    };

    const handlePadecimientoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPadecimiento(event.target.value);
    };

    const handleDosisChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDosis(event.target.value);
    };

    const [cepasCercanas, setCepasCercanas] = useState<any[]>([]);
    const [estadoPrediccion, setEstadoPrediccion] = useState("");


    const handlePrediction = async () => {
        // Construye el objeto de datos a enviar a la API
        const requestData = {
            preferencias_usuario_perfil: {
                feeling_relaxed,
                feeling_happy,
                feeling_euphoric,
                feeling_uplifted,
                feeling_sleepy,
                feeling_hungry,
                feeling_talkative,
                feeling_creative,
                feeling_energetic,
                feeling_focused,
                feeling_giggly,
                feeling_aroused,
            },
            preferencias_usuario_cepa: {
                helps_stress,
                helps_pain,
                helps_depression,
                helps_anxiety,
                helps_insomnia,
                helps_headache,
                helps_ptsd,
                helps_fatigue,
                helps_lackofappetite,
                helps_nausea,
                helps_headaches,
                helps_bipolar_disorder,
                helps_cancer,
                helps_tingly,
                helps_cramps,
                helps_gastrointestinaldisorder,
                helps_inflammation,
                helps_musclespasms,
                helps_eye_pressure,
                helps_migraines,
                helps_asthma,
                helps_anorexia,
                helps_arthritis,
                helps_add_adhd,
                helps_musculardystrophy,
                helps_hypertension,
                helps_glaucoma,
                helps_pms,
                helps_seizures,
                helps_spasticity,
                helps_spinalcordinjury,
                helps_fibromyalgia,
                helps_crohn_s_disease,
                helps_phantomlimbpain,
                helps_epilepsy,
                helps_multiplesclerosis,
                helps_parkinson_s,
                helps_tourette_ssyndrome,
                helps_alzheimer_s,
                helps_hiv_aids,
                helps_tinnitus
            },
        };

        let flagFeelings = 0
        let flagHelps = 0

        for (const key in requestData.preferencias_usuario_perfil) {
            if (Object.prototype.hasOwnProperty.call(requestData.preferencias_usuario_perfil, key)) {
                const element = requestData.preferencias_usuario_perfil[key as keyof typeof requestData.preferencias_usuario_perfil];
                if (element > 0) {
                    flagFeelings = flagFeelings + 1
                }
            }
        }

        // VALIDAR QUE SOLO SELECCIONE MAS 3 SLIDES PERO MENOS DE 6 (TRATAMIENTOS)
        for (const key in requestData.preferencias_usuario_cepa) {
            if (Object.prototype.hasOwnProperty.call(requestData.preferencias_usuario_cepa, key)) {
                const element = requestData.preferencias_usuario_cepa[key as keyof typeof requestData.preferencias_usuario_cepa];
                console.log(key)

                if (element > 0) {
                    flagHelps = flagHelps + 1
                }
            }
        }

        if(flagFeelings >= 3 && flagFeelings <= 6){
            if(flagHelps >= 1 && flagHelps <= 3){
                try {
                    const response = await fetch(`${API_URL}`, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestData),
                    })
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data)
                        setTimeout(() => {
                            setCepasCercanas(data["Cepa"]);
                            setEstadoPrediccion(data.mensaje)
                            toast("Predicción Realizada")
                        }, 1500);
                    } else {
                        // Maneja errores en la respuesta
                        console.error('Error en la respuesta de la API:', response.statusText);
                    }
                } catch (error) {
                    // Maneja errores en la conexión o solicitud
                    toast("Ocurrio un Error")
                }
            }else{
                if(flagHelps>3){
                    toast("Elige maximo 3 Helps")
                }
                if(flagHelps<1){
                    toast("Elige almenos 1 Help")
                }
            }
        }else{
            if(flagFeelings>6){
                toast("Elige maximo 6 Feelings")
            }
            if(flagFeelings<3){
                toast("Elige almenos 3 Feelings")
            }
        }

    };


    return (
        <div>
            <Header></Header>
            <div className='p-16'>
                <div className='flex gap-6'>
                    <span className='text-2xl'>CannAI</span>
                </div>

                <div>
                    <ResizablePanelGroup direction="horizontal" className='border border-black-2 p-4'>
                        <ResizablePanel>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <span className='text-xl text-green-400 font-bold'>Efectos:</span>
                                    <span className='text-xs font-extralight'>Utiliza los efectos esperados para enfocar tu busqueda en un perfil:</span>
                                    <div>
                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span className="">Relaxed</span>
                                            </div>
                                            <Slider
                                                value={[feeling_relaxed]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleRelaxedChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_relaxed}</span>
                                        </div>


                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Happy</span>
                                            </div>
                                            <Slider
                                                value={[feeling_happy]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleHappyChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_happy}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Euphoric</span>
                                            </div>
                                            <Slider
                                                value={[feeling_euphoric]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleEuphoricChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_euphoric}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Uplifted</span>
                                            </div>
                                            <Slider
                                                value={[feeling_uplifted]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleUpliftedChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_uplifted}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Sleepy</span>
                                            </div>
                                            <Slider
                                                value={[feeling_sleepy]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleSleepyChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_sleepy}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Hungry</span>
                                            </div>
                                            <Slider
                                                value={[feeling_hungry]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleHungryChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_hungry}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Talkative</span>
                                            </div>
                                            <Slider
                                                value={[feeling_talkative]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleTalkativeChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_talkative}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Creative</span>
                                            </div>
                                            <Slider
                                                value={[feeling_creative]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleCreativeChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_creative}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Energetic</span>
                                            </div>
                                            <Slider
                                                value={[feeling_energetic]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleEnergeticChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_energetic}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Focused</span>
                                            </div>
                                            <Slider
                                                value={[feeling_focused]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleFocusedChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_focused}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Giggly</span>
                                            </div>
                                            <Slider
                                                value={[feeling_giggly]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleGigglyChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_giggly}</span>
                                        </div>

                                        <div className="flex items-center p-2">
                                            <div className="flex flex-col items-center mr-2">
                                                <span>Aroused</span>
                                            </div>
                                            <Slider
                                                value={[feeling_aroused]}
                                                max={100}
                                                step={1}
                                                onValueChange={handleArousedChange}
                                                className="mr-2" />
                                            <span className="text-xl">{feeling_aroused}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            

                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <span className='text-xl text-green-400 font-bold pt-4'>Tratamientos:</span>
                                    <span className='text-xs font-extralight'>Selecciona las afecciones que tu paciente presenta:</span>
                                </div>
                                <div className='grid grid-cols-4 pl-4 pt-2 pb-2 p-2'>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_stress === 100 ? true : false} onChange={(e) => setStress(helps_stress === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Stress</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_pain === 100 ? true : false} onChange={(e) => setPain(helps_pain === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Pain</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_depression === 100 ? true : false} onChange={(e) => setDepression(helps_depression === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Depression</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_anxiety === 100 ? true : false} onChange={(e) => setAnxiety(helps_anxiety === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Anxiety</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_insomnia === 100 ? true : false} onChange={(e) => setInsomnia(helps_insomnia=== 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Insomnia</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_headache === 100 ? true : false} onChange={(e) => setHeadache(helps_headache === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Headache</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_ptsd === 100 ? true : false} onChange={(e) => setPtsd(helps_ptsd === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>PTSD</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_fatigue === 100 ? true : false} onChange={(e) => setFatigue(helps_fatigue === 100 ? 0 : 100)}/>
                                        <label htmlFor='checkbox'>Fatigue</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_lackofappetite === 100 ? true : false} onChange={(e) => setLackofappetite(helps_lackofappetite === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Lack of Apetitte</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_nausea === 100 ? true : false} onChange={(e) => setNausea(helps_nausea === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Nausea</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_headaches === 100 ? true : false} onChange={(e) => setHeadaches(helps_headaches === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Headaches</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_bipolar_disorder === 100 ? true : false} onChange={(e) => setBipolarDisorder(helps_bipolar_disorder === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Bipolar Disorder</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_cancer === 100 ? true : false} onChange={(e) => setCancer(helps_cancer === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Cancer</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_tingly === 100 ? true : false} onChange={(e) => setTingly(helps_tingly === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Tingly</label>
                                    </div> 
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_cramps === 100 ? true : false} onChange={(e) => setCramps(helps_cramps === 100 ? 0 : 100)}/>
                                        <label htmlFor='checkbox'>Cramps</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_gastrointestinaldisorder === 100 ? true : false} onChange={(e) => setGastrointestinaldisorder(helps_gastrointestinaldisorder === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Gastrointestinaldisorder</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_inflammation === 100 ? true : false} onChange={(e) => setInflammation(helps_inflammation === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Inflammation</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_musclespasms === 100 ? true : false} onChange={(e) => setMusclespasms(helps_musclespasms === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Muscle spams</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_eye_pressure === 100 ? true : false} onChange={(e) => setEyePressure(helps_eye_pressure === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Eye Pressure</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_migraines === 100 ? true : false} onChange={(e) => setMigraines(helps_migraines === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Migraines</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_asthma === 100 ? true : false} onChange={(e) => setAsthma(helps_asthma === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Asthma</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_anorexia === 100 ? true : false} onChange={(e) => setAnorexia(helps_anorexia === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Anorexia</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_arthritis === 100 ? true : false} onChange={(e) => setArthritis(helps_arthritis === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Arthritis</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_add_adhd === 100 ? true : false} onChange={(e) => setAddAdhd(helps_add_adhd === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>ADD/ADHD</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_musculardystrophy === 100 ? true : false} onChange={(e) => setMusculardystrophy(helps_musculardystrophy === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Muscular Dystrophy</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_hypertension === 100 ? true : false} onChange={(e) => setHypertension(helps_hypertension === 100 ? 0 : 100)}/>
                                        <label htmlFor='checkbox'>Hypertension</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_glaucoma === 100 ? true : false} onChange={(e) => setGlaucoma(helps_glaucoma === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Glaucoma</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_pms === 100 ? true : false} onChange={(e) => setPms(helps_pms === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>PMS</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_seizures === 100 ? true : false} onChange={(e) => setSeizures(helps_seizures === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Seizures</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_spasticity === 100 ? true : false} onChange={(e) => setSpasticity(helps_spasticity === 100 ? 0 : 100)}/>
                                        <label htmlFor='checkbox'>Spasticity</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_spinalcordinjury === 100 ? true : false} onChange={(e) => setSpinalcordinjury(helps_spinalcordinjury === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Spinal Cord Injury</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_fibromyalgia === 100 ? true : false} onChange={(e) => setFibromyalgia(helps_fibromyalgia === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Fibromyalgia</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_crohn_s_disease === 100 ? true : false} onChange={(e) => setCrohnSDisease(helps_crohn_s_disease === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Crohns Disease</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_phantomlimbpain === 100 ? true : false} onChange={(e) => setPhantomlimbpain(helps_phantomlimbpain === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Phantom Limb Pain</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_epilepsy === 100 ? true : false} onChange={(e) => setEpilepsy(helps_epilepsy === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Epilepsy</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_multiplesclerosis === 100 ? true : false} onChange={(e) => setMultiplesclerosis(helps_multiplesclerosis === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Multiple Sclerosis</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_parkinson_s === 100 ? true : false} onChange={(e) => setParkinsonS(helps_parkinson_s === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Parkinsons</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_tourette_ssyndrome === 100 ? true : false} onChange={(e) => setTouretteSsyndrome(helps_tourette_ssyndrome === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Tourettes Syndrome</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_alzheimer_s === 100 ? true : false} onChange={(e) => setAlzheimerS(helps_alzheimer_s === 100 ? 0 : 100)}/>
                                        <label htmlFor='checkbox'>Alzheimers</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_hiv_aids === 100 ? true : false} onChange={(e) => setHivAids(helps_hiv_aids === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>HIV/AIDS</label>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <input type='checkbox' checked={helps_tinnitus === 100 ? true : false} onChange={(e) => setTinnitus(helps_tinnitus === 100 ? 0 : 100)} />
                                        <label htmlFor='checkbox'>Tinnitus</label>
                                    </div>
                                </div>

                                <div>
                                    <Button className="bg-green-400 text-black" onClick={handlePrediction}>Predecir</Button>
                                </div>
                            </div>

                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel>
                            <div className='ml-14 mr-14'>
                                <Carousel>
                                    <CarouselContent>
                                        {cepasCercanas && cepasCercanas.map((cepa, index) => (
                                            <CarouselItem key={index}>
                                                <ResizablePanel className=''>
                                                    <div>
                                                        <div>
                                                            <ResizablePanelGroup
                                                                direction="vertical"
                                                                className="min-h-[220px] max-w rounded-lg border mb-2">
                                                                <ResizablePanel defaultSize={15}>
                                                                    <div className="flex h-full items-center justify-center  p-6">
                                                                        <span className="font-semibold text-green-400">{cepa[0]}</span>
                                                                    </div>
                                                                </ResizablePanel>
                                                                <ResizableHandle />
                                                                <ResizablePanel defaultSize={35}>
                                                                    <div className='grid place-items-center'>
                                                                        <div className='flex flex-col items-center pt-8'>
                                                                            <span className='text-xl pb-2'>{estadoPrediccion}</span>
                                                                            <div className='text-xl pb-2'>Porcentaje precisión:{cepa[2]}%</div>
                                                                            <div className='text-xl pb-2'>Perfil:{cepa[3]}</div>
                                                                        </div>
                                                                    </div>
                                                                </ResizablePanel>

                                                            </ResizablePanelGroup>
                                                            <div className=''>
                                                                <ResizablePanelGroup
                                                                    direction="vertical"
                                                                    className="min-h-[280px] max-w rounded-lg border mb-2">
                                                                    <ResizableHandle />
                                                                    <div className="grid grid-cols-2 gap-2 p-4">
                                                                        {Object.entries(cepa[1] as Record<string, number>).map(([fh , valor]) => (
                                                                            <div key={fh}>
                                                                                <div className='flex justify-between'>
                                                                                    <span>{fh}</span>
                                                                                    <span>{valor}</span>
                                                                                </div>
                                                                                <Progress value={valor} />
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </ResizablePanelGroup>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </ResizablePanel>
                                            </CarouselItem>
                                        ))}

                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>


                <div className="grid w-full gap-1.5 pt-6 pb-2">
                    <Label htmlFor="message" className='text-2xl'>Receta</Label>
                    <Select onValueChange={handleCepaChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona una Cepa" />
                        </SelectTrigger>
                        <SelectContent>
                            {cepasCercanas && cepasCercanas.map((cepa, index) => (
                                <SelectItem value={cepa[0]} key={index}>{cepa[0]}</SelectItem>
                            ))}

                        </SelectContent>
                    </Select>
                    <div className='flex'>
                        <div className='w-full'>
                        <Textarea placeholder="Nombre:" id="nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                        />   
                        </div>
                        <div className='w-full'>
                        <Textarea placeholder="Edad:" id="edad"
                        value={edad}
                        onChange={handleEdadChange}
                        />   
                        </div>
                        <div className='w-full'>
                        <Textarea placeholder="Telefono:" id="telefono"
                        value={telefono}
                        onChange={handleTelefonoChange}
                        />   
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-full'>
                        <Textarea placeholder="Guia de compra:" id="guia"
                        value={guia}
                        onChange={handleGuiaChange}
                        />   
                        </div>
                        <div className='w-full'>
                        <Textarea placeholder="Padecimientos:" id="padecimiento"
                        value={padecimiento}
                        onChange={handlePadecimientoChange}
                        />   
                        </div>
                    </div>
                    <Textarea placeholder="Dosis:" id="dosis"
                        value={dosis}
                        onChange={handleDosisChange}
                    />
                    <Textarea placeholder="Describe las indicaciones del consumo..." id="message"
                        value={descripcion}
                        onChange={handleDescripcionChange}
                    />
                    {
                        isClient &&
                        <div>
                            <PDFDownloadLink document={<PDF cepas={cepasCercanas}/>} fileName={`Receta:${nombre}.pdf`}>

                                {({ loading }) => (
                                    <Button className="bg-green-400 text-black">Generar</Button>
                                )}
                            </PDFDownloadLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
