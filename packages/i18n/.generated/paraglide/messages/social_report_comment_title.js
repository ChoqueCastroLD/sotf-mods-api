/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Comment_TitleInputs */

const en_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report this comment`)
};

const es_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar este comentario`)
};

const de_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Kommentar melden`)
};

const fr_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler ce commentaire`)
};

const it_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala questo commento`)
};

const nl_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze reactie melden`)
};

const pl_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś ten komentarz`)
};

const pt_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar este comentário`)
};

const ru_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться на комментарий`)
};

const sv_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäl den här kommentaren`)
};

const tr_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yorumu şikâyet et`)
};

const zh_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报这条评论`)
};

const ja_social_report_comment_title = /** @type {(inputs: Social_Report_Comment_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコメントを通報`)
};

/**
* | output |
* | --- |
* | "Report this comment" |
*
* @param {Social_Report_Comment_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_comment_title = /** @type {((inputs?: Social_Report_Comment_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Comment_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_comment_title(inputs)
	if (locale === "de") return de_social_report_comment_title(inputs)
	if (locale === "fr") return fr_social_report_comment_title(inputs)
	if (locale === "it") return it_social_report_comment_title(inputs)
	if (locale === "nl") return nl_social_report_comment_title(inputs)
	if (locale === "pl") return pl_social_report_comment_title(inputs)
	if (locale === "pt") return pt_social_report_comment_title(inputs)
	if (locale === "ru") return ru_social_report_comment_title(inputs)
	if (locale === "sv") return sv_social_report_comment_title(inputs)
	if (locale === "tr") return tr_social_report_comment_title(inputs)
	if (locale === "zh") return zh_social_report_comment_title(inputs)
	if (locale === "ja") return ja_social_report_comment_title(inputs)
	return en_social_report_comment_title(inputs)
});
