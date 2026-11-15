/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_RemoveInputs */

const en_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const es_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar`)
};

const de_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernen`)
};

const fr_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer`)
};

const it_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi`)
};

const nl_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ru_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать`)
};

const sv_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const ja_modpacks_configs_remove = /** @type {(inputs: Modpacks_Configs_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Modpacks_Configs_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_remove = /** @type {((inputs?: Modpacks_Configs_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_remove(inputs)
	if (locale === "de") return de_modpacks_configs_remove(inputs)
	if (locale === "fr") return fr_modpacks_configs_remove(inputs)
	if (locale === "it") return it_modpacks_configs_remove(inputs)
	if (locale === "nl") return nl_modpacks_configs_remove(inputs)
	if (locale === "pl") return pl_modpacks_configs_remove(inputs)
	if (locale === "pt") return pt_modpacks_configs_remove(inputs)
	if (locale === "ru") return ru_modpacks_configs_remove(inputs)
	if (locale === "sv") return sv_modpacks_configs_remove(inputs)
	if (locale === "tr") return tr_modpacks_configs_remove(inputs)
	if (locale === "zh") return zh_modpacks_configs_remove(inputs)
	if (locale === "ja") return ja_modpacks_configs_remove(inputs)
	return en_modpacks_configs_remove(inputs)
});
