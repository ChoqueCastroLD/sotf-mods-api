/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sla_OldestInputs */

const en_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest`)
};

const es_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El más antiguo`)
};

const de_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ältester`)
};

const fr_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le plus ancien`)
};

const it_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il più vecchio`)
};

const nl_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste`)
};

const pl_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarszy`)
};

const pt_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais antigo`)
};

const ru_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самый старый`)
};

const sv_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldst`)
};

const tr_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En eski`)
};

const zh_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最久`)
};

const ja_ranger_sla_oldest = /** @type {(inputs: Ranger_Sla_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最長`)
};

/**
* | output |
* | --- |
* | "Oldest" |
*
* @param {Ranger_Sla_OldestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sla_oldest = /** @type {((inputs?: Ranger_Sla_OldestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_OldestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sla_oldest(inputs)
	if (locale === "de") return de_ranger_sla_oldest(inputs)
	if (locale === "fr") return fr_ranger_sla_oldest(inputs)
	if (locale === "it") return it_ranger_sla_oldest(inputs)
	if (locale === "nl") return nl_ranger_sla_oldest(inputs)
	if (locale === "pl") return pl_ranger_sla_oldest(inputs)
	if (locale === "pt") return pt_ranger_sla_oldest(inputs)
	if (locale === "ru") return ru_ranger_sla_oldest(inputs)
	if (locale === "sv") return sv_ranger_sla_oldest(inputs)
	if (locale === "tr") return tr_ranger_sla_oldest(inputs)
	if (locale === "zh") return zh_ranger_sla_oldest(inputs)
	if (locale === "ja") return ja_ranger_sla_oldest(inputs)
	return en_ranger_sla_oldest(inputs)
});
