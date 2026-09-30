/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Blueprints_AllInputs */

const en_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All builds`)
};

const es_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las builds`)
};

const de_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Builds`)
};

const fr_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les builds`)
};

const it_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le build`)
};

const nl_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle builds`)
};

const pl_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie buildy`)
};

const pt_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as builds`)
};

const ru_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все постройки`)
};

const sv_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla byggen`)
};

const tr_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm yapılar`)
};

const zh_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部建筑`)
};

const ja_landing_blueprints_all = /** @type {(inputs: Landing_Blueprints_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての建築`)
};

/**
* | output |
* | --- |
* | "All builds" |
*
* @param {Landing_Blueprints_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_blueprints_all = /** @type {((inputs?: Landing_Blueprints_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Blueprints_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_blueprints_all(inputs)
	if (locale === "de") return de_landing_blueprints_all(inputs)
	if (locale === "fr") return fr_landing_blueprints_all(inputs)
	if (locale === "it") return it_landing_blueprints_all(inputs)
	if (locale === "nl") return nl_landing_blueprints_all(inputs)
	if (locale === "pl") return pl_landing_blueprints_all(inputs)
	if (locale === "pt") return pt_landing_blueprints_all(inputs)
	if (locale === "ru") return ru_landing_blueprints_all(inputs)
	if (locale === "sv") return sv_landing_blueprints_all(inputs)
	if (locale === "tr") return tr_landing_blueprints_all(inputs)
	if (locale === "zh") return zh_landing_blueprints_all(inputs)
	if (locale === "ja") return ja_landing_blueprints_all(inputs)
	return en_landing_blueprints_all(inputs)
});
