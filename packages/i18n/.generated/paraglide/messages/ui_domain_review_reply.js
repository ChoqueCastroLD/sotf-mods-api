/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Review_ReplyInputs */

const en_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator’s reply`)
};

const es_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuesta del creador`)
};

const de_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort des Erstellers`)
};

const fr_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponse du créateur`)
};

const it_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposta del creatore`)
};

const nl_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie van de maker`)
};

const pl_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedź twórcy`)
};

const pt_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resposta do criador`)
};

const ru_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответ автора`)
};

const sv_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparens svar`)
};

const tr_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik üreticinin yanıtı`)
};

const zh_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者回复`)
};

const ja_ui_domain_review_reply = /** @type {(inputs: Ui_Domain_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターの返信`)
};

/**
* | output |
* | --- |
* | "Creator’s reply" |
*
* @param {Ui_Domain_Review_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_review_reply = /** @type {((inputs?: Ui_Domain_Review_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Review_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_review_reply(inputs)
	if (locale === "de") return de_ui_domain_review_reply(inputs)
	if (locale === "fr") return fr_ui_domain_review_reply(inputs)
	if (locale === "it") return it_ui_domain_review_reply(inputs)
	if (locale === "nl") return nl_ui_domain_review_reply(inputs)
	if (locale === "pl") return pl_ui_domain_review_reply(inputs)
	if (locale === "pt") return pt_ui_domain_review_reply(inputs)
	if (locale === "ru") return ru_ui_domain_review_reply(inputs)
	if (locale === "sv") return sv_ui_domain_review_reply(inputs)
	if (locale === "tr") return tr_ui_domain_review_reply(inputs)
	if (locale === "zh") return zh_ui_domain_review_reply(inputs)
	if (locale === "ja") return ja_ui_domain_review_reply(inputs)
	return en_ui_domain_review_reply(inputs)
});
