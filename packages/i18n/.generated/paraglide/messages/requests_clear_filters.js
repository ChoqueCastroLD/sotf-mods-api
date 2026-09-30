/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Clear_FiltersInputs */

const en_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show all requests`)
};

const es_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar todas`)
};

const de_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Wünsche zeigen`)
};

const fr_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher toutes les demandes`)
};

const it_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra tutte le richieste`)
};

const nl_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toon alle verzoeken`)
};

const pl_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż wszystkie prośby`)
};

const pt_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar todos os pedidos`)
};

const ru_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать все запросы`)
};

const sv_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla önskemål`)
};

const tr_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm istekleri göster`)
};

const zh_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示全部请求`)
};

const ja_requests_clear_filters = /** @type {(inputs: Requests_Clear_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて表示`)
};

/**
* | output |
* | --- |
* | "Show all requests" |
*
* @param {Requests_Clear_FiltersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_clear_filters = /** @type {((inputs?: Requests_Clear_FiltersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Clear_FiltersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_clear_filters(inputs)
	if (locale === "de") return de_requests_clear_filters(inputs)
	if (locale === "fr") return fr_requests_clear_filters(inputs)
	if (locale === "it") return it_requests_clear_filters(inputs)
	if (locale === "nl") return nl_requests_clear_filters(inputs)
	if (locale === "pl") return pl_requests_clear_filters(inputs)
	if (locale === "pt") return pt_requests_clear_filters(inputs)
	if (locale === "ru") return ru_requests_clear_filters(inputs)
	if (locale === "sv") return sv_requests_clear_filters(inputs)
	if (locale === "tr") return tr_requests_clear_filters(inputs)
	if (locale === "zh") return zh_requests_clear_filters(inputs)
	if (locale === "ja") return ja_requests_clear_filters(inputs)
	return en_requests_clear_filters(inputs)
});
