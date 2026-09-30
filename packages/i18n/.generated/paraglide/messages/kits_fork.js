/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_ForkInputs */

const en_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fork`)
};

const es_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const de_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forken`)
};

const fr_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dupliquer`)
};

const it_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fork`)
};

const nl_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forken`)
};

const pl_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiuj`)
};

const pt_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ru_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировать`)
};

const sv_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forka`)
};

const tr_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyala`)
};

const zh_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复刻`)
};

const ja_kits_fork = /** @type {(inputs: Kits_ForkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォーク`)
};

/**
* | output |
* | --- |
* | "Fork" |
*
* @param {Kits_ForkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_fork = /** @type {((inputs?: Kits_ForkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_ForkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_fork(inputs)
	if (locale === "de") return de_kits_fork(inputs)
	if (locale === "fr") return fr_kits_fork(inputs)
	if (locale === "it") return it_kits_fork(inputs)
	if (locale === "nl") return nl_kits_fork(inputs)
	if (locale === "pl") return pl_kits_fork(inputs)
	if (locale === "pt") return pt_kits_fork(inputs)
	if (locale === "ru") return ru_kits_fork(inputs)
	if (locale === "sv") return sv_kits_fork(inputs)
	if (locale === "tr") return tr_kits_fork(inputs)
	if (locale === "zh") return zh_kits_fork(inputs)
	if (locale === "ja") return ja_kits_fork(inputs)
	return en_kits_fork(inputs)
});
