/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_PreparingInputs */

const en_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparing the changes…`)
};

const es_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparando los cambios…`)
};

const de_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen werden vorbereitet …`)
};

const fr_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préparation des changements…`)
};

const it_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparazione delle modifiche…`)
};

const nl_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen voorbereiden…`)
};

const pl_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przygotowywanie zmian…`)
};

const pt_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparando as alterações…`)
};

const ru_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готовим изменения…`)
};

const sv_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förbereder ändringarna …`)
};

const tr_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikler hazırlanıyor…`)
};

const zh_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在准备更改……`)
};

const ja_admin_recat_preparing = /** @type {(inputs: Admin_Recat_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を準備しています…`)
};

/**
* | output |
* | --- |
* | "Preparing the changes…" |
*
* @param {Admin_Recat_PreparingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_preparing = /** @type {((inputs?: Admin_Recat_PreparingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_PreparingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_preparing(inputs)
	if (locale === "de") return de_admin_recat_preparing(inputs)
	if (locale === "fr") return fr_admin_recat_preparing(inputs)
	if (locale === "it") return it_admin_recat_preparing(inputs)
	if (locale === "nl") return nl_admin_recat_preparing(inputs)
	if (locale === "pl") return pl_admin_recat_preparing(inputs)
	if (locale === "pt") return pt_admin_recat_preparing(inputs)
	if (locale === "ru") return ru_admin_recat_preparing(inputs)
	if (locale === "sv") return sv_admin_recat_preparing(inputs)
	if (locale === "tr") return tr_admin_recat_preparing(inputs)
	if (locale === "zh") return zh_admin_recat_preparing(inputs)
	if (locale === "ja") return ja_admin_recat_preparing(inputs)
	return en_admin_recat_preparing(inputs)
});
