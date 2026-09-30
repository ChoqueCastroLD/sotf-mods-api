/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Badge_NewInputs */

const en_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New`)
};

const es_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevos`)
};

const de_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu`)
};

const fr_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux`)
};

const it_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovi`)
};

const nl_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw`)
};

const pl_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe`)
};

const pt_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos`)
};

const ru_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya`)
};

const tr_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni`)
};

const zh_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_ui_domain_badge_new = /** @type {(inputs: Ui_Domain_Badge_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着`)
};

/**
* | output |
* | --- |
* | "New" |
*
* @param {Ui_Domain_Badge_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_badge_new = /** @type {((inputs?: Ui_Domain_Badge_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_badge_new(inputs)
	if (locale === "de") return de_ui_domain_badge_new(inputs)
	if (locale === "fr") return fr_ui_domain_badge_new(inputs)
	if (locale === "it") return it_ui_domain_badge_new(inputs)
	if (locale === "nl") return nl_ui_domain_badge_new(inputs)
	if (locale === "pl") return pl_ui_domain_badge_new(inputs)
	if (locale === "pt") return pt_ui_domain_badge_new(inputs)
	if (locale === "ru") return ru_ui_domain_badge_new(inputs)
	if (locale === "sv") return sv_ui_domain_badge_new(inputs)
	if (locale === "tr") return tr_ui_domain_badge_new(inputs)
	if (locale === "zh") return zh_ui_domain_badge_new(inputs)
	if (locale === "ja") return ja_ui_domain_badge_new(inputs)
	return en_ui_domain_badge_new(inputs)
});
