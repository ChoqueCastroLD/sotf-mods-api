/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_ReleaseInputs */

const en_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give it back`)
};

const es_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devolver`)
};

const de_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückgeben`)
};

const fr_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le rendre`)
};

const it_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restituisci`)
};

const nl_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teruggeven`)
};

const pl_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oddaj`)
};

const pt_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devolver`)
};

const ru_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отказаться`)
};

const sv_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna tillbaka`)
};

const tr_requests_release = /** @type {(inputs: Requests_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri bırak`)
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
* | "Give it back" |
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
