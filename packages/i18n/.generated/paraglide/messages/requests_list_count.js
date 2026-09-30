/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Requests_List_CountInputs */

const en_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} request`);
	return /** @type {LocalizedString} */ (`${count__number} requests`)
	
};

const es_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} petición`);
	return /** @type {LocalizedString} */ (`${count__number} peticiones`)
	
};

const de_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Wunsch`);
	return /** @type {LocalizedString} */ (`${count__number} Wünsche`)
	
};

const fr_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} demande`);
	return /** @type {LocalizedString} */ (`${count__number} demandes`)
	
};

const it_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} richiesta`);
	return /** @type {LocalizedString} */ (`${count__number} richieste`)
	
};

const nl_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} verzoek`);
	return /** @type {LocalizedString} */ (`${count__number} verzoeken`)
	
};

const pl_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} prośba`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} prośby`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} próśb`);
	return /** @type {LocalizedString} */ (`${count__number} prośby`)
	
};

const pt_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pedido`);
	return /** @type {LocalizedString} */ (`${count__number} pedidos`)
	
};

const ru_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} запрос`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} запроса`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} запросов`);
	return /** @type {LocalizedString} */ (`${count__number} запроса`)
	
};

const sv_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} önskemål`);
	return /** @type {LocalizedString} */ (`${count__number} önskemål`)
	
};

const tr_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} istek`);
	return /** @type {LocalizedString} */ (`${count__number} istek`)
	
};

const zh_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条请求`)
};

const ja_requests_list_count = /** @type {(inputs: Requests_List_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件のリクエスト`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} request" |
* | * | "{count__number} requests" |
*
* @param {Requests_List_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_list_count = /** @type {((inputs: Requests_List_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_List_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_list_count(inputs)
	if (locale === "de") return de_requests_list_count(inputs)
	if (locale === "fr") return fr_requests_list_count(inputs)
	if (locale === "it") return it_requests_list_count(inputs)
	if (locale === "nl") return nl_requests_list_count(inputs)
	if (locale === "pl") return pl_requests_list_count(inputs)
	if (locale === "pt") return pt_requests_list_count(inputs)
	if (locale === "ru") return ru_requests_list_count(inputs)
	if (locale === "sv") return sv_requests_list_count(inputs)
	if (locale === "tr") return tr_requests_list_count(inputs)
	if (locale === "zh") return zh_requests_list_count(inputs)
	if (locale === "ja") return ja_requests_list_count(inputs)
	return en_requests_list_count(inputs)
});
