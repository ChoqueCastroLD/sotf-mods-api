/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_TitleInputs */

const en_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorize`)
};

const es_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorizar`)
};

const de_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Umkategorisieren`)
};

const fr_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recatégoriser`)
};

const it_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricategorizza`)
};

const nl_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herindelen`)
};

const pl_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiana kategorii`)
};

const pt_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorizar`)
};

const ru_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перекатегоризация`)
};

const sv_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omkategorisera`)
};

const tr_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden kategorilendir`)
};

const zh_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新分类`)
};

const ja_admin_recat_title = /** @type {(inputs: Admin_Recat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再分類`)
};

/**
* | output |
* | --- |
* | "Recategorize" |
*
* @param {Admin_Recat_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_title = /** @type {((inputs?: Admin_Recat_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_title(inputs)
	if (locale === "de") return de_admin_recat_title(inputs)
	if (locale === "fr") return fr_admin_recat_title(inputs)
	if (locale === "it") return it_admin_recat_title(inputs)
	if (locale === "nl") return nl_admin_recat_title(inputs)
	if (locale === "pl") return pl_admin_recat_title(inputs)
	if (locale === "pt") return pt_admin_recat_title(inputs)
	if (locale === "ru") return ru_admin_recat_title(inputs)
	if (locale === "sv") return sv_admin_recat_title(inputs)
	if (locale === "tr") return tr_admin_recat_title(inputs)
	if (locale === "zh") return zh_admin_recat_title(inputs)
	if (locale === "ja") return ja_admin_recat_title(inputs)
	return en_admin_recat_title(inputs)
});
