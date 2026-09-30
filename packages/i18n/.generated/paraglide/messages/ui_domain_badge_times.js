/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ui_Domain_Badge_TimesInputs */

const en_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const es_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const de_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const fr_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const it_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const nl_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const pl_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const pt_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const ru_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const sv_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const tr_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const zh_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const ja_ui_domain_badge_times = /** @type {(inputs: Ui_Domain_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

/**
* | output |
* | --- |
* | "×{count__number}" |
*
* @param {Ui_Domain_Badge_TimesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_badge_times = /** @type {((inputs: Ui_Domain_Badge_TimesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_TimesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_badge_times(inputs)
	if (locale === "de") return de_ui_domain_badge_times(inputs)
	if (locale === "fr") return fr_ui_domain_badge_times(inputs)
	if (locale === "it") return it_ui_domain_badge_times(inputs)
	if (locale === "nl") return nl_ui_domain_badge_times(inputs)
	if (locale === "pl") return pl_ui_domain_badge_times(inputs)
	if (locale === "pt") return pt_ui_domain_badge_times(inputs)
	if (locale === "ru") return ru_ui_domain_badge_times(inputs)
	if (locale === "sv") return sv_ui_domain_badge_times(inputs)
	if (locale === "tr") return tr_ui_domain_badge_times(inputs)
	if (locale === "zh") return zh_ui_domain_badge_times(inputs)
	if (locale === "ja") return ja_ui_domain_badge_times(inputs)
	return en_ui_domain_badge_times(inputs)
});
