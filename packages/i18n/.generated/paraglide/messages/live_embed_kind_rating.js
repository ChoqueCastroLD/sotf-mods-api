/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_Kind_RatingInputs */

const en_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rating`)
};

const es_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valoración`)
};

const de_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung`)
};

const fr_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const it_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutazione`)
};

const nl_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeling`)
};

const pl_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocena`)
};

const pt_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação`)
};

const ru_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейтинг`)
};

const sv_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betyg`)
};

const tr_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan`)
};

const zh_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分`)
};

const ja_live_embed_kind_rating = /** @type {(inputs: Live_Embed_Kind_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価`)
};

/**
* | output |
* | --- |
* | "Rating" |
*
* @param {Live_Embed_Kind_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_kind_rating = /** @type {((inputs?: Live_Embed_Kind_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Kind_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_kind_rating(inputs)
	if (locale === "de") return de_live_embed_kind_rating(inputs)
	if (locale === "fr") return fr_live_embed_kind_rating(inputs)
	if (locale === "it") return it_live_embed_kind_rating(inputs)
	if (locale === "nl") return nl_live_embed_kind_rating(inputs)
	if (locale === "pl") return pl_live_embed_kind_rating(inputs)
	if (locale === "pt") return pt_live_embed_kind_rating(inputs)
	if (locale === "ru") return ru_live_embed_kind_rating(inputs)
	if (locale === "sv") return sv_live_embed_kind_rating(inputs)
	if (locale === "tr") return tr_live_embed_kind_rating(inputs)
	if (locale === "zh") return zh_live_embed_kind_rating(inputs)
	if (locale === "ja") return ja_live_embed_kind_rating(inputs)
	return en_live_embed_kind_rating(inputs)
});
