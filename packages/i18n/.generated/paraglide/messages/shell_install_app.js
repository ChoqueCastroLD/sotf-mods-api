/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Install_AppInputs */

const en_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install app`)
};

const es_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar la app`)
};

const de_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App installieren`)
};

const fr_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer l’application`)
};

const it_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa l’app`)
};

const nl_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App installeren`)
};

const pl_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj aplikację`)
};

const pt_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar o app`)
};

const ru_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установить приложение`)
};

const sv_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera appen`)
};

const tr_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulamayı yükle`)
};

const zh_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装应用`)
};

const ja_shell_install_app = /** @type {(inputs: Shell_Install_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリをインストール`)
};

/**
* | output |
* | --- |
* | "Install app" |
*
* @param {Shell_Install_AppInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_install_app = /** @type {((inputs?: Shell_Install_AppInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Install_AppInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_install_app(inputs)
	if (locale === "de") return de_shell_install_app(inputs)
	if (locale === "fr") return fr_shell_install_app(inputs)
	if (locale === "it") return it_shell_install_app(inputs)
	if (locale === "nl") return nl_shell_install_app(inputs)
	if (locale === "pl") return pl_shell_install_app(inputs)
	if (locale === "pt") return pt_shell_install_app(inputs)
	if (locale === "ru") return ru_shell_install_app(inputs)
	if (locale === "sv") return sv_shell_install_app(inputs)
	if (locale === "tr") return tr_shell_install_app(inputs)
	if (locale === "zh") return zh_shell_install_app(inputs)
	if (locale === "ja") return ja_shell_install_app(inputs)
	return en_shell_install_app(inputs)
});
