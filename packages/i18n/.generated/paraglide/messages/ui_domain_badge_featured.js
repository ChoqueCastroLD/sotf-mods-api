/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Badge_FeaturedInputs */

const en_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured`)
};

const es_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destacada`)
};

const de_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hervorgehoben`)
};

const fr_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis en avant`)
};

const it_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In evidenza`)
};

const nl_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgelicht`)
};

const pl_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżniona`)
};

const pt_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em destaque`)
};

const ru_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Избранный`)
};

const sv_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalt`)
};

const tr_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan`)
};

const zh_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精选`)
};

const ja_ui_domain_badge_featured = /** @type {(inputs: Ui_Domain_Badge_FeaturedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注目`)
};

/**
* | output |
* | --- |
* | "Featured" |
*
* @param {Ui_Domain_Badge_FeaturedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_badge_featured = /** @type {((inputs?: Ui_Domain_Badge_FeaturedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_FeaturedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_badge_featured(inputs)
	if (locale === "de") return de_ui_domain_badge_featured(inputs)
	if (locale === "fr") return fr_ui_domain_badge_featured(inputs)
	if (locale === "it") return it_ui_domain_badge_featured(inputs)
	if (locale === "nl") return nl_ui_domain_badge_featured(inputs)
	if (locale === "pl") return pl_ui_domain_badge_featured(inputs)
	if (locale === "pt") return pt_ui_domain_badge_featured(inputs)
	if (locale === "ru") return ru_ui_domain_badge_featured(inputs)
	if (locale === "sv") return sv_ui_domain_badge_featured(inputs)
	if (locale === "tr") return tr_ui_domain_badge_featured(inputs)
	if (locale === "zh") return zh_ui_domain_badge_featured(inputs)
	if (locale === "ja") return ja_ui_domain_badge_featured(inputs)
	return en_ui_domain_badge_featured(inputs)
});
