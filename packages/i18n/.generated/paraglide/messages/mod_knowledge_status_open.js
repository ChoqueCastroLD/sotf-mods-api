/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Status_OpenInputs */

const en_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const es_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abierto`)
};

const de_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offen`)
};

const fr_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvert`)
};

const it_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperto`)
};

const nl_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const pl_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwarte`)
};

const pt_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aberto`)
};

const ru_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыто`)
};

const sv_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppen`)
};

const tr_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık`)
};

const zh_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未解决`)
};

const ja_mod_knowledge_status_open = /** @type {(inputs: Mod_Knowledge_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未対応`)
};

/**
* | output |
* | --- |
* | "Open" |
*
* @param {Mod_Knowledge_Status_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_status_open = /** @type {((inputs?: Mod_Knowledge_Status_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Status_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_status_open(inputs)
	if (locale === "de") return de_mod_knowledge_status_open(inputs)
	if (locale === "fr") return fr_mod_knowledge_status_open(inputs)
	if (locale === "it") return it_mod_knowledge_status_open(inputs)
	if (locale === "nl") return nl_mod_knowledge_status_open(inputs)
	if (locale === "pl") return pl_mod_knowledge_status_open(inputs)
	if (locale === "pt") return pt_mod_knowledge_status_open(inputs)
	if (locale === "ru") return ru_mod_knowledge_status_open(inputs)
	if (locale === "sv") return sv_mod_knowledge_status_open(inputs)
	if (locale === "tr") return tr_mod_knowledge_status_open(inputs)
	if (locale === "zh") return zh_mod_knowledge_status_open(inputs)
	if (locale === "ja") return ja_mod_knowledge_status_open(inputs)
	return en_mod_knowledge_status_open(inputs)
});
