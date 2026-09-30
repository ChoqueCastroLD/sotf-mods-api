/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comment_SubmitInputs */

const en_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment`)
};

const es_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentar`)
};

const de_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentieren`)
};

const fr_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenter`)
};

const it_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenta`)
};

const nl_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reageren`)
};

const pl_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skomentuj`)
};

const pt_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentar`)
};

const ru_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментировать`)
};

const sv_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentera`)
};

const tr_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yap`)
};

const zh_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_requests_comment_submit = /** @type {(inputs: Requests_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントする`)
};

/**
* | output |
* | --- |
* | "Comment" |
*
* @param {Requests_Comment_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comment_submit = /** @type {((inputs?: Requests_Comment_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comment_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comment_submit(inputs)
	if (locale === "de") return de_requests_comment_submit(inputs)
	if (locale === "fr") return fr_requests_comment_submit(inputs)
	if (locale === "it") return it_requests_comment_submit(inputs)
	if (locale === "nl") return nl_requests_comment_submit(inputs)
	if (locale === "pl") return pl_requests_comment_submit(inputs)
	if (locale === "pt") return pt_requests_comment_submit(inputs)
	if (locale === "ru") return ru_requests_comment_submit(inputs)
	if (locale === "sv") return sv_requests_comment_submit(inputs)
	if (locale === "tr") return tr_requests_comment_submit(inputs)
	if (locale === "zh") return zh_requests_comment_submit(inputs)
	if (locale === "ja") return ja_requests_comment_submit(inputs)
	return en_requests_comment_submit(inputs)
});
