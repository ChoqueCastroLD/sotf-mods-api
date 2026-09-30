/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Empty_CommentsInputs */

const en_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments are waiting for review.`)
};

const es_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay comentarios pendientes de revisión.`)
};

const de_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Kommentare warten auf Prüfung.`)
};

const fr_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun commentaire en attente de revue.`)
};

const it_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun commento in attesa di revisione.`)
};

const nl_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er wachten geen reacties op controle.`)
};

const pl_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden komentarz nie czeka na przegląd.`)
};

const pt_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum comentário aguardando revisão.`)
};

const ru_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет комментариев, ожидающих проверки.`)
};

const sv_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kommentarer väntar på granskning.`)
};

const tr_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme bekleyen yorum yok.`)
};

const zh_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有等待审核的评论。`)
};

const ja_ranger_lane_empty_comments = /** @type {(inputs: Ranger_Lane_Empty_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー待ちのコメントはありません。`)
};

/**
* | output |
* | --- |
* | "No comments are waiting for review." |
*
* @param {Ranger_Lane_Empty_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_empty_comments = /** @type {((inputs?: Ranger_Lane_Empty_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Empty_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_empty_comments(inputs)
	if (locale === "de") return de_ranger_lane_empty_comments(inputs)
	if (locale === "fr") return fr_ranger_lane_empty_comments(inputs)
	if (locale === "it") return it_ranger_lane_empty_comments(inputs)
	if (locale === "nl") return nl_ranger_lane_empty_comments(inputs)
	if (locale === "pl") return pl_ranger_lane_empty_comments(inputs)
	if (locale === "pt") return pt_ranger_lane_empty_comments(inputs)
	if (locale === "ru") return ru_ranger_lane_empty_comments(inputs)
	if (locale === "sv") return sv_ranger_lane_empty_comments(inputs)
	if (locale === "tr") return tr_ranger_lane_empty_comments(inputs)
	if (locale === "zh") return zh_ranger_lane_empty_comments(inputs)
	if (locale === "ja") return ja_ranger_lane_empty_comments(inputs)
	return en_ranger_lane_empty_comments(inputs)
});
