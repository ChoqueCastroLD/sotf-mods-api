/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ start: NonNullable<unknown>, end: NonNullable<unknown> }} Emails_Notify_Creator_PreviewInputs */

const en_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads, followers, comments and reviews from ${i?.start} to ${i?.end}.`)
};

const es_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargas, seguidores, comentarios y reseñas del ${i?.start} al ${i?.end}.`)
};

const de_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads, Follower, Kommentare und Bewertungen vom ${i?.start} bis ${i?.end}.`)
};

const fr_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargements, abonnés, commentaires et avis du ${i?.start} au ${i?.end}.`)
};

const it_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download, follower, commenti e recensioni dal ${i?.start} al ${i?.end}.`)
};

const nl_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads, volgers, reacties en beoordelingen van ${i?.start} tot ${i?.end}.`)
};

const pl_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobrania, obserwujący, komentarze i recenzje od ${i?.start} do ${i?.end}.`)
};

const pt_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads, seguidores, comentários e avaliações de ${i?.start} a ${i?.end}.`)
};

const ru_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачивания, подписчики, комментарии и отзывы с ${i?.start} по ${i?.end}.`)
};

const sv_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nedladdningar, följare, kommentarer och recensioner från ${i?.start} till ${i?.end}.`)
};

const tr_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} - ${i?.end} arası indirmeler, takipçiler, yorumlar ve incelemeler.`)
};

const zh_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} 至 ${i?.end} 的下载、关注者、评论和评价。`)
};

const ja_emails_notify_creator_preview = /** @type {(inputs: Emails_Notify_Creator_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start}〜${i?.end} のダウンロード、フォロワー、コメント、レビュー。`)
};

/**
* | output |
* | --- |
* | "Downloads, followers, comments and reviews from {start} to {end}." |
*
* @param {Emails_Notify_Creator_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_preview = /** @type {((inputs: Emails_Notify_Creator_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_preview(inputs)
	if (locale === "de") return de_emails_notify_creator_preview(inputs)
	if (locale === "fr") return fr_emails_notify_creator_preview(inputs)
	if (locale === "it") return it_emails_notify_creator_preview(inputs)
	if (locale === "nl") return nl_emails_notify_creator_preview(inputs)
	if (locale === "pl") return pl_emails_notify_creator_preview(inputs)
	if (locale === "pt") return pt_emails_notify_creator_preview(inputs)
	if (locale === "ru") return ru_emails_notify_creator_preview(inputs)
	if (locale === "sv") return sv_emails_notify_creator_preview(inputs)
	if (locale === "tr") return tr_emails_notify_creator_preview(inputs)
	if (locale === "zh") return zh_emails_notify_creator_preview(inputs)
	if (locale === "ja") return ja_emails_notify_creator_preview(inputs)
	return en_emails_notify_creator_preview(inputs)
});
