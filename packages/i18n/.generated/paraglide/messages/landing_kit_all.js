/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Kit_AllInputs */

const en_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Kits`)
};

const es_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los Kits`)
};

const de_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Kits`)
};

const fr_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les Kits`)
};

const it_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i Kit`)
};

const nl_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Kits`)
};

const pl_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie zestawy`)
};

const pt_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os Kits`)
};

const ru_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все наборы`)
};

const sv_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla kit`)
};

const tr_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm kitler`)
};

const zh_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部套装`)
};

const ja_landing_kit_all = /** @type {(inputs: Landing_Kit_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのキット`)
};

/**
* | output |
* | --- |
* | "All Kits" |
*
* @param {Landing_Kit_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_kit_all = /** @type {((inputs?: Landing_Kit_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Kit_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_kit_all(inputs)
	if (locale === "de") return de_landing_kit_all(inputs)
	if (locale === "fr") return fr_landing_kit_all(inputs)
	if (locale === "it") return it_landing_kit_all(inputs)
	if (locale === "nl") return nl_landing_kit_all(inputs)
	if (locale === "pl") return pl_landing_kit_all(inputs)
	if (locale === "pt") return pt_landing_kit_all(inputs)
	if (locale === "ru") return ru_landing_kit_all(inputs)
	if (locale === "sv") return sv_landing_kit_all(inputs)
	if (locale === "tr") return tr_landing_kit_all(inputs)
	if (locale === "zh") return zh_landing_kit_all(inputs)
	if (locale === "ja") return ja_landing_kit_all(inputs)
	return en_landing_kit_all(inputs)
});
