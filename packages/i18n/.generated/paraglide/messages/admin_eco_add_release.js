/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Add_ReleaseInputs */

const en_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add release`)
};

const es_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir versión`)
};

const de_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version hinzufügen`)
};

const fr_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une version`)
};

const it_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi versione`)
};

const nl_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release toevoegen`)
};

const pl_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj wydanie`)
};

const pt_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar versão`)
};

const ru_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить версию`)
};

const sv_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till version`)
};

const tr_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm ekle`)
};

const zh_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加版本`)
};

const ja_admin_eco_add_release = /** @type {(inputs: Admin_Eco_Add_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリースを追加`)
};

/**
* | output |
* | --- |
* | "Add release" |
*
* @param {Admin_Eco_Add_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_add_release = /** @type {((inputs?: Admin_Eco_Add_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Add_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_add_release(inputs)
	if (locale === "de") return de_admin_eco_add_release(inputs)
	if (locale === "fr") return fr_admin_eco_add_release(inputs)
	if (locale === "it") return it_admin_eco_add_release(inputs)
	if (locale === "nl") return nl_admin_eco_add_release(inputs)
	if (locale === "pl") return pl_admin_eco_add_release(inputs)
	if (locale === "pt") return pt_admin_eco_add_release(inputs)
	if (locale === "ru") return ru_admin_eco_add_release(inputs)
	if (locale === "sv") return sv_admin_eco_add_release(inputs)
	if (locale === "tr") return tr_admin_eco_add_release(inputs)
	if (locale === "zh") return zh_admin_eco_add_release(inputs)
	if (locale === "ja") return ja_admin_eco_add_release(inputs)
	return en_admin_eco_add_release(inputs)
});
