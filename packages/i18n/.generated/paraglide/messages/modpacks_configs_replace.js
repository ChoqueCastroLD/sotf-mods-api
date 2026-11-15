/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_ReplaceInputs */

const en_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace zip`)
};

const es_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reemplazar zip`)
};

const de_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip ersetzen`)
};

const fr_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplacer le zip`)
};

const it_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sostituisci zip`)
};

const nl_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip vervangen`)
};

const pl_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zastąp zip`)
};

const pt_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Substituir zip`)
};

const ru_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заменить zip`)
};

const sv_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersätt zip`)
};

const tr_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip'i değiştir`)
};

const zh_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`替换 zip`)
};

const ja_modpacks_configs_replace = /** @type {(inputs: Modpacks_Configs_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip を置き換える`)
};

/**
* | output |
* | --- |
* | "Replace zip" |
*
* @param {Modpacks_Configs_ReplaceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_replace = /** @type {((inputs?: Modpacks_Configs_ReplaceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_ReplaceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_replace(inputs)
	if (locale === "de") return de_modpacks_configs_replace(inputs)
	if (locale === "fr") return fr_modpacks_configs_replace(inputs)
	if (locale === "it") return it_modpacks_configs_replace(inputs)
	if (locale === "nl") return nl_modpacks_configs_replace(inputs)
	if (locale === "pl") return pl_modpacks_configs_replace(inputs)
	if (locale === "pt") return pt_modpacks_configs_replace(inputs)
	if (locale === "ru") return ru_modpacks_configs_replace(inputs)
	if (locale === "sv") return sv_modpacks_configs_replace(inputs)
	if (locale === "tr") return tr_modpacks_configs_replace(inputs)
	if (locale === "zh") return zh_modpacks_configs_replace(inputs)
	if (locale === "ja") return ja_modpacks_configs_replace(inputs)
	return en_modpacks_configs_replace(inputs)
});
