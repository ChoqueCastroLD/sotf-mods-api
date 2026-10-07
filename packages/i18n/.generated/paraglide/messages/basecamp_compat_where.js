/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_WhereInputs */

const en_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where it works`)
};

const es_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dónde funciona`)
};

const de_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wo er läuft`)
};

const fr_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Où il fonctionne`)
};

const it_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dove funziona`)
};

const nl_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar hij draait`)
};

const pl_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdzie działa`)
};

const pt_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onde funciona`)
};

const ru_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Где работает`)
};

const sv_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var den körs`)
};

const tr_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nerede çalışır`)
};

const zh_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行环境`)
};

const ja_basecamp_compat_where = /** @type {(inputs: Basecamp_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作環境`)
};

/**
* | output |
* | --- |
* | "Where it works" |
*
* @param {Basecamp_Compat_WhereInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_where = /** @type {((inputs?: Basecamp_Compat_WhereInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_WhereInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_where(inputs)
	if (locale === "de") return de_basecamp_compat_where(inputs)
	if (locale === "fr") return fr_basecamp_compat_where(inputs)
	if (locale === "it") return it_basecamp_compat_where(inputs)
	if (locale === "nl") return nl_basecamp_compat_where(inputs)
	if (locale === "pl") return pl_basecamp_compat_where(inputs)
	if (locale === "pt") return pt_basecamp_compat_where(inputs)
	if (locale === "ru") return ru_basecamp_compat_where(inputs)
	if (locale === "sv") return sv_basecamp_compat_where(inputs)
	if (locale === "tr") return tr_basecamp_compat_where(inputs)
	if (locale === "zh") return zh_basecamp_compat_where(inputs)
	if (locale === "ja") return ja_basecamp_compat_where(inputs)
	return en_basecamp_compat_where(inputs)
});
