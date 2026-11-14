/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Step_2Inputs */

const en_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click Install in the top bar if RedLoader is missing.`)
};

const es_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si falta RedLoader, haz clic en Instalar en la barra superior.`)
};

const de_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlt RedLoader, klicke oben auf Installieren.`)
};

const fr_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si RedLoader manque, cliquez sur Installer dans la barre du haut.`)
};

const it_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se manca RedLoader, clicca Installa nella barra in alto.`)
};

const nl_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontbreekt RedLoader, klik dan op Installeren in de bovenste balk.`)
};

const pl_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli brakuje RedLoadera, kliknij Zainstaluj na górnym pasku.`)
};

const pt_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se o RedLoader estiver faltando, clique em Instalar na barra superior.`)
};

const ru_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если RedLoader нет, нажмите «Установить» на верхней панели.`)
};

const sv_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om RedLoader saknas, klicka på Installera i den översta raden.`)
};

const tr_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader yoksa üst çubuktaki Kur'a tıkla.`)
};

const zh_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果缺少 RedLoader，点击顶部栏的“安装”。`)
};

const ja_manager_step_2 = /** @type {(inputs: Manager_Step_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader がない場合は、上部バーの「インストール」をクリックします。`)
};

/**
* | output |
* | --- |
* | "Click Install in the top bar if RedLoader is missing." |
*
* @param {Manager_Step_2Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_step_2 = /** @type {((inputs?: Manager_Step_2Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Step_2Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_step_2(inputs)
	if (locale === "de") return de_manager_step_2(inputs)
	if (locale === "fr") return fr_manager_step_2(inputs)
	if (locale === "it") return it_manager_step_2(inputs)
	if (locale === "nl") return nl_manager_step_2(inputs)
	if (locale === "pl") return pl_manager_step_2(inputs)
	if (locale === "pt") return pt_manager_step_2(inputs)
	if (locale === "ru") return ru_manager_step_2(inputs)
	if (locale === "sv") return sv_manager_step_2(inputs)
	if (locale === "tr") return tr_manager_step_2(inputs)
	if (locale === "zh") return zh_manager_step_2(inputs)
	if (locale === "ja") return ja_manager_step_2(inputs)
	return en_manager_step_2(inputs)
});
