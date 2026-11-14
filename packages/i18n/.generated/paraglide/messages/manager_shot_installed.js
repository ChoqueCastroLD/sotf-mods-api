/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_InstalledInputs */

const en_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installed mods and their updates`)
};

const es_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods instalados y sus actualizaciones`)
};

const de_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installierte Mods und ihre Updates`)
};

const fr_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods installés et leurs mises à jour`)
};

const it_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod installate e i loro aggiornamenti`)
};

const nl_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geïnstalleerde mods en hun updates`)
};

const pl_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstalowane mody i ich aktualizacje`)
};

const pt_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods instalados e suas atualizações`)
};

const ru_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установленные моды и их обновления`)
};

const sv_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installerade moddar och deras uppdateringar`)
};

const tr_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulu modlar ve güncellemeleri`)
};

const zh_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已安装的模组及其更新`)
};

const ja_manager_shot_installed = /** @type {(inputs: Manager_Shot_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストール済みの Mod と更新`)
};

/**
* | output |
* | --- |
* | "Installed mods and their updates" |
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
