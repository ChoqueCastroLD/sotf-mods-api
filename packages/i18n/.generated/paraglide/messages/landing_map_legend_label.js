/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Map_Legend_LabelInputs */

const en_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Map legend`)
};

const es_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyenda del mapa`)
};

const de_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kartenlegende`)
};

const fr_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Légende de la carte`)
};

const it_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenda della mappa`)
};

const nl_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaartlegenda`)
};

const pl_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenda mapy`)
};

const pt_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenda do mapa`)
};

const ru_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Легенда карты`)
};

const sv_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kartans teckenförklaring`)
};

const tr_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harita göstergesi`)
};

const zh_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地图图例`)
};

const ja_landing_map_legend_label = /** @type {(inputs: Landing_Map_Legend_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マップの凡例`)
};

/**
* | output |
* | --- |
* | "Map legend" |
*
* @param {Landing_Map_Legend_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_map_legend_label = /** @type {((inputs?: Landing_Map_Legend_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Map_Legend_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_map_legend_label(inputs)
	if (locale === "de") return de_landing_map_legend_label(inputs)
	if (locale === "fr") return fr_landing_map_legend_label(inputs)
	if (locale === "it") return it_landing_map_legend_label(inputs)
	if (locale === "nl") return nl_landing_map_legend_label(inputs)
	if (locale === "pl") return pl_landing_map_legend_label(inputs)
	if (locale === "pt") return pt_landing_map_legend_label(inputs)
	if (locale === "ru") return ru_landing_map_legend_label(inputs)
	if (locale === "sv") return sv_landing_map_legend_label(inputs)
	if (locale === "tr") return tr_landing_map_legend_label(inputs)
	if (locale === "zh") return zh_landing_map_legend_label(inputs)
	if (locale === "ja") return ja_landing_map_legend_label(inputs)
	return en_landing_map_legend_label(inputs)
});
