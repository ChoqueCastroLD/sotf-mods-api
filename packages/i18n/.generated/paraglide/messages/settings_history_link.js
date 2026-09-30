/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_History_LinkInputs */

const en_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open my downloads`)
};

const es_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir mis descargas`)
};

const de_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Downloads öffnen`)
};

const fr_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir mes téléchargements`)
};

const it_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri i miei download`)
};

const nl_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn downloads openen`)
};

const pl_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz moje pobrania`)
};

const pt_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir meus downloads`)
};

const ru_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть мои загрузки`)
};

const sv_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna mina nedladdningar`)
};

const tr_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirdiklerimi aç`)
};

const zh_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开我的下载`)
};

const ja_settings_history_link = /** @type {(inputs: Settings_History_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴を開く`)
};

/**
* | output |
* | --- |
* | "Open my downloads" |
*
* @param {Settings_History_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_history_link = /** @type {((inputs?: Settings_History_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_History_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_history_link(inputs)
	if (locale === "de") return de_settings_history_link(inputs)
	if (locale === "fr") return fr_settings_history_link(inputs)
	if (locale === "it") return it_settings_history_link(inputs)
	if (locale === "nl") return nl_settings_history_link(inputs)
	if (locale === "pl") return pl_settings_history_link(inputs)
	if (locale === "pt") return pt_settings_history_link(inputs)
	if (locale === "ru") return ru_settings_history_link(inputs)
	if (locale === "sv") return sv_settings_history_link(inputs)
	if (locale === "tr") return tr_settings_history_link(inputs)
	if (locale === "zh") return zh_settings_history_link(inputs)
	if (locale === "ja") return ja_settings_history_link(inputs)
	return en_settings_history_link(inputs)
});
