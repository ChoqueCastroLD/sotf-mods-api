/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_Badge_AuthorInputs */

const en_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const es_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador`)
};

const de_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller`)
};

const fr_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur`)
};

const it_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore`)
};

const nl_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca`)
};

const pt_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador`)
};

const ru_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı`)
};

const zh_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

const ja_ui_domain_comment_badge_author = /** @type {(inputs: Ui_Domain_Comment_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Ui_Domain_Comment_Badge_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_badge_author = /** @type {((inputs?: Ui_Domain_Comment_Badge_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_Badge_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_badge_author(inputs)
	if (locale === "de") return de_ui_domain_comment_badge_author(inputs)
	if (locale === "fr") return fr_ui_domain_comment_badge_author(inputs)
	if (locale === "it") return it_ui_domain_comment_badge_author(inputs)
	if (locale === "nl") return nl_ui_domain_comment_badge_author(inputs)
	if (locale === "pl") return pl_ui_domain_comment_badge_author(inputs)
	if (locale === "pt") return pt_ui_domain_comment_badge_author(inputs)
	if (locale === "ru") return ru_ui_domain_comment_badge_author(inputs)
	if (locale === "sv") return sv_ui_domain_comment_badge_author(inputs)
	if (locale === "tr") return tr_ui_domain_comment_badge_author(inputs)
	if (locale === "zh") return zh_ui_domain_comment_badge_author(inputs)
	if (locale === "ja") return ja_ui_domain_comment_badge_author(inputs)
	return en_ui_domain_comment_badge_author(inputs)
});
