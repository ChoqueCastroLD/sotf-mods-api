/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_InstallInputs */

const en_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The install dialog: a mod that needs another one and does not work with a mod already installed`)
};

const es_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El diálogo de instalación: un mod que necesita otro y no funciona con un mod ya instalado`)
};

const de_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Installationsdialog: ein Mod, der einen anderen braucht und mit einem installierten Mod nicht funktioniert`)
};

const fr_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fenêtre d’installation : un mod qui en nécessite un autre et ne fonctionne pas avec un mod déjà installé`)
};

const it_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La finestra di installazione: una mod che ne richiede un’altra e non funziona con una mod già installata`)
};

const nl_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het installatievenster: een mod die een andere mod nodig heeft en niet werkt met een al geïnstalleerde mod`)
};

const pl_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okno instalacji: mod, który wymaga innego i nie działa z już zainstalowanym modem`)
};

const pt_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A janela de instalação: um mod que precisa de outro e não funciona com um mod já instalado`)
};

const ru_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Окно установки: мод, которому нужен другой мод и который несовместим с уже установленным`)
};

const sv_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsdialogen: en modd som behöver en annan och inte fungerar med en redan installerad modd`)
};

const tr_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum penceresi: başka bir moda ihtiyaç duyan ve kurulu bir modla çalışmayan bir mod`)
};

const zh_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装对话框：一个模组需要另一个模组，并且与已安装的模组不兼容`)
};

const ja_manager_shot_install = /** @type {(inputs: Manager_Shot_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールダイアログ：別の Mod が必要で、インストール済みの Mod と互換性のない Mod`)
};

/**
* | output |
* | --- |
* | "The install dialog: a mod that needs another one and does not work with a mod already installed" |
*
* @param {Manager_Shot_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_install = /** @type {((inputs?: Manager_Shot_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_install(inputs)
	if (locale === "de") return de_manager_shot_install(inputs)
	if (locale === "fr") return fr_manager_shot_install(inputs)
	if (locale === "it") return it_manager_shot_install(inputs)
	if (locale === "nl") return nl_manager_shot_install(inputs)
	if (locale === "pl") return pl_manager_shot_install(inputs)
	if (locale === "pt") return pt_manager_shot_install(inputs)
	if (locale === "ru") return ru_manager_shot_install(inputs)
	if (locale === "sv") return sv_manager_shot_install(inputs)
	if (locale === "tr") return tr_manager_shot_install(inputs)
	if (locale === "zh") return zh_manager_shot_install(inputs)
	if (locale === "ja") return ja_manager_shot_install(inputs)
	return en_manager_shot_install(inputs)
});
