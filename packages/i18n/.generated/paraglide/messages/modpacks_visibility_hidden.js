/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Visibility_HiddenInputs */

const en_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden`)
};

const es_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto`)
};

const de_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versteckt`)
};

const fr_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué`)
};

const it_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosto`)
};

const nl_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen`)
};

const pl_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryty`)
};

const pt_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto`)
};

const ru_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт`)
};

const sv_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dold`)
};

const tr_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli`)
};

const zh_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已隐藏`)
};

const ja_modpacks_visibility_hidden = /** @type {(inputs: Modpacks_Visibility_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Hidden" |
*
* @param {Modpacks_Visibility_HiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_visibility_hidden = /** @type {((inputs?: Modpacks_Visibility_HiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Visibility_HiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_visibility_hidden(inputs)
	if (locale === "de") return de_modpacks_visibility_hidden(inputs)
	if (locale === "fr") return fr_modpacks_visibility_hidden(inputs)
	if (locale === "it") return it_modpacks_visibility_hidden(inputs)
	if (locale === "nl") return nl_modpacks_visibility_hidden(inputs)
	if (locale === "pl") return pl_modpacks_visibility_hidden(inputs)
	if (locale === "pt") return pt_modpacks_visibility_hidden(inputs)
	if (locale === "ru") return ru_modpacks_visibility_hidden(inputs)
	if (locale === "sv") return sv_modpacks_visibility_hidden(inputs)
	if (locale === "tr") return tr_modpacks_visibility_hidden(inputs)
	if (locale === "zh") return zh_modpacks_visibility_hidden(inputs)
	if (locale === "ja") return ja_modpacks_visibility_hidden(inputs)
	return en_modpacks_visibility_hidden(inputs)
});
