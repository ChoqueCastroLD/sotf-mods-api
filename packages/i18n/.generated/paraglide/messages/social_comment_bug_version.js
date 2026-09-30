/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_Bug_VersionInputs */

const en_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version with the bug`)
};

const es_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión con el bug`)
};

const de_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version mit dem Fehler`)
};

const fr_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version concernée`)
};

const it_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione con il bug`)
};

const nl_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie met de bug`)
};

const pl_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja z błędem`)
};

const pt_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão com o bug`)
};

const ru_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия с ошибкой`)
};

const sv_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version med buggen`)
};

const tr_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hatalı sürüm`)
};

const zh_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出现错误的版本`)
};

const ja_social_comment_bug_version = /** @type {(inputs: Social_Comment_Bug_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不具合のあるバージョン`)
};

/**
* | output |
* | --- |
* | "Version with the bug" |
*
* @param {Social_Comment_Bug_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_bug_version = /** @type {((inputs?: Social_Comment_Bug_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Bug_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_bug_version(inputs)
	if (locale === "de") return de_social_comment_bug_version(inputs)
	if (locale === "fr") return fr_social_comment_bug_version(inputs)
	if (locale === "it") return it_social_comment_bug_version(inputs)
	if (locale === "nl") return nl_social_comment_bug_version(inputs)
	if (locale === "pl") return pl_social_comment_bug_version(inputs)
	if (locale === "pt") return pt_social_comment_bug_version(inputs)
	if (locale === "ru") return ru_social_comment_bug_version(inputs)
	if (locale === "sv") return sv_social_comment_bug_version(inputs)
	if (locale === "tr") return tr_social_comment_bug_version(inputs)
	if (locale === "zh") return zh_social_comment_bug_version(inputs)
	if (locale === "ja") return ja_social_comment_bug_version(inputs)
	return en_social_comment_bug_version(inputs)
});
