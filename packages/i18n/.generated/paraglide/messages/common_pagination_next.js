/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Pagination_NextInputs */

const en_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next page`)
};

const es_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página siguiente`)
};

const de_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächste Seite`)
};

const fr_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page suivante`)
};

const it_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina successiva`)
};

const nl_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende pagina`)
};

const pl_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następna strona`)
};

const pt_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próxima página`)
};

const ru_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующая страница`)
};

const sv_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa sida`)
};

const tr_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki sayfa`)
};

const zh_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一页`)
};

const ja_common_pagination_next = /** @type {(inputs: Common_Pagination_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のページ`)
};

/**
* | output |
* | --- |
* | "Next page" |
*
* @param {Common_Pagination_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_pagination_next = /** @type {((inputs?: Common_Pagination_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Pagination_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_pagination_next(inputs)
	if (locale === "de") return de_common_pagination_next(inputs)
	if (locale === "fr") return fr_common_pagination_next(inputs)
	if (locale === "it") return it_common_pagination_next(inputs)
	if (locale === "nl") return nl_common_pagination_next(inputs)
	if (locale === "pl") return pl_common_pagination_next(inputs)
	if (locale === "pt") return pt_common_pagination_next(inputs)
	if (locale === "ru") return ru_common_pagination_next(inputs)
	if (locale === "sv") return sv_common_pagination_next(inputs)
	if (locale === "tr") return tr_common_pagination_next(inputs)
	if (locale === "zh") return zh_common_pagination_next(inputs)
	if (locale === "ja") return ja_common_pagination_next(inputs)
	return en_common_pagination_next(inputs)
});
