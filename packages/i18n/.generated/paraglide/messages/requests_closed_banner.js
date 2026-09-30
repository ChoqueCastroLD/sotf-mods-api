/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Closed_BannerInputs */

const en_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This request is closed.`)
};

const es_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta petición está cerrada.`)
};

const de_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Wunsch ist geschlossen.`)
};

const fr_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette demande est fermée.`)
};

const it_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa richiesta è chiusa.`)
};

const nl_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit verzoek is gesloten.`)
};

const pl_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta prośba jest zamknięta.`)
};

const pt_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este pedido está fechado.`)
};

const ru_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот запрос закрыт.`)
};

const sv_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här önskemålet är stängt.`)
};

const tr_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu istek kapatıldı.`)
};

const zh_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此请求已关闭。`)
};

const ja_requests_closed_banner = /** @type {(inputs: Requests_Closed_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリクエストは終了しました。`)
};

/**
* | output |
* | --- |
* | "This request is closed." |
*
* @param {Requests_Closed_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_closed_banner = /** @type {((inputs?: Requests_Closed_BannerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Closed_BannerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_closed_banner(inputs)
	if (locale === "de") return de_requests_closed_banner(inputs)
	if (locale === "fr") return fr_requests_closed_banner(inputs)
	if (locale === "it") return it_requests_closed_banner(inputs)
	if (locale === "nl") return nl_requests_closed_banner(inputs)
	if (locale === "pl") return pl_requests_closed_banner(inputs)
	if (locale === "pt") return pt_requests_closed_banner(inputs)
	if (locale === "ru") return ru_requests_closed_banner(inputs)
	if (locale === "sv") return sv_requests_closed_banner(inputs)
	if (locale === "tr") return tr_requests_closed_banner(inputs)
	if (locale === "zh") return zh_requests_closed_banner(inputs)
	if (locale === "ja") return ja_requests_closed_banner(inputs)
	return en_requests_closed_banner(inputs)
});
