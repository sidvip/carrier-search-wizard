import { ChangeEvent } from "react";


export type SliderPropType = {
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (value: number) => void;
};

export type AppStateType = {
    cost: number;
    specialRequirements: string[] | null;
    onTimeDeliveryPercentage: number;
    rating: number;
    bookedCarrier: CarrierResponseType | {} | any;
};

export type CarrierResponseType = {
    id: number;
    name: string,
    rating: number,
    onTimeDeliveryPercentage: number,
    cost: number,
    specialRequirements: string[],
    availability: boolean
}

export interface CommonStateType {
    data: CarrierResponseType[];
}
export interface Step1PropType extends CommonStateType {
    appState: AppStateType;
    setAppState: (value: AppStateType) => void;
}

export interface Step2PropType extends CommonStateType {
    setActiveStep: any;
    appState: AppStateType;

    setAppState: (value: AppStateType) => void;

};

export interface Step3PropType {
    appState: AppStateType;
    setActiveStep: any;
}

export type CheckboxPropType = {
    label: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    value: boolean;
}
export type InputType = {
    value: string;
    onChange: (value: string) => void;
}

export type FooterType = {
    appState: AppStateType;
    activeStep: number;
    setActiveStep: any;
}