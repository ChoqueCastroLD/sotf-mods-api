/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_CommentsInputs */

const en_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

const es_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios`)
};

const de_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare`)
};

const fr_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires`)
};

const it_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti`)
};

const nl_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze`)
};

const pt_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários`)
};

const ru_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии`)
};

const sv_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer`)
};

const tr_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar`)
};

const zh_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_ranger_lane_comments = /** @type {(inputs: Ranger_Lane_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Ranger_Lane_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_comments = /** @type {((inputs?: Ranger_Lane_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_comments(inputs)
	if (locale === "de") return de_ranger_lane_comments(inputs)
	if (locale === "fr") return fr_ranger_lane_comments(inputs)
	if (locale === "it") return it_ranger_lane_comments(inputs)
	if (locale === "nl") return nl_ranger_lane_comments(inputs)
	if (locale === "pl") return pl_ranger_lane_comments(inputs)
	if (locale === "pt") return pt_ranger_lane_comments(inputs)
	if (locale === "ru") return ru_ranger_lane_comments(inputs)
	if (locale === "sv") return sv_ranger_lane_comments(inputs)
	if (locale === "tr") return tr_ranger_lane_comments(inputs)
	if (locale === "zh") return zh_ranger_lane_comments(inputs)
	if (locale === "ja") return ja_ranger_lane_comments(inputs)
	return en_ranger_lane_comments(inputs)
});
