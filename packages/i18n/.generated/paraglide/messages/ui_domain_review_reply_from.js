/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ui_Domain_Review_Reply_FromInputs */

const en_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reply from ${i?.name}`)
};

const es_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Respuesta de ${i?.name}`)
};

const de_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Antwort von ${i?.name}`)
};

const fr_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réponse de ${i?.name}`)
};

const it_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risposta di ${i?.name}`)
};

const nl_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reactie van ${i?.name}`)
};

const pl_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odpowiedź od ${i?.name}`)
};

const pt_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resposta de ${i?.name}`)
};

const ru_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ответ от ${i?.name}`)
};

const sv_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Svar från ${i?.name}`)
};

const tr_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yanıtladı`)
};

const zh_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的回复`)
};

const ja_ui_domain_review_reply_from = /** @type {(inputs: Ui_Domain_Review_Reply_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} からの返信`)
};

/**
* | output |
* | --- |
* | "Reply from {name}" |
*
* @param {Ui_Domain_Review_Reply_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_review_reply_from = /** @type {((inputs: Ui_Domain_Review_Reply_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Review_Reply_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_review_reply_from(inputs)
	if (locale === "de") return de_ui_domain_review_reply_from(inputs)
	if (locale === "fr") return fr_ui_domain_review_reply_from(inputs)
	if (locale === "it") return it_ui_domain_review_reply_from(inputs)
	if (locale === "nl") return nl_ui_domain_review_reply_from(inputs)
	if (locale === "pl") return pl_ui_domain_review_reply_from(inputs)
	if (locale === "pt") return pt_ui_domain_review_reply_from(inputs)
	if (locale === "ru") return ru_ui_domain_review_reply_from(inputs)
	if (locale === "sv") return sv_ui_domain_review_reply_from(inputs)
	if (locale === "tr") return tr_ui_domain_review_reply_from(inputs)
	if (locale === "zh") return zh_ui_domain_review_reply_from(inputs)
	if (locale === "ja") return ja_ui_domain_review_reply_from(inputs)
	return en_ui_domain_review_reply_from(inputs)
});
