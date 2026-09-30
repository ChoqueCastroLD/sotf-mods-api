/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Kind_CommentsInputs */

const en_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

const es_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios`)
};

const de_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare`)
};

const fr_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires`)
};

const it_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti`)
};

const nl_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze`)
};

const pt_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários`)
};

const ru_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии`)
};

const sv_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer`)
};

const tr_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar`)
};

const zh_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_profile_activity_kind_comments = /** @type {(inputs: Profile_Activity_Kind_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Profile_Activity_Kind_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_kind_comments = /** @type {((inputs?: Profile_Activity_Kind_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Kind_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_kind_comments(inputs)
	if (locale === "de") return de_profile_activity_kind_comments(inputs)
	if (locale === "fr") return fr_profile_activity_kind_comments(inputs)
	if (locale === "it") return it_profile_activity_kind_comments(inputs)
	if (locale === "nl") return nl_profile_activity_kind_comments(inputs)
	if (locale === "pl") return pl_profile_activity_kind_comments(inputs)
	if (locale === "pt") return pt_profile_activity_kind_comments(inputs)
	if (locale === "ru") return ru_profile_activity_kind_comments(inputs)
	if (locale === "sv") return sv_profile_activity_kind_comments(inputs)
	if (locale === "tr") return tr_profile_activity_kind_comments(inputs)
	if (locale === "zh") return zh_profile_activity_kind_comments(inputs)
	if (locale === "ja") return ja_profile_activity_kind_comments(inputs)
	return en_profile_activity_kind_comments(inputs)
});
