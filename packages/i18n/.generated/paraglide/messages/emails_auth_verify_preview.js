/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Verify_PreviewInputs */

const en_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One click and you can publish, comment and review.`)
};

const es_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un clic y podrás publicar, comentar y reseñar.`)
};

const de_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Klick und du kannst veröffentlichen, kommentieren und bewerten.`)
};

const fr_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un clic et vous pourrez publier, commenter et donner votre avis.`)
};

const it_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un clic e potrai pubblicare, commentare e recensire.`)
};

const nl_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eén klik en je kunt publiceren, reageren en recenseren.`)
};

const pl_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedno kliknięcie i możesz publikować, komentować i recenzować.`)
};

const pt_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um clique e você poderá publicar, comentar e avaliar.`)
};

const ru_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один клик — и можно публиковать, комментировать и писать отзывы.`)
};

const sv_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett klick så kan du publicera, kommentera och recensera.`)
};

const tr_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek tıkla yayınlayabilir, yorum yapabilir ve inceleme yazabilirsin.`)
};

const zh_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`点一下，就能发布、评论和撰写评价。`)
};

const ja_emails_auth_verify_preview = /** @type {(inputs: Emails_Auth_Verify_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワンクリックで、公開・コメント・レビューができるようになります。`)
};

/**
* | output |
* | --- |
* | "One click and you can publish, comment and review." |
*
* @param {Emails_Auth_Verify_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_verify_preview = /** @type {((inputs?: Emails_Auth_Verify_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Verify_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_verify_preview(inputs)
	if (locale === "de") return de_emails_auth_verify_preview(inputs)
	if (locale === "fr") return fr_emails_auth_verify_preview(inputs)
	if (locale === "it") return it_emails_auth_verify_preview(inputs)
	if (locale === "nl") return nl_emails_auth_verify_preview(inputs)
	if (locale === "pl") return pl_emails_auth_verify_preview(inputs)
	if (locale === "pt") return pt_emails_auth_verify_preview(inputs)
	if (locale === "ru") return ru_emails_auth_verify_preview(inputs)
	if (locale === "sv") return sv_emails_auth_verify_preview(inputs)
	if (locale === "tr") return tr_emails_auth_verify_preview(inputs)
	if (locale === "zh") return zh_emails_auth_verify_preview(inputs)
	if (locale === "ja") return ja_emails_auth_verify_preview(inputs)
	return en_emails_auth_verify_preview(inputs)
});
