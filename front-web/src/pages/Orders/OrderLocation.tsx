import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../../services/api';

import {
  FilterContainer,
  OrderLocationContainer,
  OrderLocationContent,
  OrderLocationTitle,
} from './styles';
import { OrderLocationData } from './types';

const initialPosition = {
  lat: -23.6632222,
  lng: -46.7312496,
};

type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
};

type Props = {
  onChangeLocation: (location: OrderLocationData) => void;
};

const OrderLocation: React.FC<Props> = ({ onChangeLocation }: Props) => {
  const [address, setAddress] = useState<Place>({
    position: initialPosition,
  });

  const loadOptions = async (
    inputValue: string,
    callback: (places: Place[]) => void,
  ) => {
    const response = await fetchLocalMapBox(inputValue);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const places = response.data.features.map((item: any) => {
      return {
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0],
        },
      };
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      address: place.label!,
    });
  };

  return (
    <OrderLocationContainer>
      <OrderLocationContent>
        <OrderLocationTitle>
          Selecione onde o pedido deve ser entregue:
        </OrderLocationTitle>
        <FilterContainer>
          <AsyncSelect
            placeholder="Digite um endereço para entregar o pedido"
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </FilterContainer>
        <MapContainer
          center={address.position}
          zoom={13}
          key={address.position.lat}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
          />
          <Marker position={address.position}>
            <Popup>{address.label}</Popup>
          </Marker>
        </MapContainer>
      </OrderLocationContent>
    </OrderLocationContainer>
  );
};

export default OrderLocation;
