import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const Map: React.FC<any> = () => {
	const url = 'http://172.16.25.217:4200/assets/tiles/{z}/{x}/{y}.png';

	const getIcon = (iconSize) => {
		return L.icon({
			iconUrl: require('./location.png'),
			iconSize
		});
	};

	return (
		<div className="map">
			<MapContainer
				center={[ 30.02161, 31.25146 ]}
				zoom={18}
				scrollWheelZoom={false}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer url={url} />
				<Marker
					position={[ 30.02161, 31.25146 ]}
					icon={getIcon(60)}
					eventHandlers={{
						click: () => {
							console.log('Marker Clicked');
						}
					}}
				>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;