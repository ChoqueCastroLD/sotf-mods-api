/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Install_App_HintInputs */

const en_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add SOTF Mods to your home screen`)
};

const es_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade SOTF Mods a tu pantalla de inicio`)
};

const de_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods zum Startbildschirm hinzufügen`)
};

const fr_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez SOTF Mods à votre écran d’accueil`)
};

const it_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi SOTF Mods alla schermata Home`)
};

const nl_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet SOTF Mods op je beginscherm`)
};

const pl_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj SOTF Mods do ekranu głównego`)
};

const pt_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione o SOTF Mods à tela inicial`)
};

const ru_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте SOTF Mods на главный экран`)
};

const sv_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till SOTF Mods på hemskärmen`)
};

const tr_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’u ana ekrana ekle`)
};

const zh_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将 SOTF Mods 添加到主屏幕`)
};

const ja_shell_install_app_hint = /** @type {(inputs: Shell_Install_App_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods をホーム画面に追加`)
};

/**
* | output |
* | --- |
* | "Add SOTF Mods to your home screen" |
*
* @param {Shell_Install_App_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_install_app_hint = /** @type {((inputs?: Shell_Install_App_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Install_App_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_install_app_hint(inputs)
	if (locale === "de") return de_shell_install_app_hint(inputs)
	if (locale === "fr") return fr_shell_install_app_hint(inputs)
	if (locale === "it") return it_shell_install_app_hint(inputs)
	if (locale === "nl") return nl_shell_install_app_hint(inputs)
	if (locale === "pl") return pl_shell_install_app_hint(inputs)
	if (locale === "pt") return pt_shell_install_app_hint(inputs)
	if (locale === "ru") return ru_shell_install_app_hint(inputs)
	if (locale === "sv") return sv_shell_install_app_hint(inputs)
	if (locale === "tr") return tr_shell_install_app_hint(inputs)
	if (locale === "zh") return zh_shell_install_app_hint(inputs)
	if (locale === "ja") return ja_shell_install_app_hint(inputs)
	return en_shell_install_app_hint(inputs)
});
