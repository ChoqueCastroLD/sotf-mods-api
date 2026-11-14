/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Get_RedmanagerInputs */

const en_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get SotF Mods Manager`)
};

const es_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consigue SotF Mods Manager`)
};

const de_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager holen`)
};

const fr_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtenir SotF Mods Manager`)
};

const it_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica SotF Mods Manager`)
};

const nl_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download SotF Mods Manager`)
};

const pl_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz SotF Mods Manager`)
};

const pt_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe o SotF Mods Manager`)
};

const ru_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать SotF Mods Manager`)
};

const sv_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hämta SotF Mods Manager`)
};

const tr_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager'ı edin`)
};

const zh_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取 SotF Mods Manager`)
};

const ja_content_install_get_redmanager = /** @type {(inputs: Content_Install_Get_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager を入手`)
};

/**
* | output |
* | --- |
* | "Get SotF Mods Manager" |
*
* @param {Content_Install_Get_RedmanagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_get_redmanager = /** @type {((inputs?: Content_Install_Get_RedmanagerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Get_RedmanagerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_get_redmanager(inputs)
	if (locale === "de") return de_content_install_get_redmanager(inputs)
	if (locale === "fr") return fr_content_install_get_redmanager(inputs)
	if (locale === "it") return it_content_install_get_redmanager(inputs)
	if (locale === "nl") return nl_content_install_get_redmanager(inputs)
	if (locale === "pl") return pl_content_install_get_redmanager(inputs)
	if (locale === "pt") return pt_content_install_get_redmanager(inputs)
	if (locale === "ru") return ru_content_install_get_redmanager(inputs)
	if (locale === "sv") return sv_content_install_get_redmanager(inputs)
	if (locale === "tr") return tr_content_install_get_redmanager(inputs)
	if (locale === "zh") return zh_content_install_get_redmanager(inputs)
	if (locale === "ja") return ja_content_install_get_redmanager(inputs)
	return en_content_install_get_redmanager(inputs)
});
