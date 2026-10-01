/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, version: NonNullable<unknown> }} Signals_Review_Update_PromptInputs */

const en_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} released version ${i?.version}. Want to update your review?`)
};

const es_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} lanzó la versión ${i?.version}. ¿Quieres actualizar tu reseña?`)
};

const de_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} hat Version ${i?.version} veröffentlicht. Möchtest du deine Bewertung aktualisieren?`)
};

const fr_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} a publié la version ${i?.version}. Voulez-vous mettre à jour votre avis ?`)
};

const it_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ha rilasciato la versione ${i?.version}. Vuoi aggiornare la tua recensione?`)
};

const nl_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} heeft versie ${i?.version} uitgebracht. Wil je je review bijwerken?`)
};

const pl_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} wydał wersję ${i?.version}. Chcesz zaktualizować swoją recenzję?`)
};

const pt_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} lançou a versão ${i?.version}. Quer atualizar sua avaliação?`)
};

const ru_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod}: вышла версия ${i?.version}. Хотите обновить свой отзыв?`)
};

const sv_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} har släppt version ${i?.version}. Vill du uppdatera din recension?`)
};

const tr_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod}, ${i?.version} sürümünü yayınladı. İncelemeni güncellemek ister misin?`)
};

const zh_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 发布了版本 ${i?.version}。要更新你的评价吗？`)
};

const ja_signals_review_update_prompt = /** @type {(inputs: Signals_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} がバージョン ${i?.version} を公開しました。レビューを更新しませんか？`)
};

/**
* | output |
* | --- |
* | "{mod} released version {version}. Want to update your review?" |
*
* @param {Signals_Review_Update_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_review_update_prompt = /** @type {((inputs: Signals_Review_Update_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Review_Update_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_review_update_prompt(inputs)
	if (locale === "de") return de_signals_review_update_prompt(inputs)
	if (locale === "fr") return fr_signals_review_update_prompt(inputs)
	if (locale === "it") return it_signals_review_update_prompt(inputs)
	if (locale === "nl") return nl_signals_review_update_prompt(inputs)
	if (locale === "pl") return pl_signals_review_update_prompt(inputs)
	if (locale === "pt") return pt_signals_review_update_prompt(inputs)
	if (locale === "ru") return ru_signals_review_update_prompt(inputs)
	if (locale === "sv") return sv_signals_review_update_prompt(inputs)
	if (locale === "tr") return tr_signals_review_update_prompt(inputs)
	if (locale === "zh") return zh_signals_review_update_prompt(inputs)
	if (locale === "ja") return ja_signals_review_update_prompt(inputs)
	return en_signals_review_update_prompt(inputs)
});
