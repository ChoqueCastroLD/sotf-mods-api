/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_InstalledInputs */

const en_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Installed tab with the mods that have updates`)
};

const es_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La pestaña Instalados con los mods que tienen actualizaciones`)
};

const de_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Tab Installiert mit den Mods, für die es Updates gibt`)
};

const fr_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’onglet Installés avec les mods qui ont des mises à jour`)
};

const it_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La scheda Installate con le mod che hanno aggiornamenti`)
};

const nl_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het tabblad Geïnstalleerd met de mods die updates hebben`)
};

const pl_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karta Zainstalowane z modami, które mają aktualizacje`)
};

const pt_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A aba Instalados com os mods que têm atualizações`)
};

const ru_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вкладка «Установленные» с модами, для которых есть обновления`)
};

const sv_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fliken Installerade med moddarna som har uppdateringar`)
};

const tr_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemesi olan modlarla Kurulu sekmesi`)
};

const zh_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“已安装”标签页显示有更新的模组`)
};

const ja_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新がある Mod を表示した「インストール済み」タブ`)
};

/**
* | output |
* | --- |
* | "The Installed tab with the mods that have updates" |
*
* @param {Manager_Shot_InstalledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_installed = /** @type {((inputs?: Manager_Shot_InstalledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_InstalledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_installed(inputs)
	if (locale === "de") return de_manager_shot_installed(inputs)
	if (locale === "fr") return fr_manager_shot_installed(inputs)
	if (locale === "it") return it_manager_shot_installed(inputs)
	if (locale === "nl") return nl_manager_shot_installed(inputs)
	if (locale === "pl") return pl_manager_shot_installed(inputs)
	if (locale === "pt") return pt_manager_shot_installed(inputs)
	if (locale === "ru") return ru_manager_shot_installed(inputs)
	if (locale === "sv") return sv_manager_shot_installed(inputs)
	if (locale === "tr") return tr_manager_shot_installed(inputs)
	if (locale === "zh") return zh_manager_shot_installed(inputs)
	if (locale === "ja") return ja_manager_shot_installed(inputs)
	return en_manager_shot_installed(inputs)
});
