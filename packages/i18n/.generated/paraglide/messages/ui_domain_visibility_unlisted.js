/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Visibility_UnlistedInputs */

const en_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlisted`)
};

const es_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto`)
};

const de_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gelistet`)
};

const fr_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non listé`)
};

const it_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non elencata`)
};

const nl_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet vermeld`)
};

const pl_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niewidoczny na listach`)
};

const pt_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fora das listas`)
};

const ru_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт из списков`)
};

const sv_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olistad`)
};

const tr_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelenmiyor`)
};

const zh_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未列出`)
};

const ja_ui_domain_visibility_unlisted = /** @type {(inputs: Ui_Domain_Visibility_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Unlisted" |
*
* @param {Ui_Domain_Visibility_UnlistedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_visibility_unlisted = /** @type {((inputs?: Ui_Domain_Visibility_UnlistedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Visibility_UnlistedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_visibility_unlisted(inputs)
	if (locale === "de") return de_ui_domain_visibility_unlisted(inputs)
	if (locale === "fr") return fr_ui_domain_visibility_unlisted(inputs)
	if (locale === "it") return it_ui_domain_visibility_unlisted(inputs)
	if (locale === "nl") return nl_ui_domain_visibility_unlisted(inputs)
	if (locale === "pl") return pl_ui_domain_visibility_unlisted(inputs)
	if (locale === "pt") return pt_ui_domain_visibility_unlisted(inputs)
	if (locale === "ru") return ru_ui_domain_visibility_unlisted(inputs)
	if (locale === "sv") return sv_ui_domain_visibility_unlisted(inputs)
	if (locale === "tr") return tr_ui_domain_visibility_unlisted(inputs)
	if (locale === "zh") return zh_ui_domain_visibility_unlisted(inputs)
	if (locale === "ja") return ja_ui_domain_visibility_unlisted(inputs)
	return en_ui_domain_visibility_unlisted(inputs)
});
