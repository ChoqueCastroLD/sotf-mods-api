/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Landing_Map_LabelInputs */

const en_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Island map with ${count__number} mod marked as waypoints`);
	return /** @type {LocalizedString} */ (`Island map with ${count__number} mods marked as waypoints`)
	
};

const es_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mapa de la isla con ${count__number} mod marcado como puntos de ruta`);
	return /** @type {LocalizedString} */ (`Mapa de la isla con ${count__number} mods marcados como puntos de ruta`)
	
};

const de_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Inselkarte mit ${count__number} Mod als Wegpunkte`);
	return /** @type {LocalizedString} */ (`Inselkarte mit ${count__number} Mods als Wegpunkte`)
	
};

const fr_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Carte de l’île avec ${count__number} mod repéré comme points de passage`);
	return /** @type {LocalizedString} */ (`Carte de l’île avec ${count__number} mods repérés comme points de passage`)
	
};

const it_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mappa dell’isola con ${count__number} mod segnato come waypoint`);
	return /** @type {LocalizedString} */ (`Mappa dell’isola con ${count__number} mod segnati come waypoint`)
	
};

const nl_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Eilandkaart met ${count__number} mod als waypoints`);
	return /** @type {LocalizedString} */ (`Eilandkaart met ${count__number} mods als waypoints`)
	
};

const pl_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mapa wyspy: ${count__number} mod oznaczone jako punkty trasy`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Mapa wyspy: ${count__number} mody oznaczone jako punkty trasy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Mapa wyspy: ${count__number} modów oznaczone jako punkty trasy`);
	return /** @type {LocalizedString} */ (`Mapa wyspy: ${count__number} modu oznaczone jako punkty trasy`)
	
};

const pt_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mapa da ilha com ${count__number} mod marcado como pontos de referência`);
	return /** @type {LocalizedString} */ (`Mapa da ilha com ${count__number} mods marcados como pontos de referência`)
	
};

const ru_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Карта острова: ${count__number} мод отмечен как путевые точки`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Карта острова: ${count__number} мода отмечены как путевые точки`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Карта острова: ${count__number} модов отмечено как путевые точки`);
	return /** @type {LocalizedString} */ (`Карта острова: ${count__number} мода отмечено как путевые точки`)
	
};

const sv_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ökarta med ${count__number} mod markerade som riktpunkter`);
	return /** @type {LocalizedString} */ (`Ökarta med ${count__number} mods markerade som riktpunkter`)
	
};

const tr_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod yol noktası olarak işaretli ada haritası`);
	return /** @type {LocalizedString} */ (`${count__number} mod yol noktası olarak işaretli ada haritası`)
	
};

const zh_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`岛屿地图，${count__number} 个模组标记为路径点`)
};

const ja_landing_map_label = /** @type {(inputs: Landing_Map_LabelInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 個のModをウェイポイントとして示した島マップ`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Island map with {count__number} mod marked as waypoints" |
* | * | "Island map with {count__number} mods marked as waypoints" |
*
* @param {Landing_Map_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_map_label = /** @type {((inputs: Landing_Map_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Map_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_map_label(inputs)
	if (locale === "de") return de_landing_map_label(inputs)
	if (locale === "fr") return fr_landing_map_label(inputs)
	if (locale === "it") return it_landing_map_label(inputs)
	if (locale === "nl") return nl_landing_map_label(inputs)
	if (locale === "pl") return pl_landing_map_label(inputs)
	if (locale === "pt") return pt_landing_map_label(inputs)
	if (locale === "ru") return ru_landing_map_label(inputs)
	if (locale === "sv") return sv_landing_map_label(inputs)
	if (locale === "tr") return tr_landing_map_label(inputs)
	if (locale === "zh") return zh_landing_map_label(inputs)
	if (locale === "ja") return ja_landing_map_label(inputs)
	return en_landing_map_label(inputs)
});
