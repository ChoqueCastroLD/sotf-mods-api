/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Not_Found_TitleInputs */

const en_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You wandered off the trail.`)
};

const es_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te saliste del sendero.`)
};

const de_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist vom Weg abgekommen.`)
};

const fr_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous vous êtes écarté du sentier.`)
};

const it_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ti sei allontanato dal sentiero.`)
};

const nl_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent van het pad afgedwaald.`)
};

const pl_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zboczyłeś ze szlaku.`)
};

const pt_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você saiu da trilha.`)
};

const ru_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы сошли с тропы.`)
};

const sv_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har gått vilse från stigen.`)
};

const tr_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patikadan saptın.`)
};

const zh_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你偏离了小路。`)
};

const ja_errors_not_found_title = /** @type {(inputs: Errors_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`道から外れてしまいました。`)
};

/**
* | output |
* | --- |
* | "You wandered off the trail." |
*
* @param {Errors_Not_Found_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_not_found_title = /** @type {((inputs?: Errors_Not_Found_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_not_found_title(inputs)
	if (locale === "de") return de_errors_not_found_title(inputs)
	if (locale === "fr") return fr_errors_not_found_title(inputs)
	if (locale === "it") return it_errors_not_found_title(inputs)
	if (locale === "nl") return nl_errors_not_found_title(inputs)
	if (locale === "pl") return pl_errors_not_found_title(inputs)
	if (locale === "pt") return pt_errors_not_found_title(inputs)
	if (locale === "ru") return ru_errors_not_found_title(inputs)
	if (locale === "sv") return sv_errors_not_found_title(inputs)
	if (locale === "tr") return tr_errors_not_found_title(inputs)
	if (locale === "zh") return zh_errors_not_found_title(inputs)
	if (locale === "ja") return ja_errors_not_found_title(inputs)
	return en_errors_not_found_title(inputs)
});
