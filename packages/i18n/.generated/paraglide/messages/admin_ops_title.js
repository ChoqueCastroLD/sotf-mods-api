/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_TitleInputs */

const en_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operations`)
};

const es_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operaciones`)
};

const de_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrieb`)
};

const fr_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exploitation`)
};

const it_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operazioni`)
};

const nl_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheer`)
};

const pl_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operacje`)
};

const pt_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operações`)
};

const ru_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эксплуатация`)
};

const sv_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drift`)
};

const tr_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operasyon`)
};

const zh_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运维`)
};

const ja_admin_ops_title = /** @type {(inputs: Admin_Ops_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`運用`)
};

/**
* | output |
* | --- |
* | "Operations" |
*
* @param {Admin_Ops_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_title = /** @type {((inputs?: Admin_Ops_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_title(inputs)
	if (locale === "de") return de_admin_ops_title(inputs)
	if (locale === "fr") return fr_admin_ops_title(inputs)
	if (locale === "it") return it_admin_ops_title(inputs)
	if (locale === "nl") return nl_admin_ops_title(inputs)
	if (locale === "pl") return pl_admin_ops_title(inputs)
	if (locale === "pt") return pt_admin_ops_title(inputs)
	if (locale === "ru") return ru_admin_ops_title(inputs)
	if (locale === "sv") return sv_admin_ops_title(inputs)
	if (locale === "tr") return tr_admin_ops_title(inputs)
	if (locale === "zh") return zh_admin_ops_title(inputs)
	if (locale === "ja") return ja_admin_ops_title(inputs)
	return en_admin_ops_title(inputs)
});
