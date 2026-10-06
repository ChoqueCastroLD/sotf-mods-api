/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_Badge_RangerInputs */

const en_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const es_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderador`)
};

const de_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const fr_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modérateur`)
};

const it_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatore`)
};

const nl_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const pl_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const pt_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderador`)
};

const ru_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модератор`)
};

const sv_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator`)
};

const tr_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatör`)
};

const zh_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核员`)
};

const ja_ui_domain_comment_badge_ranger = /** @type {(inputs: Ui_Domain_Comment_Badge_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーター`)
};

/**
* | output |
* | --- |
* | "Moderator" |
*
* @param {Ui_Domain_Comment_Badge_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_badge_ranger = /** @type {((inputs?: Ui_Domain_Comment_Badge_RangerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_Badge_RangerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_badge_ranger(inputs)
	if (locale === "de") return de_ui_domain_comment_badge_ranger(inputs)
	if (locale === "fr") return fr_ui_domain_comment_badge_ranger(inputs)
	if (locale === "it") return it_ui_domain_comment_badge_ranger(inputs)
	if (locale === "nl") return nl_ui_domain_comment_badge_ranger(inputs)
	if (locale === "pl") return pl_ui_domain_comment_badge_ranger(inputs)
	if (locale === "pt") return pt_ui_domain_comment_badge_ranger(inputs)
	if (locale === "ru") return ru_ui_domain_comment_badge_ranger(inputs)
	if (locale === "sv") return sv_ui_domain_comment_badge_ranger(inputs)
	if (locale === "tr") return tr_ui_domain_comment_badge_ranger(inputs)
	if (locale === "zh") return zh_ui_domain_comment_badge_ranger(inputs)
	if (locale === "ja") return ja_ui_domain_comment_badge_ranger(inputs)
	return en_ui_domain_comment_badge_ranger(inputs)
});
