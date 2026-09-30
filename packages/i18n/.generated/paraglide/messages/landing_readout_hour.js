/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Readout_HourInputs */

const en_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last hour`)
};

const es_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última hora`)
};

const de_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte Stunde`)
};

const fr_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière heure`)
};

const it_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima ora`)
};

const nl_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgelopen uur`)
};

const pl_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnia godzina`)
};

const pt_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última hora`)
};

const ru_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За последний час`)
};

const sv_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste timmen`)
};

const tr_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son bir saat`)
};

const zh_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近一小时`)
};

const ja_landing_readout_hour = /** @type {(inputs: Landing_Readout_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`直近1時間`)
};

/**
* | output |
* | --- |
* | "Last hour" |
*
* @param {Landing_Readout_HourInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_readout_hour = /** @type {((inputs?: Landing_Readout_HourInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Readout_HourInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_readout_hour(inputs)
	if (locale === "de") return de_landing_readout_hour(inputs)
	if (locale === "fr") return fr_landing_readout_hour(inputs)
	if (locale === "it") return it_landing_readout_hour(inputs)
	if (locale === "nl") return nl_landing_readout_hour(inputs)
	if (locale === "pl") return pl_landing_readout_hour(inputs)
	if (locale === "pt") return pt_landing_readout_hour(inputs)
	if (locale === "ru") return ru_landing_readout_hour(inputs)
	if (locale === "sv") return sv_landing_readout_hour(inputs)
	if (locale === "tr") return tr_landing_readout_hour(inputs)
	if (locale === "zh") return zh_landing_readout_hour(inputs)
	if (locale === "ja") return ja_landing_readout_hour(inputs)
	return en_landing_readout_hour(inputs)
});
