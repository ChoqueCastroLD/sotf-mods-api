/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Fulfill_DoneInputs */

const en_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request fulfilled. Thank you!`)
};

const es_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición cumplida. ¡Gracias!`)
};

const de_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch erfüllt. Danke!`)
};

const fr_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande réalisée. Merci !`)
};

const it_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta realizzata. Grazie!`)
};

const nl_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek vervuld. Bedankt!`)
};

const pl_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba zrealizowana. Dziękujemy!`)
};

const pt_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido atendido. Obrigado!`)
};

const ru_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос выполнен. Спасибо!`)
};

const sv_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet är uppfyllt. Tack!`)
};

const tr_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek tamamlandı. Teşekkürler!`)
};

const zh_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已完成，谢谢！`)
};

const ja_requests_fulfill_done = /** @type {(inputs: Requests_Fulfill_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを達成しました。ありがとうございます！`)
};

/**
* | output |
* | --- |
* | "Request fulfilled. Thank you!" |
*
* @param {Requests_Fulfill_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfill_done = /** @type {((inputs?: Requests_Fulfill_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfill_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfill_done(inputs)
	if (locale === "de") return de_requests_fulfill_done(inputs)
	if (locale === "fr") return fr_requests_fulfill_done(inputs)
	if (locale === "it") return it_requests_fulfill_done(inputs)
	if (locale === "nl") return nl_requests_fulfill_done(inputs)
	if (locale === "pl") return pl_requests_fulfill_done(inputs)
	if (locale === "pt") return pt_requests_fulfill_done(inputs)
	if (locale === "ru") return ru_requests_fulfill_done(inputs)
	if (locale === "sv") return sv_requests_fulfill_done(inputs)
	if (locale === "tr") return tr_requests_fulfill_done(inputs)
	if (locale === "zh") return zh_requests_fulfill_done(inputs)
	if (locale === "ja") return ja_requests_fulfill_done(inputs)
	return en_requests_fulfill_done(inputs)
});
