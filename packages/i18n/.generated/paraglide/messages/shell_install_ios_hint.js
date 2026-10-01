/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Install_Ios_HintInputs */

const en_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To install on iPhone or iPad, tap Share, then “Add to Home Screen”.`)
};

const es_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para instalarla en iPhone o iPad, toca Compartir y luego «Añadir a pantalla de inicio».`)
};

const de_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Installieren auf iPhone oder iPad tippe auf Teilen und dann auf „Zum Home-Bildschirm“.`)
};

const fr_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour l’installer sur iPhone ou iPad, touchez Partager, puis « Sur l’écran d’accueil ».`)
};

const it_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per installarla su iPhone o iPad, tocca Condividi, poi “Aggiungi alla schermata Home”.`)
};

const nl_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om te installeren op iPhone of iPad tik je op Deel en dan op ‘Zet op beginscherm’.`)
};

const pl_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aby zainstalować na iPhonie lub iPadzie, stuknij Udostępnij, a następnie „Do ekranu początkowego”.`)
};

const pt_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para instalar no iPhone ou iPad, toque em Compartilhar e depois em “Adicionar à Tela de Início”.`)
};

const ru_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чтобы установить на iPhone или iPad, нажмите «Поделиться», затем «На экран „Домой“».`)
};

const sv_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera på iPhone eller iPad genom att trycka på Dela och sedan ”Lägg till på hemskärmen”.`)
};

const tr_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`iPhone veya iPad’e yüklemek için Paylaş’a dokun, ardından “Ana Ekrana Ekle”yi seç.`)
};

const zh_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 iPhone 或 iPad 上安装：点按“分享”，再选择“添加到主屏幕”。`)
};

const ja_shell_install_ios_hint = /** @type {(inputs: Shell_Install_Ios_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`iPhoneまたはiPadにインストールするには、共有をタップして「ホーム画面に追加」を選びます。`)
};

/**
* | output |
* | --- |
* | "To install on iPhone or iPad, tap Share, then “Add to Home Screen”." |
*
* @param {Shell_Install_Ios_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_install_ios_hint = /** @type {((inputs?: Shell_Install_Ios_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Install_Ios_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_install_ios_hint(inputs)
	if (locale === "de") return de_shell_install_ios_hint(inputs)
	if (locale === "fr") return fr_shell_install_ios_hint(inputs)
	if (locale === "it") return it_shell_install_ios_hint(inputs)
	if (locale === "nl") return nl_shell_install_ios_hint(inputs)
	if (locale === "pl") return pl_shell_install_ios_hint(inputs)
	if (locale === "pt") return pt_shell_install_ios_hint(inputs)
	if (locale === "ru") return ru_shell_install_ios_hint(inputs)
	if (locale === "sv") return sv_shell_install_ios_hint(inputs)
	if (locale === "tr") return tr_shell_install_ios_hint(inputs)
	if (locale === "zh") return zh_shell_install_ios_hint(inputs)
	if (locale === "ja") return ja_shell_install_ios_hint(inputs)
	return en_shell_install_ios_hint(inputs)
});
