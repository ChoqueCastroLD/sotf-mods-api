/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Downloads_MoreInputs */

const en_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full analytics`)
};

const es_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analíticas completas`)
};

const de_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Statistiken`)
};

const fr_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiques complètes`)
};

const it_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiche complete`)
};

const nl_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle statistieken`)
};

const pl_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pełne statystyki`)
};

const pt_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estatísticas completas`)
};

const ru_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вся статистика`)
};

const sv_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All statistik`)
};

const tr_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm istatistikler`)
};

const zh_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整数据分析`)
};

const ja_basecamp_downloads_more = /** @type {(inputs: Basecamp_Downloads_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細な分析`)
};

/**
* | output |
* | --- |
* | "Full analytics" |
*
* @param {Basecamp_Downloads_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_downloads_more = /** @type {((inputs?: Basecamp_Downloads_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Downloads_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_downloads_more(inputs)
	if (locale === "de") return de_basecamp_downloads_more(inputs)
	if (locale === "fr") return fr_basecamp_downloads_more(inputs)
	if (locale === "it") return it_basecamp_downloads_more(inputs)
	if (locale === "nl") return nl_basecamp_downloads_more(inputs)
	if (locale === "pl") return pl_basecamp_downloads_more(inputs)
	if (locale === "pt") return pt_basecamp_downloads_more(inputs)
	if (locale === "ru") return ru_basecamp_downloads_more(inputs)
	if (locale === "sv") return sv_basecamp_downloads_more(inputs)
	if (locale === "tr") return tr_basecamp_downloads_more(inputs)
	if (locale === "zh") return zh_basecamp_downloads_more(inputs)
	if (locale === "ja") return ja_basecamp_downloads_more(inputs)
	return en_basecamp_downloads_more(inputs)
});
