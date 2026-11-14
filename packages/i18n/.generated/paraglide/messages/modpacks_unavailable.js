/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_UnavailableInputs */

const en_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unavailable`)
};

const es_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No disponible`)
};

const de_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht verfügbar`)
};

const fr_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indisponible`)
};

const it_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non disponibile`)
};

const nl_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet beschikbaar`)
};

const pl_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niedostępny`)
};

const pt_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indisponível`)
};

const ru_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недоступен`)
};

const sv_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ej tillgänglig`)
};

const tr_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut değil`)
};

const zh_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不可用`)
};

const ja_modpacks_unavailable = /** @type {(inputs: Modpacks_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用不可`)
};

/**
* | output |
* | --- |
* | "Unavailable" |
*
* @param {Modpacks_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_unavailable = /** @type {((inputs?: Modpacks_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_unavailable(inputs)
	if (locale === "de") return de_modpacks_unavailable(inputs)
	if (locale === "fr") return fr_modpacks_unavailable(inputs)
	if (locale === "it") return it_modpacks_unavailable(inputs)
	if (locale === "nl") return nl_modpacks_unavailable(inputs)
	if (locale === "pl") return pl_modpacks_unavailable(inputs)
	if (locale === "pt") return pt_modpacks_unavailable(inputs)
	if (locale === "ru") return ru_modpacks_unavailable(inputs)
	if (locale === "sv") return sv_modpacks_unavailable(inputs)
	if (locale === "tr") return tr_modpacks_unavailable(inputs)
	if (locale === "zh") return zh_modpacks_unavailable(inputs)
	if (locale === "ja") return ja_modpacks_unavailable(inputs)
	return en_modpacks_unavailable(inputs)
});
