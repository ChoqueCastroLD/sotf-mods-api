/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_ReleaseInputs */

const en_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop working on it`)
};

const es_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dejar de trabajar en ello`)
};

const de_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr bearbeiten`)
};

const fr_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne plus y travailler`)
};

const it_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Smetti di lavorarci`)
};

const nl_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet meer aan werken`)
};

const pl_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przestań nad tym pracować`)
};

const pt_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parar de trabalhar nisso`)
};

const ru_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отказаться`)
};

const sv_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluta arbeta på den`)
};

const tr_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üzerinde çalışmayı bırak`)
};

const zh_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃认领`)
};

const ja_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`担当をやめる`)
};

/**
* | output |
* | --- |
* | "Stop working on it" |
*
* @param {Requests_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_release = /** @type {((inputs?: Requests_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_release(inputs)
	if (locale === "de") return de_requests_release(inputs)
	if (locale === "fr") return fr_requests_release(inputs)
	if (locale === "it") return it_requests_release(inputs)
	if (locale === "nl") return nl_requests_release(inputs)
	if (locale === "pl") return pl_requests_release(inputs)
	if (locale === "pt") return pt_requests_release(inputs)
	if (locale === "ru") return ru_requests_release(inputs)
	if (locale === "sv") return sv_requests_release(inputs)
	if (locale === "tr") return tr_requests_release(inputs)
	if (locale === "zh") return zh_requests_release(inputs)
	if (locale === "ja") return ja_requests_release(inputs)
	return en_requests_release(inputs)
});
