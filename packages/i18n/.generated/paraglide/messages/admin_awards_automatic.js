/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_AutomaticInputs */

const en_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatic`)
};

const es_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automático`)
};

const de_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch`)
};

const fr_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatique`)
};

const it_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatico`)
};

const nl_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisch`)
};

const pl_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatyczne`)
};

const pt_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automático`)
};

const ru_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автоматически`)
};

const sv_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisk`)
};

const tr_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik`)
};

const zh_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动`)
};

const ja_admin_awards_automatic = /** @type {(inputs: Admin_Awards_AutomaticInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動`)
};

/**
* | output |
* | --- |
* | "Automatic" |
*
* @param {Admin_Awards_AutomaticInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_automatic = /** @type {((inputs?: Admin_Awards_AutomaticInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_AutomaticInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_automatic(inputs)
	if (locale === "de") return de_admin_awards_automatic(inputs)
	if (locale === "fr") return fr_admin_awards_automatic(inputs)
	if (locale === "it") return it_admin_awards_automatic(inputs)
	if (locale === "nl") return nl_admin_awards_automatic(inputs)
	if (locale === "pl") return pl_admin_awards_automatic(inputs)
	if (locale === "pt") return pt_admin_awards_automatic(inputs)
	if (locale === "ru") return ru_admin_awards_automatic(inputs)
	if (locale === "sv") return sv_admin_awards_automatic(inputs)
	if (locale === "tr") return tr_admin_awards_automatic(inputs)
	if (locale === "zh") return zh_admin_awards_automatic(inputs)
	if (locale === "ja") return ja_admin_awards_automatic(inputs)
	return en_admin_awards_automatic(inputs)
});
