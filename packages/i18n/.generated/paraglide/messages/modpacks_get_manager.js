/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Get_ManagerInputs */

const en_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get SotF Mods Manager`)
};

const es_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consigue SotF Mods Manager`)
};

const de_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager holen`)
};

const fr_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtenir SotF Mods Manager`)
};

const it_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica SotF Mods Manager`)
};

const nl_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download SotF Mods Manager`)
};

const pl_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz SotF Mods Manager`)
};

const pt_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe o SotF Mods Manager`)
};

const ru_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать SotF Mods Manager`)
};

const sv_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hämta SotF Mods Manager`)
};

const tr_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager'ı edin`)
};

const zh_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取 SotF Mods Manager`)
};

const ja_modpacks_get_manager = /** @type {(inputs: Modpacks_Get_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager を入手`)
};

/**
* | output |
* | --- |
* | "Get SotF Mods Manager" |
*
* @param {Modpacks_Get_ManagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_get_manager = /** @type {((inputs?: Modpacks_Get_ManagerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Get_ManagerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_get_manager(inputs)
	if (locale === "de") return de_modpacks_get_manager(inputs)
	if (locale === "fr") return fr_modpacks_get_manager(inputs)
	if (locale === "it") return it_modpacks_get_manager(inputs)
	if (locale === "nl") return nl_modpacks_get_manager(inputs)
	if (locale === "pl") return pl_modpacks_get_manager(inputs)
	if (locale === "pt") return pt_modpacks_get_manager(inputs)
	if (locale === "ru") return ru_modpacks_get_manager(inputs)
	if (locale === "sv") return sv_modpacks_get_manager(inputs)
	if (locale === "tr") return tr_modpacks_get_manager(inputs)
	if (locale === "zh") return zh_modpacks_get_manager(inputs)
	if (locale === "ja") return ja_modpacks_get_manager(inputs)
	return en_modpacks_get_manager(inputs)
});
