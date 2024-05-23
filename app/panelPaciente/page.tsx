'use client'
import React, { useState } from 'react'
import {API_URL} from '@/config/config'
import { toast } from "sonner"
import Image from "next/image";
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import PDF from "@/components/pdf"
import { PDFDownloadLink  } from '@react-pdf/renderer';

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

    const handleStressChange = () => {
        setStress(100);
    };
    
    const handlePainChange = () => {
        setPain(100);
    };
    
    const handleDepressionChange = () => {
        setDepression(100);
    };
    
    const handleAnxietyChange = () => {
        setAnxiety(100);
    };
    
    const handleInsomniaChange = () => {
        setInsomnia(100);
    };
    
    const handleHeadacheChange = () => {
        setHeadache(100);
    };
    
    const handlePtsdChange = () => {
        setPtsd(100);
    };
    
    const handleFatigueChange = () => {
        setFatigue(100);
    };
    
    const handleLackofappetiteChange = () => {
        setLackofappetite(100);
    };
    
    const handleNauseaChange = () => {
        setNausea(100);
    };
    
    const handleHeadachesChange = () => {
        setHeadaches(100);
    };
    
    const handleBipolarDisorderChange = () => {
        setBipolarDisorder(100);
    };
    
    const handleCancerChange = () => {
        setCancer(100);
    };
    
    const handleTinglyChange = () => {
        setTingly(100);
    };
    
    const handleCrampsChange = () => {
        setCramps(100);
    };
    
    const handleGastrointestinaldisorderChange = () => {
        setGastrointestinaldisorder(100);
    };
    
    const handleInflammationChange = () => {
        setInflammation(100);
    };
    
    const handleMusclespasmsChange = () => {
        setMusclespasms(100);
    };
    
    const handleEyePressureChange = () => {
        setEyePressure(100);
    };
    
    const handleMigrainesChange = () => {
        setMigraines(100);
    };
    
    const handleAsthmaChange = () => {
        setAsthma(100);
    };
    
    const handleAnorexiaChange = () => {
        setAnorexia(100);
    };
    
    const handleArthritisChange = () => {
        setArthritis(100);
    };
    
    const handleAddAdhdChange = () => {
        setAddAdhd(100);
    };
    
    const handleMusculardystrophyChange = () => {
        setMusculardystrophy(100);
    };
    
    const handleHypertensionChange = () => {
        setHypertension(100);
    };
    
    const handleGlaucomaChange = () => {
        setGlaucoma(100);
    };
    
    const handlePmsChange = () => {
        setPms(100);
    };
    
    const handleSeizuresChange = () => {
        setSeizures(100);
    };
    
    const handleSpasticityChange = () => {
        setSpasticity(100);
    };
    
    const handleSpinalcordinjuryChange = () => {
        setSpinalcordinjury(100);
    };
    
    const handleFibromyalgiaChange = () => {
        setFibromyalgia(100);
    };
    
    const handleCrohnSDiseaseChange = () => {
        setCrohnSDisease(100);
    };
    
    const handlePhantomlimbpainChange = () => {
        setPhantomlimbpain(100);
    };
    
    const handleEpilepsyChange = () => {
        setEpilepsy(100);
    };
    
    const handleMultiplesclerosisChange = () => {
        setMultiplesclerosis(100);
    };
    
    const handleParkinsonSChange = () => {
        setParkinsonS(100);
    };
    
    const handleTouretteSsyndromeChange = () => {
        setTouretteSsyndrome(100);
    };
    
    const handleAlzheimerSChange = () => {
        setAlzheimerS(100);
    };
    
    const handleHivAidsChange = () => {
        setHivAids(100);
    };
    
    const handleTinnitusChange = () => {
        setTinnitus(100);
    };
    
    
  
    const [cepasCercanas, setCepasCercanas] = useState<{
        Cepa: string
        Nombre: string,
        Img_url: string,
        feeling_relaxed: number,
        feeling_happy: number,
        feeling_euphoric: number,
        feeling_uplifted: number,
        feeling_sleepy: number,
        feeling_creative: number,
        feeling_energetic: number,
        feeling_focused: number,
        feeling_hungry: number,
        feeling_talkative: number,
        feeling_giggly: number,
        feeling_aroused: number,
        

    }[]>([]);
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
                      // Maneja la respuesta de tu API aquí
            setCepasCercanas(data.cepas_recomendadas)
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    className="mr-2"/>
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
                                    <input type='checkbox' onChange={handleStressChange} />
                                    <label htmlFor='checkbox'>Stress</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handlePainChange} />
                                    <label htmlFor='checkbox'>Pain</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleDepressionChange} />
                                    <label htmlFor='checkbox'>Depression</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleAnxietyChange} />
                                    <label htmlFor='checkbox'>Anxiety</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleInsomniaChange} />
                                    <label htmlFor='checkbox'>Insomnia</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleHeadacheChange} />
                                    <label htmlFor='checkbox'>Headache</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handlePtsdChange} />
                                    <label htmlFor='checkbox'>PTSD</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleFatigueChange} />
                                    <label htmlFor='checkbox'>Fatigue</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleLackofappetiteChange} />
                                    <label htmlFor='checkbox'>Lack of Apetitte</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleNauseaChange} />
                                    <label htmlFor='checkbox'>Nausea</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleHeadachesChange} />
                                    <label htmlFor='checkbox'>Headaches</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleBipolarDisorderChange} />
                                    <label htmlFor='checkbox'>Bipolar Disorder</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleCancerChange} />
                                    <label htmlFor='checkbox'>Cancer</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleTinglyChange} />
                                    <label htmlFor='checkbox'>Tingly</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleCrampsChange} />
                                    <label htmlFor='checkbox'>Cramps</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleGastrointestinaldisorderChange} />
                                    <label htmlFor='checkbox'>Gastrointestinaldisorder</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleInflammationChange} />
                                    <label htmlFor='checkbox'>Inflammation</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleMusclespasmsChange} />
                                    <label htmlFor='checkbox'>Muscle spams</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleEyePressureChange} />
                                    <label htmlFor='checkbox'>Eye Pressure</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleMigrainesChange} />
                                    <label htmlFor='checkbox'>Migraines</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleAsthmaChange} />
                                    <label htmlFor='checkbox'>Asthma</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleAnorexiaChange} />
                                    <label htmlFor='checkbox'>Anorexia</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleArthritisChange} />
                                    <label htmlFor='checkbox'>Arthritis</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleAddAdhdChange} />
                                    <label htmlFor='checkbox'>ADD/ADHD</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleMusculardystrophyChange} />
                                    <label htmlFor='checkbox'>Muscular Dystrophy</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleHypertensionChange} />
                                    <label htmlFor='checkbox'>Hypertension</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleGlaucomaChange} />
                                    <label htmlFor='checkbox'>Glaucoma</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handlePmsChange} />
                                    <label htmlFor='checkbox'>PMS</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleSeizuresChange} />
                                    <label htmlFor='checkbox'>Seizures</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleSpasticityChange} />
                                    <label htmlFor='checkbox'>Spasticity</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleSpinalcordinjuryChange} />
                                    <label htmlFor='checkbox'>Spinal Cord Injury</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleFibromyalgiaChange} />
                                    <label htmlFor='checkbox'>Fibromyalgia</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleCrohnSDiseaseChange} />
                                    <label htmlFor='checkbox'>Crohns Disease</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handlePhantomlimbpainChange} />
                                    <label htmlFor='checkbox'>Phantom Limb Pain</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleEpilepsyChange} />
                                    <label htmlFor='checkbox'>Epilepsy</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleMultiplesclerosisChange} />
                                    <label htmlFor='checkbox'>Multiple Sclerosis</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleParkinsonSChange} />
                                    <label htmlFor='checkbox'>Parkinsons</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleTouretteSsyndromeChange} />
                                    <label htmlFor='checkbox'>Tourettes Syndrome</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleAlzheimerSChange} />
                                    <label htmlFor='checkbox'>Alzheimers</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleHivAidsChange} />
                                    <label htmlFor='checkbox'>HIV/AIDS</label>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <input type='checkbox' onChange={handleTinnitusChange} />
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
                            {cepasCercanas && cepasCercanas.map((cepa, index)=>(
                                <CarouselItem key={index}>
                                <ResizablePanel className=''>
                                    <div>
                                        <div>
                                        <ResizablePanelGroup
                                            direction="vertical"
                                            className="min-h-[220px] max-w rounded-lg border mb-2">
                                                <ResizablePanel defaultSize={20}>
                                                    <div className="flex h-full items-center justify-center  p-6">
                                                    <span className="font-semibold text-green-400">{cepa?.Nombre}</span>
                                                    </div>
                                                </ResizablePanel>
                                                <ResizableHandle />
                                                <ResizablePanel defaultSize={100}>
                                                    <div className='grid  place-items-center'>
                                                        <div className='p-2'>
                                                            <span> La cepa OG Kush se caracteriza lorem por un perfil de terpenos complejo que incluye mirceno, limoneno, linalool y cariofileno. Este cóctel aromático proporciona notas terrosas, cítricas y ligeramente florales. Se cree que contribuye a un efecto relajante con toques de euforia y claridad mental.</span>
                                                        </div>
                                                    </div>
                                                </ResizablePanel>
                                                
                                            </ResizablePanelGroup>
                                            <div className=''>
                                            <ResizablePanelGroup
                                            direction="vertical"
                                            className="min-h-[280px] max-w rounded-lg border mb-2">
                                                <ResizablePanel defaultSize={10}>
                                                    <div className="flex h-full items-center  p-6">
                                                    <span className="font-semibold">Terpenos Presentes</span>
                                                    </div>
                                                </ResizablePanel>
                                                <ResizableHandle />
                                                <div className="grid grid-cols-2 gap-2 p-4">
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Relaxed</span>
                                                        <span>{cepa?.feeling_relaxed}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_relaxed} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Happy</span>
                                                        <span>{cepa?.feeling_happy}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_happy} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Euphoric</span>
                                                        <span>{cepa?.feeling_euphoric}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_euphoric} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Uplifted</span>
                                                        <span>{cepa?.feeling_uplifted}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_uplifted} />
                                                        </div>

                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Sleepy</span>
                                                        <span>{cepa?.feeling_sleepy}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_sleepy} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Hungry</span>
                                                        <span>{cepa?.feeling_hungry}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_hungry} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Talkative</span>
                                                        <span>{cepa?.feeling_talkative}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_talkative} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Creative</span>
                                                        <span>{cepa?.feeling_creative}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_creative} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Energetic</span>
                                                        <span>{cepa?.feeling_energetic}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_energetic} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Focused</span>
                                                        <span>{cepa?.feeling_focused}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_focused} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Giggly</span>
                                                        <span>{cepa?.feeling_giggly}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_giggly} />
                                                        </div>
                                                        <div>
                                                        <div className='flex justify-between'>
                                                        <span>Aroused</span>
                                                        <span>{cepa?.feeling_aroused}</span>
                                                        </div>
                                                        <Progress value={cepa?.feeling_aroused} />
                                                        </div>
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
                            <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecciona una Cepa" />
                            </SelectTrigger>
                            <SelectContent>
                            {cepasCercanas && cepasCercanas.map((cepa, index)=>(
                                <SelectItem value="light"  key={index}>{cepa?.Nombre}</SelectItem>
                                ))}

                            </SelectContent>
                            </Select>
            <Textarea placeholder="Si deseas prescribir una receta podras escribirla aqui..." id="message" />
            <div>
                    <PDFDownloadLink document={<PDF />} fileName="myfirstpdf.pdf">
                {({ loading, url, error, blob }) =>
                loading ? (
                    toast("Cargando Receta")
                ) : (
                    <Button className="bg-green-400 text-black">Generar</Button>
                )
                }
            </PDFDownloadLink>
            </div>
            </div>
        </div>
    </div>
  )
}
