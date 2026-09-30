/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Extract_ServerInputs */

const en_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On a dedicated server, extract it into the server’s Mods folder:`)
};

const es_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En un servidor dedicado, extráelo en la carpeta Mods del servidor:`)
};

const de_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf einem dedizierten Server in den Mods-Ordner des Servers entpacken:`)
};

const fr_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sur un serveur dédié, extrayez-le dans le dossier Mods du serveur :`)
};

const it_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Su un server dedicato, estrailo nella cartella Mods del server:`)
};

const nl_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pak hem op een dedicated server uit in de map Mods van de server:`)
};

const pl_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na serwerze dedykowanym rozpakuj go do folderu Mods serwera:`)
};

const pt_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em um servidor dedicado, extraia na pasta Mods do servidor:`)
};

const ru_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На выделенном сервере распакуйте в папку Mods сервера:`)
};

const sv_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På en dedikerad server, packa upp den i serverns Mods-mapp:`)
};

const tr_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucuda sunucunun Mods klasörüne çıkar:`)
};

const zh_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在专用服务器上，解压到服务器的 Mods 文件夹：`)
};

const ja_mod_install_step_extract_server = /** @type {(inputs: Mod_Install_Step_Extract_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバーでは、サーバーの Mods フォルダーに展開します：`)
};

/**
* | output |
* | --- |
* | "On a dedicated server, extract it into the server’s Mods folder:" |
*
* @param {Mod_Install_Step_Extract_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_extract_server = /** @type {((inputs?: Mod_Install_Step_Extract_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Extract_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_extract_server(inputs)
	if (locale === "de") return de_mod_install_step_extract_server(inputs)
	if (locale === "fr") return fr_mod_install_step_extract_server(inputs)
	if (locale === "it") return it_mod_install_step_extract_server(inputs)
	if (locale === "nl") return nl_mod_install_step_extract_server(inputs)
	if (locale === "pl") return pl_mod_install_step_extract_server(inputs)
	if (locale === "pt") return pt_mod_install_step_extract_server(inputs)
	if (locale === "ru") return ru_mod_install_step_extract_server(inputs)
	if (locale === "sv") return sv_mod_install_step_extract_server(inputs)
	if (locale === "tr") return tr_mod_install_step_extract_server(inputs)
	if (locale === "zh") return zh_mod_install_step_extract_server(inputs)
	if (locale === "ja") return ja_mod_install_step_extract_server(inputs)
	return en_mod_install_step_extract_server(inputs)
});
