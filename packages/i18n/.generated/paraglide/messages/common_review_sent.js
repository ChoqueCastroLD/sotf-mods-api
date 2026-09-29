/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Review_SentInputs */

const en_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent to the Ranger Station. Most reviews take under 48 h.`)
};

const es_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado al puesto de guardabosques. La mayoría de revisiones tardan menos de 48 h.`)
};

const de_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An die Rangerstation gesendet. Die meisten Prüfungen dauern unter 48 Std.`)
};

const fr_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyé au poste des rangers. La plupart des vérifications prennent moins de 48 h.`)
};

const it_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviata alla stazione dei ranger. La maggior parte delle revisioni richiede meno di 48 h.`)
};

const nl_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar de rangerpost gestuurd. De meeste controles duren minder dan 48 uur.`)
};

const pl_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysłano do posterunku strażników. Większość weryfikacji trwa krócej niż 48 godz.`)
};

const pt_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado ao posto dos guardas. A maioria das revisões leva menos de 48 h.`)
};

const ru_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправлено на пост рейнджеров. Обычно проверка занимает меньше 48 ч.`)
};

const sv_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skickat till rangerstationen. De flesta granskningar tar under 48 h.`)
};

const tr_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu İstasyonu’na gönderildi. İncelemelerin çoğu 48 saatten kısa sürer.`)
};

const zh_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已提交至护林站。大多数审核会在 48 小时内完成。`)
};

const ja_common_review_sent = /** @type {(inputs: Common_Review_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーステーションに送信しました。ほとんどの審査は 48 時間以内に終わります。`)
};

/**
* | output |
* | --- |
* | "Sent to the Ranger Station. Most reviews take under 48 h." |
*
* @param {Common_Review_SentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_review_sent = /** @type {((inputs?: Common_Review_SentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Review_SentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_review_sent(inputs)
	if (locale === "de") return de_common_review_sent(inputs)
	if (locale === "fr") return fr_common_review_sent(inputs)
	if (locale === "it") return it_common_review_sent(inputs)
	if (locale === "nl") return nl_common_review_sent(inputs)
	if (locale === "pl") return pl_common_review_sent(inputs)
	if (locale === "pt") return pt_common_review_sent(inputs)
	if (locale === "ru") return ru_common_review_sent(inputs)
	if (locale === "sv") return sv_common_review_sent(inputs)
	if (locale === "tr") return tr_common_review_sent(inputs)
	if (locale === "zh") return zh_common_review_sent(inputs)
	if (locale === "ja") return ja_common_review_sent(inputs)
	return en_common_review_sent(inputs)
});
