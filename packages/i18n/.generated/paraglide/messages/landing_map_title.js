/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Map_TitleInputs */

const en_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Island map`)
};

const es_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mapa de la isla`)
};

const de_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inselkarte`)
};

const fr_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carte de l’île`)
};

const it_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mappa dell’isola`)
};

const nl_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eilandkaart`)
};

const pl_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mapa wyspy`)
};

const pt_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mapa da ilha`)
};

const ru_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Карта острова`)
};

const sv_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ökarta`)
};

const tr_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ada haritası`)
};

const zh_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`岛屿地图`)
};

const ja_landing_map_title = /** @type {(inputs: Landing_Map_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島マップ`)
};

/**
* | output |
* | --- |
* | "Island map" |
*
* @param {Landing_Map_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_map_title = /** @type {((inputs?: Landing_Map_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Map_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_map_title(inputs)
	if (locale === "de") return de_landing_map_title(inputs)
	if (locale === "fr") return fr_landing_map_title(inputs)
	if (locale === "it") return it_landing_map_title(inputs)
	if (locale === "nl") return nl_landing_map_title(inputs)
	if (locale === "pl") return pl_landing_map_title(inputs)
	if (locale === "pt") return pt_landing_map_title(inputs)
	if (locale === "ru") return ru_landing_map_title(inputs)
	if (locale === "sv") return sv_landing_map_title(inputs)
	if (locale === "tr") return tr_landing_map_title(inputs)
	if (locale === "zh") return zh_landing_map_title(inputs)
	if (locale === "ja") return ja_landing_map_title(inputs)
	return en_landing_map_title(inputs)
});
