/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Map_Kind_LegendInputs */

const en_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legend`)
};

const es_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyenda`)
};

const de_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legende`)
};

const fr_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Légende`)
};

const it_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggenda`)
};

const nl_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legende`)
};

const pl_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenda`)
};

const pt_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lenda`)
};

const ru_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Легенда`)
};

const sv_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legend`)
};

const tr_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efsane`)
};

const zh_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`传奇`)
};

const ja_landing_map_kind_legend = /** @type {(inputs: Landing_Map_Kind_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レジェンド`)
};

/**
* | output |
* | --- |
* | "Legend" |
*
* @param {Landing_Map_Kind_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_map_kind_legend = /** @type {((inputs?: Landing_Map_Kind_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Map_Kind_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_map_kind_legend(inputs)
	if (locale === "de") return de_landing_map_kind_legend(inputs)
	if (locale === "fr") return fr_landing_map_kind_legend(inputs)
	if (locale === "it") return it_landing_map_kind_legend(inputs)
	if (locale === "nl") return nl_landing_map_kind_legend(inputs)
	if (locale === "pl") return pl_landing_map_kind_legend(inputs)
	if (locale === "pt") return pt_landing_map_kind_legend(inputs)
	if (locale === "ru") return ru_landing_map_kind_legend(inputs)
	if (locale === "sv") return sv_landing_map_kind_legend(inputs)
	if (locale === "tr") return tr_landing_map_kind_legend(inputs)
	if (locale === "zh") return zh_landing_map_kind_legend(inputs)
	if (locale === "ja") return ja_landing_map_kind_legend(inputs)
	return en_landing_map_kind_legend(inputs)
});
