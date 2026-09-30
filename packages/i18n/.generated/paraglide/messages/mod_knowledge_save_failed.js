/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Save_FailedInputs */

const en_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not save`)
};

const es_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar`)
};

const de_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichern fehlgeschlagen`)
};

const fr_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de l’enregistrement`)
};

const it_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare`)
};

const nl_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan mislukt`)
};

const pl_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać`)
};

const pt_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar`)
};

const ru_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить`)
};

const sv_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte spara`)
};

const tr_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilemedi`)
};

const zh_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存`)
};

const ja_mod_knowledge_save_failed = /** @type {(inputs: Mod_Knowledge_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Could not save" |
*
* @param {Mod_Knowledge_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_save_failed = /** @type {((inputs?: Mod_Knowledge_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_save_failed(inputs)
	if (locale === "de") return de_mod_knowledge_save_failed(inputs)
	if (locale === "fr") return fr_mod_knowledge_save_failed(inputs)
	if (locale === "it") return it_mod_knowledge_save_failed(inputs)
	if (locale === "nl") return nl_mod_knowledge_save_failed(inputs)
	if (locale === "pl") return pl_mod_knowledge_save_failed(inputs)
	if (locale === "pt") return pt_mod_knowledge_save_failed(inputs)
	if (locale === "ru") return ru_mod_knowledge_save_failed(inputs)
	if (locale === "sv") return sv_mod_knowledge_save_failed(inputs)
	if (locale === "tr") return tr_mod_knowledge_save_failed(inputs)
	if (locale === "zh") return zh_mod_knowledge_save_failed(inputs)
	if (locale === "ja") return ja_mod_knowledge_save_failed(inputs)
	return en_mod_knowledge_save_failed(inputs)
});
