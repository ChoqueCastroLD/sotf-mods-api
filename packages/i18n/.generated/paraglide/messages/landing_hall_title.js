/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hall_TitleInputs */

const en_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legends of the island`)
};

const es_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyendas de la isla`)
};

const de_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenden der Insel`)
};

const fr_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Légendes de l’île`)
};

const it_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggende dell’isola`)
};

const nl_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legendes van het eiland`)
};

const pl_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legendy wyspy`)
};

const pt_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lendas da ilha`)
};

const ru_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Легенды острова`)
};

const sv_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öns legender`)
};

const tr_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın efsaneleri`)
};

const zh_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`岛上传奇`)
};

const ja_landing_hall_title = /** @type {(inputs: Landing_Hall_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島のレジェンド`)
};

/**
* | output |
* | --- |
* | "Legends of the island" |
*
* @param {Landing_Hall_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hall_title = /** @type {((inputs?: Landing_Hall_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hall_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hall_title(inputs)
	if (locale === "de") return de_landing_hall_title(inputs)
	if (locale === "fr") return fr_landing_hall_title(inputs)
	if (locale === "it") return it_landing_hall_title(inputs)
	if (locale === "nl") return nl_landing_hall_title(inputs)
	if (locale === "pl") return pl_landing_hall_title(inputs)
	if (locale === "pt") return pt_landing_hall_title(inputs)
	if (locale === "ru") return ru_landing_hall_title(inputs)
	if (locale === "sv") return sv_landing_hall_title(inputs)
	if (locale === "tr") return tr_landing_hall_title(inputs)
	if (locale === "zh") return zh_landing_hall_title(inputs)
	if (locale === "ja") return ja_landing_hall_title(inputs)
	return en_landing_hall_title(inputs)
});
