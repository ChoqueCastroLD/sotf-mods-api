/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Shared_TitleInputs */

const en_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shared with me`)
};

const es_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartidos conmigo`)
};

const de_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit mir geteilt`)
};

const fr_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partagés avec moi`)
};

const it_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condivisi con me`)
};

const nl_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met mij gedeeld`)
};

const pl_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnione mi`)
};

const pt_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartilhados comigo`)
};

const ru_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доступные мне`)
};

const sv_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delade med mig`)
};

const tr_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benimle paylaşılanlar`)
};

const zh_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与我共享`)
};

const ja_mod_knowledge_shared_title = /** @type {(inputs: Mod_Knowledge_Shared_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共有されたMod`)
};

/**
* | output |
* | --- |
* | "Shared with me" |
*
* @param {Mod_Knowledge_Shared_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_shared_title = /** @type {((inputs?: Mod_Knowledge_Shared_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Shared_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_shared_title(inputs)
	if (locale === "de") return de_mod_knowledge_shared_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_shared_title(inputs)
	if (locale === "it") return it_mod_knowledge_shared_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_shared_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_shared_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_shared_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_shared_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_shared_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_shared_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_shared_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_shared_title(inputs)
	return en_mod_knowledge_shared_title(inputs)
});
