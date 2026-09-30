/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_RisingInputs */

const en_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rising`)
};

const es_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ascenso`)
};

const de_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufsteiger`)
};

const fr_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ascension`)
};

const it_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In ascesa`)
};

const nl_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opkomend`)
};

const pl_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wschodzący`)
};

const pt_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em ascensão`)
};

const ru_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Восходящие`)
};

const sv_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På uppgång`)
};

const tr_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükselenler`)
};

const zh_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新星`)
};

const ja_landing_creators_rising = /** @type {(inputs: Landing_Creators_RisingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライジング`)
};

/**
* | output |
* | --- |
* | "Rising" |
*
* @param {Landing_Creators_RisingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_rising = /** @type {((inputs?: Landing_Creators_RisingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_RisingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_rising(inputs)
	if (locale === "de") return de_landing_creators_rising(inputs)
	if (locale === "fr") return fr_landing_creators_rising(inputs)
	if (locale === "it") return it_landing_creators_rising(inputs)
	if (locale === "nl") return nl_landing_creators_rising(inputs)
	if (locale === "pl") return pl_landing_creators_rising(inputs)
	if (locale === "pt") return pt_landing_creators_rising(inputs)
	if (locale === "ru") return ru_landing_creators_rising(inputs)
	if (locale === "sv") return sv_landing_creators_rising(inputs)
	if (locale === "tr") return tr_landing_creators_rising(inputs)
	if (locale === "zh") return zh_landing_creators_rising(inputs)
	if (locale === "ja") return ja_landing_creators_rising(inputs)
	return en_landing_creators_rising(inputs)
});
