/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_MoreInputs */

const en_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more`)
};

const es_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargar más`)
};

const de_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr laden`)
};

const fr_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Charger plus`)
};

const it_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica altro`)
};

const nl_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer laden`)
};

const pl_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytaj więcej`)
};

const pt_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregar mais`)
};

const ru_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить ещё`)
};

const sv_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda fler`)
};

const tr_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla yükle`)
};

const zh_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多`)
};

const ja_basecamp_inbox_more = /** @type {(inputs: Basecamp_Inbox_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`さらに読み込む`)
};

/**
* | output |
* | --- |
* | "Load more" |
*
* @param {Basecamp_Inbox_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_more = /** @type {((inputs?: Basecamp_Inbox_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_more(inputs)
	if (locale === "de") return de_basecamp_inbox_more(inputs)
	if (locale === "fr") return fr_basecamp_inbox_more(inputs)
	if (locale === "it") return it_basecamp_inbox_more(inputs)
	if (locale === "nl") return nl_basecamp_inbox_more(inputs)
	if (locale === "pl") return pl_basecamp_inbox_more(inputs)
	if (locale === "pt") return pt_basecamp_inbox_more(inputs)
	if (locale === "ru") return ru_basecamp_inbox_more(inputs)
	if (locale === "sv") return sv_basecamp_inbox_more(inputs)
	if (locale === "tr") return tr_basecamp_inbox_more(inputs)
	if (locale === "zh") return zh_basecamp_inbox_more(inputs)
	if (locale === "ja") return ja_basecamp_inbox_more(inputs)
	return en_basecamp_inbox_more(inputs)
});
