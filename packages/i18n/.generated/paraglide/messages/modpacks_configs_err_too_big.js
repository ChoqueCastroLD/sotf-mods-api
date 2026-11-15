/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_Too_BigInputs */

const en_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The zip is larger than 1 MB.`)
};

const es_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El zip pesa más de 1 MB.`)
};

const de_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Zip ist größer als 1 MB.`)
};

const fr_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le zip dépasse 1 Mo.`)
};

const it_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo zip supera 1 MB.`)
};

const nl_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zip is groter dan 1 MB.`)
};

const pl_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip jest większy niż 1 MB.`)
};

const pt_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O zip tem mais de 1 MB.`)
};

const ru_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip больше 1 МБ.`)
};

const sv_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip-filen är större än 1 MB.`)
};

const tr_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip 1 MB'tan büyük.`)
};

const zh_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 超过 1 MB。`)
};

const ja_modpacks_configs_err_too_big = /** @type {(inputs: Modpacks_Configs_Err_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip が 1 MB を超えています。`)
};

/**
* | output |
* | --- |
* | "The zip is larger than 1 MB." |
*
* @param {Modpacks_Configs_Err_Too_BigInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_too_big = /** @type {((inputs?: Modpacks_Configs_Err_Too_BigInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_Too_BigInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_too_big(inputs)
	if (locale === "de") return de_modpacks_configs_err_too_big(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_too_big(inputs)
	if (locale === "it") return it_modpacks_configs_err_too_big(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_too_big(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_too_big(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_too_big(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_too_big(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_too_big(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_too_big(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_too_big(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_too_big(inputs)
	return en_modpacks_configs_err_too_big(inputs)
});
