/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Badge_NsfwInputs */

const en_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const es_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const de_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const fr_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const it_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const nl_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const pl_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const pt_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const ru_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const sv_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const tr_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const zh_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

const ja_ui_domain_badge_nsfw = /** @type {(inputs: Ui_Domain_Badge_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+`)
};

/**
* | output |
* | --- |
* | "18+" |
*
* @param {Ui_Domain_Badge_NsfwInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_badge_nsfw = /** @type {((inputs?: Ui_Domain_Badge_NsfwInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_NsfwInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_badge_nsfw(inputs)
	if (locale === "de") return de_ui_domain_badge_nsfw(inputs)
	if (locale === "fr") return fr_ui_domain_badge_nsfw(inputs)
	if (locale === "it") return it_ui_domain_badge_nsfw(inputs)
	if (locale === "nl") return nl_ui_domain_badge_nsfw(inputs)
	if (locale === "pl") return pl_ui_domain_badge_nsfw(inputs)
	if (locale === "pt") return pt_ui_domain_badge_nsfw(inputs)
	if (locale === "ru") return ru_ui_domain_badge_nsfw(inputs)
	if (locale === "sv") return sv_ui_domain_badge_nsfw(inputs)
	if (locale === "tr") return tr_ui_domain_badge_nsfw(inputs)
	if (locale === "zh") return zh_ui_domain_badge_nsfw(inputs)
	if (locale === "ja") return ja_ui_domain_badge_nsfw(inputs)
	return en_ui_domain_badge_nsfw(inputs)
});
