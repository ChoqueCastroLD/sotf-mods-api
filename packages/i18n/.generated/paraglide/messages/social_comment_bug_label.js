/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_Bug_LabelInputs */

const en_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is a bug report`)
};

const es_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es un reporte de bug`)
};

const de_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist ein Fehlerbericht`)
};

const fr_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est un rapport de bug`)
};

const it_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È una segnalazione di bug`)
};

const nl_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is een bugmelding`)
};

const pl_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To zgłoszenie błędu`)
};

const pt_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`É um relato de bug`)
};

const ru_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это сообщение об ошибке`)
};

const sv_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här är en buggrapport`)
};

const tr_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bir hata bildirimi`)
};

const zh_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是一个错误报告`)
};

const ja_social_comment_bug_label = /** @type {(inputs: Social_Comment_Bug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これはバグ報告です`)
};

/**
* | output |
* | --- |
* | "This is a bug report" |
*
* @param {Social_Comment_Bug_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_bug_label = /** @type {((inputs?: Social_Comment_Bug_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Bug_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_bug_label(inputs)
	if (locale === "de") return de_social_comment_bug_label(inputs)
	if (locale === "fr") return fr_social_comment_bug_label(inputs)
	if (locale === "it") return it_social_comment_bug_label(inputs)
	if (locale === "nl") return nl_social_comment_bug_label(inputs)
	if (locale === "pl") return pl_social_comment_bug_label(inputs)
	if (locale === "pt") return pt_social_comment_bug_label(inputs)
	if (locale === "ru") return ru_social_comment_bug_label(inputs)
	if (locale === "sv") return sv_social_comment_bug_label(inputs)
	if (locale === "tr") return tr_social_comment_bug_label(inputs)
	if (locale === "zh") return zh_social_comment_bug_label(inputs)
	if (locale === "ja") return ja_social_comment_bug_label(inputs)
	return en_social_comment_bug_label(inputs)
});
