/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_TitleInputs */

const en_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const es_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administración`)
};

const de_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administration`)
};

const fr_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administration`)
};

const it_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Amministrazione`)
};

const nl_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheer`)
};

const pl_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administracja`)
};

const pt_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administração`)
};

const ru_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Администрирование`)
};

const sv_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administration`)
};

const tr_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetim`)
};

const zh_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理`)
};

const ja_admin_title = /** @type {(inputs: Admin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理`)
};

/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Admin_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_title = /** @type {((inputs?: Admin_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_title(inputs)
	if (locale === "de") return de_admin_title(inputs)
	if (locale === "fr") return fr_admin_title(inputs)
	if (locale === "it") return it_admin_title(inputs)
	if (locale === "nl") return nl_admin_title(inputs)
	if (locale === "pl") return pl_admin_title(inputs)
	if (locale === "pt") return pt_admin_title(inputs)
	if (locale === "ru") return ru_admin_title(inputs)
	if (locale === "sv") return sv_admin_title(inputs)
	if (locale === "tr") return tr_admin_title(inputs)
	if (locale === "zh") return zh_admin_title(inputs)
	if (locale === "ja") return ja_admin_title(inputs)
	return en_admin_title(inputs)
});
