/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_SavedInputs */

const en_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saved`)
};

const es_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardado`)
};

const de_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gespeichert`)
};

const fr_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistré`)
};

const it_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvato`)
};

const nl_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgeslagen`)
};

const pl_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano`)
};

const pt_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvo`)
};

const ru_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранено`)
};

const sv_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparat`)
};

const tr_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedildi`)
};

const zh_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存`)
};

const ja_mod_knowledge_saved = /** @type {(inputs: Mod_Knowledge_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しました`)
};

/**
* | output |
* | --- |
* | "Saved" |
*
* @param {Mod_Knowledge_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_saved = /** @type {((inputs?: Mod_Knowledge_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_saved(inputs)
	if (locale === "de") return de_mod_knowledge_saved(inputs)
	if (locale === "fr") return fr_mod_knowledge_saved(inputs)
	if (locale === "it") return it_mod_knowledge_saved(inputs)
	if (locale === "nl") return nl_mod_knowledge_saved(inputs)
	if (locale === "pl") return pl_mod_knowledge_saved(inputs)
	if (locale === "pt") return pt_mod_knowledge_saved(inputs)
	if (locale === "ru") return ru_mod_knowledge_saved(inputs)
	if (locale === "sv") return sv_mod_knowledge_saved(inputs)
	if (locale === "tr") return tr_mod_knowledge_saved(inputs)
	if (locale === "zh") return zh_mod_knowledge_saved(inputs)
	if (locale === "ja") return ja_mod_knowledge_saved(inputs)
	return en_mod_knowledge_saved(inputs)
});
