/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, version: NonNullable<unknown> }} Emails_Notify_Item_Review_Update_PromptInputs */

const en_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} released a new major version (${i?.version}): update your review`)
};

const es_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} lanzó una nueva versión mayor (${i?.version}): actualiza tu reseña`)
};

const de_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} hat eine neue Hauptversion (${i?.version}) veröffentlicht: Aktualisiere deine Bewertung`)
};

const fr_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} a publié une nouvelle version majeure (${i?.version}) : mettez à jour votre avis`)
};

const it_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ha rilasciato una nuova versione principale (${i?.version}): aggiorna la tua recensione`)
};

const nl_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} heeft een nieuwe hoofdversie (${i?.version}) uitgebracht: werk je review bij`)
};

const pl_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} wydał nową wersję główną (${i?.version}): zaktualizuj swoją recenzję`)
};

const pt_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} lançou uma nova versão principal (${i?.version}): atualize sua avaliação`)
};

const ru_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod}: вышла новая мажорная версия (${i?.version}), обновите свой отзыв`)
};

const sv_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} har släppt en ny huvudversion (${i?.version}): uppdatera din recension`)
};

const tr_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} yeni bir ana sürüm (${i?.version}) yayınladı: incelemeni güncelle`)
};

const zh_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 发布了新的主要版本（${i?.version}）：请更新你的评价`)
};

const ja_emails_notify_item_review_update_prompt = /** @type {(inputs: Emails_Notify_Item_Review_Update_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が新しいメジャーバージョン (${i?.version}) を公開しました。レビューを更新してください`)
};

/**
* | output |
* | --- |
* | "{mod} released a new major version ({version}): update your review" |
*
* @param {Emails_Notify_Item_Review_Update_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_review_update_prompt = /** @type {((inputs: Emails_Notify_Item_Review_Update_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Review_Update_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_review_update_prompt(inputs)
	if (locale === "de") return de_emails_notify_item_review_update_prompt(inputs)
	if (locale === "fr") return fr_emails_notify_item_review_update_prompt(inputs)
	if (locale === "it") return it_emails_notify_item_review_update_prompt(inputs)
	if (locale === "nl") return nl_emails_notify_item_review_update_prompt(inputs)
	if (locale === "pl") return pl_emails_notify_item_review_update_prompt(inputs)
	if (locale === "pt") return pt_emails_notify_item_review_update_prompt(inputs)
	if (locale === "ru") return ru_emails_notify_item_review_update_prompt(inputs)
	if (locale === "sv") return sv_emails_notify_item_review_update_prompt(inputs)
	if (locale === "tr") return tr_emails_notify_item_review_update_prompt(inputs)
	if (locale === "zh") return zh_emails_notify_item_review_update_prompt(inputs)
	if (locale === "ja") return ja_emails_notify_item_review_update_prompt(inputs)
	return en_emails_notify_item_review_update_prompt(inputs)
});
