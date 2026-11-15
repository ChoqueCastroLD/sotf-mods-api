/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Final_TitleInputs */

const en_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get SotF Mods Manager`)
};

const es_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga SotF Mods Manager`)
};

const de_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager herunterladen`)
};

const fr_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger SotF Mods Manager`)
};

const it_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica SotF Mods Manager`)
};

const nl_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download SotF Mods Manager`)
};

const pl_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz SotF Mods Manager`)
};

const pt_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe o SotF Mods Manager`)
};

const ru_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать SotF Mods Manager`)
};

const sv_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner SotF Mods Manager`)
};

const tr_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager'ı edin`)
};

const zh_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取 SotF Mods Manager`)
};

const ja_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager を入手`)
};

/**
* | output |
* | --- |
* | "Get SotF Mods Manager" |
*
* @param {Manager_Final_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_final_title = /** @type {((inputs?: Manager_Final_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Final_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_final_title(inputs)
	if (locale === "de") return de_manager_final_title(inputs)
	if (locale === "fr") return fr_manager_final_title(inputs)
	if (locale === "it") return it_manager_final_title(inputs)
	if (locale === "nl") return nl_manager_final_title(inputs)
	if (locale === "pl") return pl_manager_final_title(inputs)
	if (locale === "pt") return pt_manager_final_title(inputs)
	if (locale === "ru") return ru_manager_final_title(inputs)
	if (locale === "sv") return sv_manager_final_title(inputs)
	if (locale === "tr") return tr_manager_final_title(inputs)
	if (locale === "zh") return zh_manager_final_title(inputs)
	if (locale === "ja") return ja_manager_final_title(inputs)
	return en_manager_final_title(inputs)
});
