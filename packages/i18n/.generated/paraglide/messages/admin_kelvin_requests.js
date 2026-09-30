/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Kelvin_RequestsInputs */

const en_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Requests · ${count__number} day`);
	return /** @type {LocalizedString} */ (`Requests · ${count__number} days`)
	
};

const es_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Peticiones · ${count__number} día`);
	return /** @type {LocalizedString} */ (`Peticiones · ${count__number} días`)
	
};

const de_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Anfragen · ${count__number} Tag`);
	return /** @type {LocalizedString} */ (`Anfragen · ${count__number} Tage`)
	
};

const fr_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Requêtes · ${count__number} jour`);
	return /** @type {LocalizedString} */ (`Requêtes · ${count__number} jours`)
	
};

const it_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Richieste · ${count__number} giorno`);
	return /** @type {LocalizedString} */ (`Richieste · ${count__number} giorni`)
	
};

const nl_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Verzoeken · ${count__number} dag`);
	return /** @type {LocalizedString} */ (`Verzoeken · ${count__number} dagen`)
	
};

const pl_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Żądania · ${count__number} dzień`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Żądania · ${count__number} dni`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Żądania · ${count__number} dni`);
	return /** @type {LocalizedString} */ (`Żądania · ${count__number} dnia`)
	
};

const pt_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Requisições · ${count__number} dia`);
	return /** @type {LocalizedString} */ (`Requisições · ${count__number} dias`)
	
};

const ru_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Запросы · ${count__number} день`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Запросы · ${count__number} дня`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Запросы · ${count__number} дней`);
	return /** @type {LocalizedString} */ (`Запросы · ${count__number} дня`)
	
};

const sv_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Anrop · ${count__number} dag`);
	return /** @type {LocalizedString} */ (`Anrop · ${count__number} dagar`)
	
};

const tr_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`İstekler · ${count__number} gün`);
	return /** @type {LocalizedString} */ (`İstekler · ${count__number} gün`)
	
};

const zh_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`请求 · ${count__number} 天`)
};

const ja_admin_kelvin_requests = /** @type {(inputs: Admin_Kelvin_RequestsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`リクエスト · ${count__number} 日間`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Requests · {count__number} day" |
* | * | "Requests · {count__number} days" |
*
* @param {Admin_Kelvin_RequestsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_requests = /** @type {((inputs: Admin_Kelvin_RequestsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_RequestsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_requests(inputs)
	if (locale === "de") return de_admin_kelvin_requests(inputs)
	if (locale === "fr") return fr_admin_kelvin_requests(inputs)
	if (locale === "it") return it_admin_kelvin_requests(inputs)
	if (locale === "nl") return nl_admin_kelvin_requests(inputs)
	if (locale === "pl") return pl_admin_kelvin_requests(inputs)
	if (locale === "pt") return pt_admin_kelvin_requests(inputs)
	if (locale === "ru") return ru_admin_kelvin_requests(inputs)
	if (locale === "sv") return sv_admin_kelvin_requests(inputs)
	if (locale === "tr") return tr_admin_kelvin_requests(inputs)
	if (locale === "zh") return zh_admin_kelvin_requests(inputs)
	if (locale === "ja") return ja_admin_kelvin_requests(inputs)
	return en_admin_kelvin_requests(inputs)
});
