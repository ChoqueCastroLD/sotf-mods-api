/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_DeleteInputs */

const en_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Withdraw`)
};

const es_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar`)
};

const de_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückziehen`)
};

const fr_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer`)
};

const it_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoca`)
};

const nl_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intrekken`)
};

const pl_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odbierz`)
};

const pt_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar`)
};

const ru_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвать`)
};

const sv_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra tillbaka`)
};

const tr_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri al`)
};

const zh_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_admin_awards_delete = /** @type {(inputs: Admin_Awards_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り消す`)
};

/**
* | output |
* | --- |
* | "Withdraw" |
*
* @param {Admin_Awards_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_delete = /** @type {((inputs?: Admin_Awards_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_delete(inputs)
	if (locale === "de") return de_admin_awards_delete(inputs)
	if (locale === "fr") return fr_admin_awards_delete(inputs)
	if (locale === "it") return it_admin_awards_delete(inputs)
	if (locale === "nl") return nl_admin_awards_delete(inputs)
	if (locale === "pl") return pl_admin_awards_delete(inputs)
	if (locale === "pt") return pt_admin_awards_delete(inputs)
	if (locale === "ru") return ru_admin_awards_delete(inputs)
	if (locale === "sv") return sv_admin_awards_delete(inputs)
	if (locale === "tr") return tr_admin_awards_delete(inputs)
	if (locale === "zh") return zh_admin_awards_delete(inputs)
	if (locale === "ja") return ja_admin_awards_delete(inputs)
	return en_admin_awards_delete(inputs)
});
