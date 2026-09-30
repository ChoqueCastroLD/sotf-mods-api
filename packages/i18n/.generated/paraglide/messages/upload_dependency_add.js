/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_AddInputs */

const en_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

const es_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir`)
};

const de_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzufügen`)
};

const fr_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter`)
};

const it_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi`)
};

const nl_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toevoegen`)
};

const pl_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj`)
};

const pt_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar`)
};

const ru_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить`)
};

const sv_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till`)
};

const tr_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekle`)
};

const zh_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const ja_upload_dependency_add = /** @type {(inputs: Upload_Dependency_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Upload_Dependency_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_add = /** @type {((inputs?: Upload_Dependency_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_add(inputs)
	if (locale === "de") return de_upload_dependency_add(inputs)
	if (locale === "fr") return fr_upload_dependency_add(inputs)
	if (locale === "it") return it_upload_dependency_add(inputs)
	if (locale === "nl") return nl_upload_dependency_add(inputs)
	if (locale === "pl") return pl_upload_dependency_add(inputs)
	if (locale === "pt") return pt_upload_dependency_add(inputs)
	if (locale === "ru") return ru_upload_dependency_add(inputs)
	if (locale === "sv") return sv_upload_dependency_add(inputs)
	if (locale === "tr") return tr_upload_dependency_add(inputs)
	if (locale === "zh") return zh_upload_dependency_add(inputs)
	if (locale === "ja") return ja_upload_dependency_add(inputs)
	return en_upload_dependency_add(inputs)
});
