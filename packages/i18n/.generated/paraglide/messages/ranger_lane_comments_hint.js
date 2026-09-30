/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Comments_HintInputs */

const en_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments held for review before anyone can read them.`)
};

const es_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios retenidos para revisión antes de que nadie pueda leerlos.`)
};

const de_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare, die vor dem Erscheinen geprüft werden.`)
};

const fr_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires retenus pour revue avant d’être visibles.`)
};

const it_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti trattenuti per la revisione prima che qualcuno possa leggerli.`)
};

const nl_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties die worden vastgehouden voor controle voordat iemand ze kan lezen.`)
};

const pl_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze wstrzymane do przeglądu, zanim ktokolwiek je przeczyta.`)
};

const pt_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários retidos para revisão antes que alguém possa lê-los.`)
};

const ru_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии, задержанные для проверки до того, как их кто-то прочтёт.`)
};

const sv_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer som hålls kvar för granskning innan någon kan läsa dem.`)
};

const tr_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimse okuyamadan önce incelemeye alınan yorumlar.`)
};

const zh_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在他人可见之前被暂扣待审的评论。`)
};

const ja_ranger_lane_comments_hint = /** @type {(inputs: Ranger_Lane_Comments_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰かが読む前にレビューのため保留されたコメント。`)
};

/**
* | output |
* | --- |
* | "Comments held for review before anyone can read them." |
*
* @param {Ranger_Lane_Comments_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_comments_hint = /** @type {((inputs?: Ranger_Lane_Comments_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Comments_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_comments_hint(inputs)
	if (locale === "de") return de_ranger_lane_comments_hint(inputs)
	if (locale === "fr") return fr_ranger_lane_comments_hint(inputs)
	if (locale === "it") return it_ranger_lane_comments_hint(inputs)
	if (locale === "nl") return nl_ranger_lane_comments_hint(inputs)
	if (locale === "pl") return pl_ranger_lane_comments_hint(inputs)
	if (locale === "pt") return pt_ranger_lane_comments_hint(inputs)
	if (locale === "ru") return ru_ranger_lane_comments_hint(inputs)
	if (locale === "sv") return sv_ranger_lane_comments_hint(inputs)
	if (locale === "tr") return tr_ranger_lane_comments_hint(inputs)
	if (locale === "zh") return zh_ranger_lane_comments_hint(inputs)
	if (locale === "ja") return ja_ranger_lane_comments_hint(inputs)
	return en_ranger_lane_comments_hint(inputs)
});
