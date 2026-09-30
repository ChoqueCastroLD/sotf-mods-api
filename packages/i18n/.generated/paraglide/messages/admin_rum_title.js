/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_TitleInputs */

const en_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Performance`)
};

const es_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rendimiento`)
};

const de_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leistung`)
};

const fr_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Performances`)
};

const it_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestazioni`)
};

const nl_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestaties`)
};

const pl_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydajność`)
};

const pt_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desempenho`)
};

const ru_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Производительность`)
};

const sv_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestanda`)
};

const tr_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Performans`)
};

const zh_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`性能`)
};

const ja_admin_rum_title = /** @type {(inputs: Admin_Rum_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パフォーマンス`)
};

/**
* | output |
* | --- |
* | "Performance" |
*
* @param {Admin_Rum_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_title = /** @type {((inputs?: Admin_Rum_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_title(inputs)
	if (locale === "de") return de_admin_rum_title(inputs)
	if (locale === "fr") return fr_admin_rum_title(inputs)
	if (locale === "it") return it_admin_rum_title(inputs)
	if (locale === "nl") return nl_admin_rum_title(inputs)
	if (locale === "pl") return pl_admin_rum_title(inputs)
	if (locale === "pt") return pt_admin_rum_title(inputs)
	if (locale === "ru") return ru_admin_rum_title(inputs)
	if (locale === "sv") return sv_admin_rum_title(inputs)
	if (locale === "tr") return tr_admin_rum_title(inputs)
	if (locale === "zh") return zh_admin_rum_title(inputs)
	if (locale === "ja") return ja_admin_rum_title(inputs)
	return en_admin_rum_title(inputs)
});
