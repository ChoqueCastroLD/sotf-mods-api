/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_RemoveInputs */

const en_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const es_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar`)
};

const de_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernen`)
};

const fr_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer`)
};

const it_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi`)
};

const nl_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ru_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const ja_mod_knowledge_remove = /** @type {(inputs: Mod_Knowledge_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Mod_Knowledge_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_remove = /** @type {((inputs?: Mod_Knowledge_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_remove(inputs)
	if (locale === "de") return de_mod_knowledge_remove(inputs)
	if (locale === "fr") return fr_mod_knowledge_remove(inputs)
	if (locale === "it") return it_mod_knowledge_remove(inputs)
	if (locale === "nl") return nl_mod_knowledge_remove(inputs)
	if (locale === "pl") return pl_mod_knowledge_remove(inputs)
	if (locale === "pt") return pt_mod_knowledge_remove(inputs)
	if (locale === "ru") return ru_mod_knowledge_remove(inputs)
	if (locale === "sv") return sv_mod_knowledge_remove(inputs)
	if (locale === "tr") return tr_mod_knowledge_remove(inputs)
	if (locale === "zh") return zh_mod_knowledge_remove(inputs)
	if (locale === "ja") return ja_mod_knowledge_remove(inputs)
	return en_mod_knowledge_remove(inputs)
});
