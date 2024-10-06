import { Checkbox } from '@components/Checkbox'
import { useForm } from 'react-hook-form'
import { FaTruckFast } from 'react-icons/fa6'
import { TDeliveryForm } from './types'
import { Input } from '@components/Input'
import { CustomSelect } from '@components/Select'
import { useMemo } from 'react'
import RegionesYComunas from '@assets/comunas-regiones.json'

export const DeliveryForm = () => {
    const { control, watch } = useForm<TDeliveryForm>({})

    const regionWatch = watch('region')

    const deliveryWatch = watch('delivery')

    const regions = useMemo(
        () =>
            RegionesYComunas.regiones.map((reg) => ({
                value: reg.region,
                label: reg.region,
            })),
        []
    )

    const cities = useMemo(
        () =>
            regionWatch
                ? (RegionesYComunas.regiones
                      .find((reg) => reg.region === regionWatch.value)
                      ?.comunas.map((city) => ({ value: city, label: city })) ??
                  [])
                : [],
        [regionWatch]
    )

    return (
        <div className="flex flex-col gap-10 mt-10 w-full">
            <h1 className="font-semibold text-[32px]">Checkout</h1>
            <div className="flex flex-col gap-4">
                <h2>Información de envío</h2>
                <Checkbox name="delivery" control={control}>
                    <FaTruckFast />
                    <p>Delivery</p>
                </Checkbox>
                {deliveryWatch && (
                    <>
                        {' '}
                        <Input
                            name="names"
                            control={control}
                            label="Nombres"
                            required
                            placeholder="Ingrese sus nombres"
                        />
                        <Input
                            name="lastNames"
                            control={control}
                            label="Apellidos"
                            required
                            placeholder="Ingrese sus apellidos"
                        />
                        <Input
                            name="email"
                            control={control}
                            label="Correo electrónico"
                            required
                            type="email"
                            placeholder="Ingrese su correo electrónico"
                        />
                        <Input
                            name="address"
                            control={control}
                            label="Dirección"
                            required
                            placeholder="Ingrese su dirección"
                        />
                        <div className="flex gap-4">
                            <CustomSelect
                                name="region"
                                control={control}
                                options={regions}
                                label="Región"
                                placeholder="Selecciona una región"
                            />
                            <CustomSelect
                                name="city"
                                control={control}
                                options={cities}
                                label="Comuna"
                                placeholder="Selecciona una comuna"
                            />
                        </div>
                        <Input
                            name="zipcode"
                            control={control}
                            label="Código postal"
                            required
                            className="w-1/2"
                            type="number"
                            placeholder="Ingrese su código postal"
                        />
                    </>
                )}
            </div>
        </div>
    )
}
