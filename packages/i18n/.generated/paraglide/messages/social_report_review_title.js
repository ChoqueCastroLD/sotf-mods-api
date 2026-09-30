/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Review_TitleInputs */

const en_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report this review`)
};

const es_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar esta reseña`)
};

const de_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Bewertung melden`)
};

const fr_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler cet avis`)
};

const it_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala questa recensione`)
};

const nl_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze review melden`)
};

const pl_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś tę recenzję`)
};

const pt_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar esta avaliação`)
};

const ru_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться на отзыв`)
};

const sv_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäl den här recensionen`)
};

const tr_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu incelemeyi şikâyet et`)
};

const zh_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报这条评价`)
};

const ja_social_report_review_title = /** @type {(inputs: Social_Report_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このレビューを通報`)
};

/**
* | output |
* | --- |
* | "Report this review" |
*
* @param {Social_Report_Review_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_review_title = /** @type {((inputs?: Social_Report_Review_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Review_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_review_title(inputs)
	if (locale === "de") return de_social_report_review_title(inputs)
	if (locale === "fr") return fr_social_report_review_title(inputs)
	if (locale === "it") return it_social_report_review_title(inputs)
	if (locale === "nl") return nl_social_report_review_title(inputs)
	if (locale === "pl") return pl_social_report_review_title(inputs)
	if (locale === "pt") return pt_social_report_review_title(inputs)
	if (locale === "ru") return ru_social_report_review_title(inputs)
	if (locale === "sv") return sv_social_report_review_title(inputs)
	if (locale === "tr") return tr_social_report_review_title(inputs)
	if (locale === "zh") return zh_social_report_review_title(inputs)
	if (locale === "ja") return ja_social_report_review_title(inputs)
	return en_social_report_review_title(inputs)
});
