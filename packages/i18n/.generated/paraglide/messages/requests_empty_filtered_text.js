/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Empty_Filtered_TextInputs */

const en_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try another status or show all requests.`)
};

const es_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba otro estado o muestra todas las peticiones.`)
};

const de_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probiere einen anderen Status oder zeige alle Wünsche.`)
};

const fr_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essayez un autre statut ou affichez toutes les demandes.`)
};

const it_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova un altro stato o mostra tutte le richieste.`)
};

const nl_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer een andere status of toon alle verzoeken.`)
};

const pl_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz inny status lub pokaż wszystkie prośby.`)
};

const pt_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente outro estado ou mostre todos os pedidos.`)
};

const ru_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите другой статус или покажите все запросы.`)
};

const sv_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova en annan status eller visa alla önskemål.`)
};

const tr_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir durum deneyin veya tüm istekleri gösterin.`)
};

const zh_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试试其他状态，或显示全部请求。`)
};

const ja_requests_empty_filtered_text = /** @type {(inputs: Requests_Empty_Filtered_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のステータスを試すか、すべてのリクエストを表示してください。`)
};

/**
* | output |
* | --- |
* | "Try another status or show all requests." |
*
* @param {Requests_Empty_Filtered_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_empty_filtered_text = /** @type {((inputs?: Requests_Empty_Filtered_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Empty_Filtered_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_empty_filtered_text(inputs)
	if (locale === "de") return de_requests_empty_filtered_text(inputs)
	if (locale === "fr") return fr_requests_empty_filtered_text(inputs)
	if (locale === "it") return it_requests_empty_filtered_text(inputs)
	if (locale === "nl") return nl_requests_empty_filtered_text(inputs)
	if (locale === "pl") return pl_requests_empty_filtered_text(inputs)
	if (locale === "pt") return pt_requests_empty_filtered_text(inputs)
	if (locale === "ru") return ru_requests_empty_filtered_text(inputs)
	if (locale === "sv") return sv_requests_empty_filtered_text(inputs)
	if (locale === "tr") return tr_requests_empty_filtered_text(inputs)
	if (locale === "zh") return zh_requests_empty_filtered_text(inputs)
	if (locale === "ja") return ja_requests_empty_filtered_text(inputs)
	return en_requests_empty_filtered_text(inputs)
});
