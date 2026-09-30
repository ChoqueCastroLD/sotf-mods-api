/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Badge_TimesInputs */

const en_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const es_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const de_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const fr_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const it_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const nl_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const pl_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const pt_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const ru_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const sv_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const tr_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const zh_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

const ja_profile_badge_times = /** @type {(inputs: Profile_Badge_TimesInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`×${count__number}`)
};

/**
* | output |
* | --- |
* | "×{count__number}" |
*
* @param {Profile_Badge_TimesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_times = /** @type {((inputs: Profile_Badge_TimesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_TimesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_times(inputs)
	if (locale === "de") return de_profile_badge_times(inputs)
	if (locale === "fr") return fr_profile_badge_times(inputs)
	if (locale === "it") return it_profile_badge_times(inputs)
	if (locale === "nl") return nl_profile_badge_times(inputs)
	if (locale === "pl") return pl_profile_badge_times(inputs)
	if (locale === "pt") return pt_profile_badge_times(inputs)
	if (locale === "ru") return ru_profile_badge_times(inputs)
	if (locale === "sv") return sv_profile_badge_times(inputs)
	if (locale === "tr") return tr_profile_badge_times(inputs)
	if (locale === "zh") return zh_profile_badge_times(inputs)
	if (locale === "ja") return ja_profile_badge_times(inputs)
	return en_profile_badge_times(inputs)
});
