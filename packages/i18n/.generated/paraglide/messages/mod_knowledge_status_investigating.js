/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Status_InvestigatingInputs */

const en_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Investigating`)
};

const es_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En investigación`)
};

const de_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Untersuchung`)
};

const fr_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours d’analyse`)
};

const it_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In analisi`)
};

const nl_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In onderzoek`)
};

const pl_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W analizie`)
};

const pt_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em investigação`)
};

const ru_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изучается`)
};

const sv_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Under utredning`)
};

const tr_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleniyor`)
};

const zh_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`调查中`)
};

const ja_mod_knowledge_status_investigating = /** @type {(inputs: Mod_Knowledge_Status_InvestigatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`調査中`)
};

/**
* | output |
* | --- |
* | "Investigating" |
*
* @param {Mod_Knowledge_Status_InvestigatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_status_investigating = /** @type {((inputs?: Mod_Knowledge_Status_InvestigatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Status_InvestigatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_status_investigating(inputs)
	if (locale === "de") return de_mod_knowledge_status_investigating(inputs)
	if (locale === "fr") return fr_mod_knowledge_status_investigating(inputs)
	if (locale === "it") return it_mod_knowledge_status_investigating(inputs)
	if (locale === "nl") return nl_mod_knowledge_status_investigating(inputs)
	if (locale === "pl") return pl_mod_knowledge_status_investigating(inputs)
	if (locale === "pt") return pt_mod_knowledge_status_investigating(inputs)
	if (locale === "ru") return ru_mod_knowledge_status_investigating(inputs)
	if (locale === "sv") return sv_mod_knowledge_status_investigating(inputs)
	if (locale === "tr") return tr_mod_knowledge_status_investigating(inputs)
	if (locale === "zh") return zh_mod_knowledge_status_investigating(inputs)
	if (locale === "ja") return ja_mod_knowledge_status_investigating(inputs)
	return en_mod_knowledge_status_investigating(inputs)
});
