/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Open_In_ManagerInputs */

const en_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open in SotF Mods Manager`)
};

const es_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir en SotF Mods Manager`)
};

const de_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In SotF Mods Manager öffnen`)
};

const fr_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir dans SotF Mods Manager`)
};

const it_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri in SotF Mods Manager`)
};

const nl_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openen in SotF Mods Manager`)
};

const pl_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz w SotF Mods Manager`)
};

const pt_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir no SotF Mods Manager`)
};

const ru_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть в SotF Mods Manager`)
};

const sv_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna i SotF Mods Manager`)
};

const tr_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager'da aç`)
};

const zh_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 SotF Mods Manager 中打开`)
};

const ja_modpacks_open_in_manager = /** @type {(inputs: Modpacks_Open_In_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager で開く`)
};

/**
* | output |
* | --- |
* | "Open in SotF Mods Manager" |
*
* @param {Modpacks_Open_In_ManagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_open_in_manager = /** @type {((inputs?: Modpacks_Open_In_ManagerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Open_In_ManagerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_open_in_manager(inputs)
	if (locale === "de") return de_modpacks_open_in_manager(inputs)
	if (locale === "fr") return fr_modpacks_open_in_manager(inputs)
	if (locale === "it") return it_modpacks_open_in_manager(inputs)
	if (locale === "nl") return nl_modpacks_open_in_manager(inputs)
	if (locale === "pl") return pl_modpacks_open_in_manager(inputs)
	if (locale === "pt") return pt_modpacks_open_in_manager(inputs)
	if (locale === "ru") return ru_modpacks_open_in_manager(inputs)
	if (locale === "sv") return sv_modpacks_open_in_manager(inputs)
	if (locale === "tr") return tr_modpacks_open_in_manager(inputs)
	if (locale === "zh") return zh_modpacks_open_in_manager(inputs)
	if (locale === "ja") return ja_modpacks_open_in_manager(inputs)
	return en_modpacks_open_in_manager(inputs)
});
