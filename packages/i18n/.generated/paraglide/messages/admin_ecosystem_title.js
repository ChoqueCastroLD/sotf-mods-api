/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ecosystem_TitleInputs */

const en_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosystem`)
};

const es_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosistema`)
};

const de_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ökosystem`)
};

const fr_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écosystème`)
};

const it_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosistema`)
};

const nl_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecosysteem`)
};

const pl_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekosystem`)
};

const pt_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecossistema`)
};

const ru_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экосистема`)
};

const sv_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekosystem`)
};

const tr_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekosistem`)
};

const zh_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生态`)
};

const ja_admin_ecosystem_title = /** @type {(inputs: Admin_Ecosystem_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エコシステム`)
};

/**
* | output |
* | --- |
* | "Ecosystem" |
*
* @param {Admin_Ecosystem_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ecosystem_title = /** @type {((inputs?: Admin_Ecosystem_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ecosystem_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ecosystem_title(inputs)
	if (locale === "de") return de_admin_ecosystem_title(inputs)
	if (locale === "fr") return fr_admin_ecosystem_title(inputs)
	if (locale === "it") return it_admin_ecosystem_title(inputs)
	if (locale === "nl") return nl_admin_ecosystem_title(inputs)
	if (locale === "pl") return pl_admin_ecosystem_title(inputs)
	if (locale === "pt") return pt_admin_ecosystem_title(inputs)
	if (locale === "ru") return ru_admin_ecosystem_title(inputs)
	if (locale === "sv") return sv_admin_ecosystem_title(inputs)
	if (locale === "tr") return tr_admin_ecosystem_title(inputs)
	if (locale === "zh") return zh_admin_ecosystem_title(inputs)
	if (locale === "ja") return ja_admin_ecosystem_title(inputs)
	return en_admin_ecosystem_title(inputs)
});
