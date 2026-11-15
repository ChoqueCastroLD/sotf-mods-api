/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_App_StepInputs */

const en_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click Install.`)
};

const es_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haz clic en Instalar.`)
};

const de_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf Installieren klicken.`)
};

const fr_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliquez sur Installer.`)
};

const it_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clicca Installa.`)
};

const nl_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klik op Installeren.`)
};

const pl_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kliknij Zainstaluj.`)
};

const pt_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clique em Instalar.`)
};

const ru_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажать «Установить».`)
};

const sv_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klicka på Installera.`)
};

const tr_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kur'a tıkla.`)
};

const zh_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`点击“安装”。`)
};

const ja_manager_app_step = /** @type {(inputs: Manager_App_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「インストール」をクリックする。`)
};

/**
* | output |
* | --- |
* | "Click Install." |
*
* @param {Manager_App_StepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_app_step = /** @type {((inputs?: Manager_App_StepInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_App_StepInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_app_step(inputs)
	if (locale === "de") return de_manager_app_step(inputs)
	if (locale === "fr") return fr_manager_app_step(inputs)
	if (locale === "it") return it_manager_app_step(inputs)
	if (locale === "nl") return nl_manager_app_step(inputs)
	if (locale === "pl") return pl_manager_app_step(inputs)
	if (locale === "pt") return pt_manager_app_step(inputs)
	if (locale === "ru") return ru_manager_app_step(inputs)
	if (locale === "sv") return sv_manager_app_step(inputs)
	if (locale === "tr") return tr_manager_app_step(inputs)
	if (locale === "zh") return zh_manager_app_step(inputs)
	if (locale === "ja") return ja_manager_app_step(inputs)
	return en_manager_app_step(inputs)
});
